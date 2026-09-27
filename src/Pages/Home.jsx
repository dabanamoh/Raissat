import Hero from "../Components/Hero";
import AboutSummary from "../Components/AboutSummary";
import Services from "../Components/Services";
import FAQS from "../Components/FAQS";
import PageMeta from "../Components/PageMeta";

const Home = () => {
  return (
    <>
      <PageMeta />
      <Hero />
      <AboutSummary />
      <Services />
      <FAQS />
    </>
  );
};

export default Home;
