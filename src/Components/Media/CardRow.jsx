import { Link } from "react-router";

const CardRow = ({ title, thumbnail, authorProfile, author, publishDate, to }) => {
  return (
    <Link
      to={to}
      className="group flex flex-col bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow"
    >
      <div className="aspect-[16/10] overflow-hidden">
        <img
          className="w-full h-full object-cover transition-transform duration-300 motion-safe:group-hover:scale-[1.03]"
          src={thumbnail}
          alt=""
          loading="lazy"
        />
      </div>
      <div className="font-inter p-5 flex flex-col gap-4 grow">
        <h3 className="text-rich-black font-bold text-base md:text-lg leading-snug">
          {title}
        </h3>
        <div className="mt-auto flex items-center justify-between gap-3">
          <div className="flex gap-3 items-center">
            <img
              className="rounded-full size-8 object-cover"
              src={authorProfile}
              alt=""
            />
            <span>
              <span className="block font-semibold text-xs">{author}</span>
              <span className="block text-xs text-gray-500 mt-0.5">{publishDate}</span>
            </span>
          </div>
          <span className="text-sm font-semibold text-midnight-green group-hover:text-indian-yellow whitespace-nowrap">
            Read article
          </span>
        </div>
      </div>
    </Link>
  );
};

export default CardRow;
