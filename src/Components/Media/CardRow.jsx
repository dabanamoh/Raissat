import { Link } from "react-router";
import { formatDate } from "../../utils";
import { mediaPage } from "../../content";

const DEFAULT_THUMB = "/assets/Media/articles/thumbnail.webp";
const DEFAULT_AVATAR = "/assets/Media/articles/defaultAvatar.svg";

const CardRow = ({ article }) => {
  return (
    <Link
      to={`/articles/${article.id}`}
      className="group flex flex-col bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow"
    >
      <div className="aspect-[16/10] overflow-hidden relative">
        <img
          className="w-full h-full object-cover transition-transform duration-300 motion-safe:group-hover:scale-[1.03]"
          src={article.thumbnail || DEFAULT_THUMB}
          alt=""
          loading="lazy"
        />
        {article.category && (
          <span className="absolute top-3 left-3 bg-rich-black/80 text-white text-xs font-inter font-semibold px-2.5 py-1 rounded-full">
            {article.category}
          </span>
        )}
      </div>
      <div className="font-inter p-5 flex flex-col gap-3 grow">
        <h3 className="text-rich-black font-bold text-base md:text-lg leading-snug">
          {article.title}
        </h3>
        {article.excerpt && (
          <p className="text-sm text-slate-600 line-clamp-3">{article.excerpt}</p>
        )}
        <div className="mt-auto pt-2 flex items-center justify-between gap-3">
          <div className="flex gap-3 items-center">
            <img
              className="rounded-full size-8 object-cover"
              src={article.authorImage || DEFAULT_AVATAR}
              alt=""
            />
            <span>
              <span className="block font-semibold text-xs">{article.author}</span>
              <span className="block text-xs text-gray-500 mt-0.5">
                {formatDate(article.date)}
              </span>
            </span>
          </div>
          <span className="text-sm font-semibold text-midnight-green group-hover:text-indian-yellow whitespace-nowrap">
            {mediaPage.readLabel}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default CardRow;
