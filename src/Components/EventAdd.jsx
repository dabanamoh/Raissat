import Container from "./Container";
import { banner } from "../content";

const EventAdd = () => {
  if (!banner.enabled) return null;
  if (banner.expires && new Date() >= new Date(banner.expires)) return null;

  const image = (
    <picture className="flex justify-center items-center">
      {banner.imageMobile && (
        <source media="(max-width: 470px)" srcSet={banner.imageMobile} />
      )}
      {banner.imageTablet && (
        <source media="(max-width: 1024px)" srcSet={banner.imageTablet} />
      )}
      <img src={banner.imageDesktop} alt={banner.alt || ""} loading="lazy" />
    </picture>
  );

  return (
    <section className="bg-bright-gray pb-5">
      <Container>
        {banner.link ? (
          <a href={banner.link} target="_blank" rel="noopener noreferrer">
            {image}
          </a>
        ) : (
          image
        )}
      </Container>
    </section>
  );
};

export default EventAdd;
