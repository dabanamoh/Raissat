import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router";

import ScrollTop from "./Components/ScrollTop";
import Spinner from "./Components/Spinner";

const Home = lazy(() => import("./Pages/Home"));
const About = lazy(() => import("./Pages/About"));
const WhatWeDo = lazy(() => import("./Pages/WhatWeDo"));
const Media = lazy(() => import("./Pages/Media"));
const Layout = lazy(() => import("./Pages/Layout"));
const ServicePage = lazy(() => import("./Pages/ServicePage"));
const Contact = lazy(() => import("./Pages/Contact"));
const ArticlePage = lazy(() => import("./Pages/ArticlePage"));
const PageNotFound = lazy(() => import("./Pages/PageNotFound"));
const FAQs = lazy(() => import("./Pages/FAQs"));

const Fallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-bright-gray">
    <Spinner />
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <ScrollTop />
      <Suspense fallback={<Fallback />}>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<WhatWeDo />} />
            <Route path="services/:serviceId" element={<ServicePage />} />
            <Route path="media" element={<Media />} />
            <Route path="articles/:articleId" element={<ArticlePage />} />
            <Route path="contact" element={<Contact />} />
            <Route path="faqs" element={<FAQs />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
