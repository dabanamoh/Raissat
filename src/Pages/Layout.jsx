import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import CTA from "../Components/CTA";
import EventAdd from "../Components/EventAdd";
import Partners from "../Components/Partners";

const Layout = () => {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <header>
        <Navbar />
      </header>
      <main id="main" className="pt-16 bg-bright-gray min-h-[calc(100vh-96px)]">
        <Outlet />
      </main>
      <Partners />
      <EventAdd />
      <CTA />
      <Footer />
    </>
  );
};

export default Layout;
