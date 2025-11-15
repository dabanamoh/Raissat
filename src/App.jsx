import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router";

import ScrollTop from "./Components/ScrollTop";
import Spinner from "./Components/Spinner";

// import Home from "./Pages/Home";
// import About from "./Pages/About";
// import WhatWeDo from "./Pages/WhatWeDo";
// import Media from "./Pages/Media";
// import Layout from "./Pages/Layout";
// import ServicePage from "./Pages/ServicePage";
// import Contact from "./Pages/Contact";

const Home = lazy(() => import("./Pages/Home"));
const About = lazy(() => import("./Pages/About"));
const WhatWeDo = lazy(() => import("./Pages/WhatWeDo"));
const Media = lazy(() => import("./Pages/Media"));
const Layout = lazy(() => import("./Pages/Layout"));
const ServicePage = lazy(() => import("./Pages/ServicePage"));
const Contact = lazy(() => import("./Pages/Contact"));

function App() {
  return (
    <BrowserRouter>
      <ScrollTop />
      <Suspense fallback={<Spinner />}></Suspense>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<WhatWeDo />} />
          <Route path="media" element={<Media />} />
          <Route path="contact" element={<Contact />} />
          <Route path="services/:serviceId" element={<ServicePage />} />
          {/* <Route  */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
