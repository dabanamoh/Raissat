import { useParams, useNavigate } from "react-router";

import Container from "../Components/Container";
import CardRow from "../Components/Media/CardRow";
import { media } from "../constants/media";
import { mediaAssets, global } from "../assets";


const { articles } = media;
const { thumbnail, defaultAvatar } = mediaAssets;
const { iconBack } = global;

const ArticlePage = () => {
  const navigate = useNavigate();
  const { articleId } = useParams();
  const article = articles.find((article) => article.id === articleId);
  // console.log(article);

  return (
    <Container className="py-20">
      <article className="flex flex-col gap-6">
        <header className="text-center">
          <h1 className="h1 text-rich-black">{article.title}</h1>
          <p className="font-inter mt-2 text-xs text-slate-500">
            {`Published on ${new Date(article.date).getFullYear()}, by ${
              article.author
            }`}
          </p>
        </header>
        <img className="rounded-2xl h-[70vh]" src={article.thumbnail} alt="hero-image" />
        <div className="p leading-7 flex flex-col gap-8">
          <span>{article.body}</span>
          <div
            className={`grid ${
              article.images.length === 1
                ? "grid-cols-1 text-center"
                : "grid-cols-1 md:grid-cols-3 gap-4"
            } `}
          >
            {article.images?.map((img, index) => (
              <img
                className={`mx-auto`}
                key={index}
                src={img}
                alt="article-image"
              />
            ))}
          </div>
          <span>{article.conclusion}</span>
        </div>

        <div className="font-inter mt-2 text-xs text-slate-500">
          <span className="flex items-center gap-1">
            <img
              className="size-8 rounded-full"
              src={article.authorProfile}
              alt="author-profile"
            />
            <span>
              <p>{article.author}</p>
              <a href={article.reference} target="_blank">
                {article.publisher}
              </a>
            </span>
          </span>
        </div>
      </article>

      <div className="mt-12 flex flex-col gap-7">
        <h1 className="font-semibold font-inter text-rich-black">Featured Articles</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {articles.map((article, idx) => {
            if (article.id === articleId) return;
            return (
              <CardRow
                key={idx}
                title={article.title}
                thumbnail={article.thumbnail || thumbnail}
                author={article.author}
                authorProfile={article.authorProfile || defaultAvatar}
                publishDate={new Date(article.date).getFullYear()}
                to={`/articles/${article.id}`}
              />
            );
          })}
        </div>
      </div>
      <div onClick={() => navigate('/media')} className="w-full text-center mt-6 cursor-pointer">
        <img className="max-sm:size-8 mx-auto mb-4" src={iconBack} alt="go-back" />
        <p className="p text text-rich-black">Articles</p>
      </div>
    </Container>
  );
};

export default ArticlePage;
