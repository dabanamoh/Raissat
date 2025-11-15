import { Link } from "react-router";
import { useEffect, useState } from "react";

import Container from "./Container";

const EventAdd = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const expiryDate = new Date("2025-11-20T18:00:00");
    const checkExpiry = () => {
      const now = new Date();
      if (now >= expiryDate) {
        setShow(false);
      }
    };
    const interval = setInterval(checkExpiry, 5000);

    checkExpiry();
    return () => clearInterval(interval);
  }, [show]);

  if (!show) return null;

  return (
    <section className="bg-bright-gray pb-5">
      <Container>
        <a href="https://tinyurl.com/na6krjd7" target="_blank">
          <picture className="flex justify-center items-center">
            <source media="(max-width: 470px)" srcSet="/assets/Media/mobileAd.jpg" />
            <source media="(max-width: 1024px)" srcSet="/assets/Media/tabletAd.jpg" />
            <img src="/assets/Media/desktopAd.jpg" alt="ad" />
          </picture>
        </a>
      </Container>
    </section>
  );
};

export default EventAdd;
