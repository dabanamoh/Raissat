#!/usr/bin/env bash
# Reverts commits by non-owners that change files outside the editor areas.
# Run by .github/workflows/content-guard.yml on every push to main.
set -euo pipefail

# Paths editors may create, edit and delete freely.
ALLOWED_PREFIXES=("src/content/articles/" "src/content/team/")
# Editors may ADD files here (image uploads) but not change or delete existing ones.
UPLOAD_PREFIX="public/assets/"

OWNERS="${CONTENT_OWNERS:-}"
BEFORE="${BEFORE:-}"
AFTER="${AFTER:-}"

is_owner() {
  local email="${1,,}"
  IFS=',' read -ra list <<<"${OWNERS,,}"
  for o in "${list[@]}"; do
    o="$(echo "$o" | xargs)"
    [[ -n "$o" && "$o" == "$email" ]] && return 0
  done
  return 1
}

if [[ -z "$AFTER" || "$AFTER" =~ ^0+$ ]]; then
  echo "Branch deleted; nothing to check."
  exit 0
fi
if [[ -z "$BEFORE" || "$BEFORE" =~ ^0+$ ]] || ! git cat-file -e "$BEFORE" 2>/dev/null; then
  commits="$(git rev-list --reverse -1 "$AFTER")"
else
  commits="$(git rev-list --reverse "$BEFORE..$AFTER")"
fi

violations=()
report=""

declare -A who

for sha in $commits; do
  email="$(git log -1 --format=%ae "$sha")"
  name="$(git log -1 --format=%an "$sha")"
  # Tina Cloud commits as its bot and names the editor in a Co-authored-by trailer.
  if [[ "$email" == *tinacloud-app* ]]; then
    co="$(git log -1 --format=%B "$sha" | grep -i '^Co-authored-by:' | head -1 || true)"
    if [[ "$co" =~ \<([^\>]+)\> ]]; then
      email="${BASH_REMATCH[1]}"
      name="$(sed -E 's/^[Cc]o-authored-by: *//; s/ *<.*$//' <<<"$co")"
    fi
  fi
  who[$sha]="$name"
  if is_owner "$email"; then
    echo "ok   $sha by $name <$email> (owner)"
    continue
  fi
  bad=()
  while IFS=$'\t' read -r status path; do
    [[ -z "${path:-}" ]] && continue
    ok=false
    for p in "${ALLOWED_PREFIXES[@]}"; do
      [[ "$path" == "$p"* ]] && ok=true
    done
    if [[ "$path" == "$UPLOAD_PREFIX"* && "$status" == "A" ]]; then ok=true; fi
    $ok || bad+=("$status"$'\t'"$path")
  done < <(git diff-tree --no-commit-id --name-status -r --no-renames "$sha")

  if [[ ${#bad[@]} -eq 0 ]]; then
    echo "ok   $sha by $name <$email>"
    continue
  fi
  echo "UNDO $sha by $name <$email>"
  violations+=("$sha")
  report+=$'\n'"### $(git log -1 --format='%s' "$sha")"$'\n'
  report+="Commit \`$sha\` by **$name** <$email>"$'\n\n'
  for b in "${bad[@]}"; do
    status="${b%%$'\t'*}"; path="${b#*$'\t'}"
    case "$status" in
      A) word="added" ;; D) word="deleted" ;; *) word="changed" ;;
    esac
    report+="- $word \`$path\`"$'\n'
  done
done

if [[ ${#violations[@]} -eq 0 ]]; then
  echo "No unauthorized changes."
  exit 0
fi

git config user.name "Content guard"
git config user.email "content-guard@users.noreply.github.com"

# Undo newest first so each revert applies cleanly.
for ((i = ${#violations[@]} - 1; i >= 0; i--)); do
  sha="${violations[$i]}"
  if ! git revert --no-edit "$sha" >/dev/null 2>&1; then
    git revert --abort || true
    # Fall back to restoring only the disallowed files.
    while IFS=$'\t' read -r status path; do
      [[ -z "${path:-}" ]] && continue
      ok=false
      for p in "${ALLOWED_PREFIXES[@]}"; do [[ "$path" == "$p"* ]] && ok=true; done
      [[ "$path" == "$UPLOAD_PREFIX"* && "$status" == "A" ]] && ok=true
      $ok && continue
      if [[ "$status" == "A" ]]; then
        git rm -q --ignore-unmatch -- "$path"
      else
        git checkout "$sha^" -- "$path"
      fi
    done < <(git diff-tree --no-commit-id --name-status -r --no-renames "$sha")
    git commit -q -m "Undo unauthorized change from $sha" || true
  fi
done

if ! git push origin HEAD:main; then
  git pull --rebase origin main
  git push origin HEAD:main
fi

body="The content guard undid the following change(s) because they were made by an editor outside the areas editors may change (Articles, Team, and new image uploads).
$report
The site has been restored automatically. If this change was intended, an owner can make it, or add the person's email to CONTENT_OWNERS in \`.github/workflows/content-guard.yml\`."

gh issue create \
  --title "Content guard undid a change by ${who[${violations[0]}]}" \
  --body "$body" \
  --assignee "${OWNER_LOGIN:-}" \
  || gh issue create --title "Content guard undid an editor's change" --body "$body"
