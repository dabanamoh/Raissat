import { useNavigate } from "react-router";

import Container from "./Container";
import CardRow from "./Media/CardRow";
import { useContent } from "../content/live";

const FeaturedArticles = () => {
  const { home, articles } = useContent();
  const navigate = useNavigate();
  const section = home.featured || {};
  const limit = section.count || 4;
  const chosen = (section.articles || [])
    .map((item) => item?.article)
    .filter(Boolean)
    .map((path) => articles.find((a) => a.id === path.split("/").pop().replace(/\.md$/, "")))
    .filter(Boolean);
  const picks = (chosen.length > 0 ? chosen : articles.filter((a) => a.featured)).slice(0, limit);

  if (picks.length === 0) return null;

  return (
    <section className="bg-white/60">
      <Container className="py-16">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div className="max-w-[60ch]">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-inter text-midnight-green">
              {section.title}
            </h2>
            {section.text && <p className="p mt-3">{section.text}</p>}
          </div>
          {section.buttonLabel && (
            <button
              type="button"
              onClick={() => navigate(section.buttonRoute || "/media")}
              className="btn bg-midnight-green self-start sm:self-auto whitespace-nowrap"
            >
              {section.buttonLabel}
            </button>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {picks.map((article) => (
            <CardRow key={article.id} article={article} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FeaturedArticles;
