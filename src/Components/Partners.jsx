import Container from "./Container";
import { partners } from "../constants";

const Partners = () => {
  return (
    <section className="bg-bright-gray py-5">
      <Container>
        <h2 className="h1 text-center p-8 text-midnight-green">Our SDG Goals</h2>
        <ul className="flex flex-wrap justify-center gap-4 list-none m-0 p-0">
          {partners.map((sdg) => (
            <li key={sdg.label}>
              <img
                className="w-24 md:w-28 aspect-square h-auto"
                src={sdg.src}
                alt={sdg.label}
                loading="lazy"
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default Partners;
