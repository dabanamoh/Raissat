import { aboutPage } from "../../constants";
import Container from "../Container";

const { about } = aboutPage;

const pillars = [
  ["Evidence-Based Action", "Science that informs and transforms."],
  ["Collaborative Innovation", "Partnerships that amplify reach and relevance."],
  ["Capacity Development", "Building people before programs."],
  ["Policy Integration", "Embedding science into governance."],
  ["Sustainability First", "Ensuring progress lasts beyond projects."],
];

const AboutFull = () => {
  return (
    <>
      <Container>
        <div className="py-16">
          <h1 className="h1 mb-4 text-midnight-green">{about.title}</h1>
          <div className="p max-w-[75ch] [&_p+p]:mt-4">{about.text}</div>
        </div>
      </Container>

      <section className="py-10 bg-rich-black font-inter">
        <Container>
          <div className="mb-8 max-w-[75ch]">
            <h2 className="mb-5 font-semibold text-xl text-indian-yellow">
              Our Impact Philosophy
            </h2>
            <p className="p text-white">At RAISSAT, impact is intentional.</p>
            <p className="p text-white">
              We measure success not by the number of reports written but by the
              lives improved, the systems strengthened, and the policies
              changed.
            </p>

            <p className="p mb-5 mt-8 text-white">
              Every project we undertake is built on five core pillars that
              define our approach:
            </p>
            <ol className="p text-white space-y-2 list-decimal list-inside">
              {pillars.map(([title, text]) => (
                <li key={title}>
                  <span className="font-bold">{title} - </span>
                  {text}
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
