import AboutFull from "../Components/About/AboutFull";
import Team from "../Components/About/Team";
import PageMeta from "../Components/PageMeta";
import { about } from "../content";

const About = () => {
  return (
    <div className="bg-bright-gray">
      <PageMeta title={about.metaTitle || about.title} description={about.metaDescription} />
      <AboutFull />
      <Team />
    </div>
  );
};

export default About;
