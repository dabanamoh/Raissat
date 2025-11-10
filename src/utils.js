import { useEffect } from "react";

export const truncateText = (str, maxlength) => {
  return str.length > maxlength
    ? str.split(" ").slice(0, maxlength).join(" ") + "…"
    : str;
};

export const handleCtaClick = (navigate, route) => {
  navigate(route);
};


export const useEvent = (toggleFunction) => {
  useEffect(() => {
    const toggleEvent = (event, selector = '') => {
      if (event.type === 'keydown' && event.key === 'Escape') {
        toggleFunction();
      }

      if (event.type === 'click' && event.target.matches(selector)) {
        toggleFunction();
      }
    };

    window.addEventListener("keydown", toggleEvent);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("keydown", toggleEvent);
    };
  }, []); // Dependency array ensures effect re-runs if function reference changes
};