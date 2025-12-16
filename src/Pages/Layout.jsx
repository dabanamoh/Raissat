import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import CTA from "../Components/CTA";
import EventAdd from "../Components/EventAdd";
import Partners from "../Components/Partners";

const Layout = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="pt-16 bg-bright-gray min-h-[calc(100vh-96px)]">
        <Outlet />
      </main>
      <Partners />
      <EventAdd />
      <CTA />
      {/* <hr className="border-t border-gray-500" /> */}
      <Footer />
    </>
  );
};

export default Layout;
