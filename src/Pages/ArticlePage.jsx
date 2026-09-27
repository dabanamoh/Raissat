import { useParams, Link } from "react-router";

import Container from "../Components/Container";
import PageMeta from "../Components/PageMeta";
import CardRow from "../Components/Media/CardRow";
import PageNotFound from "./PageNotFound";
import { media } from "../constants/media";
import { mediaAssets, global } from "../assets";
import { formatDate } from "../utils";

const { articles } = media;
const { thumbnail, defaultAvatar } = mediaAssets;
const { iconBack } = global;

const ArticlePage = () => {
  const { articleId } = useParams();
  const article = articles.find((a) => a.id === articleId);

  if (!article) return <PageNotFound />;

  const related = articles.filter((a) => a.id !== articleId);

  return (
    <Container className="py-16">
      <PageMeta title={article.title} description={article.source} />
      <article className="flex flex-col gap-6 max-w-4xl mx-auto">
        <header className="text-center">
          <h1 className="h1 text-rich-black">{article.title}</h1>
          <p className="font-inter mt-3 text-sm text-slate-600">
            Published {formatDate(article.date)} by {article.author}
          </p>
        </header>

        <img
          className="w-full aspect-video object-cover rounded-2xl"
          src={article.thumbnail}
          alt=""
          width="1280"
          height="720"
        />

        <div className="p flex flex-col gap-8 [&_p]:mb-5 [&_p:last-child]:mb-0">
          <div>{article.body}</div>
          {article.images?.length > 0 && (
            <div
              className={`grid gap-4 ${
                article.images.length === 1
                  ? "grid-cols-1"
                  : "grid-cols-1 md:grid-cols-3"
              }`}
            >
              {article.images.map((img, index) => (
                <img
                  className="mx-auto rounded-lg"
                  key={index}
                  src={img}
                  alt={`Figure ${index + 1} from the article`}
                  loading="lazy"
                />
              ))}
            </div>
          )}
          <div>{article.conclusion}</div>
        </div>

        <footer className="font-inter mt-4 flex items-center gap-3 text-sm text-slate-600 border-t border-slate-300 pt-6">
          <img
            className="size-10 rounded-full object-cover"
            src={article.authorProfile || defaultAvatar}
            alt=""
          />
          <span>
            <span className="block font-semibold text-rich-black">{article.author}</span>
            {article.reference ? (
              <a
                href={article.reference}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block py-1.5 underline underline-offset-2 hover:text-indian-yellow"
              >
                {article.publisher}
              </a>
            ) : (
              <span>{article.publisher}</span>
            )}
          </span>
        </footer>
      </article>

      <section className="mt-16 flex flex-col gap-7">
        <h2 className="font-semibold font-inter text-xl text-rich-black">
          More articles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {related.map((a) => (
            <CardRow
              key={a.id}
              title={a.title}
              thumbnail={a.thumbnail || thumbnail}
              author={a.author}
              authorProfile={a.authorProfile || defaultAvatar}
              publishDate={formatDate(a.date)}
              to={`/articles/${a.id}`}
            />
          ))}
        </div>
      </section>

      <Link
        to="/media"
        className="mt-12 mx-auto flex flex-col items-center gap-2 font-inter text-rich-black hover:text-indian-yellow w-max"
      >
        <img className="size-8" src={iconBack} alt="" />
        <span className="p">Back to all articles</span>
      </Link>
    </Container>
  );
};

export default ArticlePage;
