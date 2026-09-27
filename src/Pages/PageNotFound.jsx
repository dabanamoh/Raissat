import { Link } from "react-router";
import PageMeta from "../Components/PageMeta";

const PageNotFound = () => {
  return (
    <div className="text-center bg-bright-gray min-h-[60vh] flex flex-col items-center justify-center py-24 px-5">
      <PageMeta title="Page not found" />
      <h1 className="text-red-600 text-6xl font-inter font-bold">404</h1>
      <p className="text-2xl font-inter text-gray-600 mt-2">Page not found</p>
      <p className="p mt-2 text-gray-600">
        The link may be out of date or the page may have moved.
      </p>
      <Link to="/" className="btn mt-6 bg-midnight-green hover:bg-rich-black">
        Go to the home page
      </Link>
    </div>
  );
};

export default PageNotFound;
