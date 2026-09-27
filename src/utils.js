export const truncateText = (str, maxlength) => {
  return str.length > maxlength
    ? str.split(" ").slice(0, maxlength).join(" ") + "…"
    : str;
};

export const handleCtaClick = (navigate, route) => {
  navigate(route);
};

export const formatDate = (value) =>
  new Date(value).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
