import Container from "./Container";
import { useContent } from "../content/live";

const EventAdd = () => {
  const { banner } = useContent();
  if (!banner.enabled) return null;
  const now = new Date();
  if (banner.starts && now < new Date(banner.starts)) return null;
  if (banner.expires && now >= new Date(banner.expires)) return null;

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
