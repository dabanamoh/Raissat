const SITE = "RAISSAT";
const DEFAULT_DESCRIPTION =
  "RAISSAT, the Research Applied Institute for Sustainability in Science, Agriculture and Technology, turns research into real-world impact through applied projects, policy engagement, consultancy, capacity building and youth mentorship.";

// React 19 hoists <title> and <meta> rendered anywhere in the tree into <head>.
const PageMeta = ({ title, description = DEFAULT_DESCRIPTION }) => (
  <>
    <title>{title ? `${title} · ${SITE}` : SITE}</title>
    <meta name="description" content={description} />
  </>
);

export default PageMeta;
