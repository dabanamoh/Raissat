import AboutFull from "../Components/About/AboutFull";
import Team from "../Components/About/Team";
import PageMeta from "../Components/PageMeta";

const About = () => {
  return (
    <div className="bg-bright-gray">
      <PageMeta
        title="Who We Are"
        description="RAISSAT is a multidisciplinary institute bridging research, innovation and policy. Meet the leadership team and read our impact philosophy."
      />
      <AboutFull />
      <Team />
    </div>
  );
};

export default About;
