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
    const events = ['click', 'keydown'];

    const toggleEvent = (event) => {
      if (event.type === 'keydown' && event.key === 'Escape') {
        toggleFunction();
        return;
      }

      if (event.type === 'click' && event.target.matches('.wrapper')) {
        toggleFunction();
        return;
      }
    };

    events.forEach(event => window.addEventListener(event, toggleEvent));

    // Cleanup on unmount
    return () => {
      events.forEach(event =>window.removeEventListener(event, toggleEvent));
    };
  }, []); // Dependency array ensures effect re-runs if function reference changes
};