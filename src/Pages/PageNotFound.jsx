import { Link } from "react-router";
import PageMeta from "../Components/PageMeta";
import { notFound } from "../content";

const PageNotFound = () => {
  return (
    <div className="text-center bg-bright-gray min-h-[60vh] flex flex-col items-center justify-center py-24 px-5">
      <PageMeta title={notFound.title} />
      <h1 className="text-red-600 text-6xl font-inter font-bold">{notFound.code}</h1>
      <p className="text-2xl font-inter text-gray-600 mt-2">{notFound.heading}</p>
      <p className="p mt-2 text-gray-600">{notFound.text}</p>
      <Link to={notFound.buttonRoute || "/"} className="btn mt-6 bg-midnight-green hover:bg-rich-black">
        {notFound.buttonLabel}
      </Link>
    </div>
  );
};

export default PageNotFound;
