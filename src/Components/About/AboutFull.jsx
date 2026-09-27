import Container from "../Container";
import Markdown from "../Markdown";
import { about } from "../../content";

const AboutFull = () => {
  const { philosophy } = about;

  return (
    <>
      <Container>
        <div className="py-16">
          <h1 className="h1 mb-4 text-midnight-green">{about.title}</h1>
          <Markdown className="p max-w-[75ch]">{about.intro}</Markdown>
        </div>
      </Container>

      <section className="py-10 bg-rich-black font-inter text-white">
        <Container>
          <div className="mb-8 max-w-[75ch]">
            <h2 className="mb-5 font-semibold text-xl text-indian-yellow">
              {philosophy.title}
            </h2>
            <Markdown className="p">{philosophy.text}</Markdown>

            <p className="p mb-5 mt-8">{philosophy.pillarsIntro}</p>
            <ol className="p space-y-2 list-decimal list-inside">
              {philosophy.pillars.map((pillar) => (
                <li key={pillar.title}>
                  <span className="font-bold">{pillar.title} - </span>
                  {pillar.text}
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>
    </>
  );
};

export default AboutFull;
