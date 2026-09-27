import { useParams, Link } from "react-router";

import Container from "../Components/Container";
import PageMeta from "../Components/PageMeta";
import Markdown from "../Components/Markdown";
import CardRow from "../Components/Media/CardRow";
import PageNotFound from "./PageNotFound";
import { articles, mediaPage } from "../content";
import { formatDate } from "../utils";

const DEFAULT_AVATAR = "/assets/Media/articles/defaultAvatar.svg";
const BACK_ICON = "/assets/iconBack.svg";

const ArticlePage = () => {
  const { articleId } = useParams();
  const article = articles.find((a) => a.id === articleId);

  if (!article) return <PageNotFound />;

  const related = articles.filter((a) => a.id !== articleId).slice(0, 3);
  const images = article.images || [];

  return (
    <Container className="py-16">
      <PageMeta
        title={article.title}
        description={article.excerpt || article.publisher}
        image={article.thumbnail}
      />
      <article className="flex flex-col gap-6 max-w-4xl mx-auto">
        <header className="text-center">
          <h1 className="h1 text-rich-black">{article.title}</h1>
          <p className="font-inter mt-3 text-sm text-slate-600">
            Published {formatDate(article.date)} by {article.author}
          </p>
        </header>

        {article.thumbnail && (
          <img
            className="w-full aspect-video object-cover rounded-2xl"
            src={article.thumbnail}
            alt=""
            width="1280"
            height="720"
          />
        )}

        <div className="p flex flex-col gap-8">
          <Markdown>{article.body}</Markdown>

          {images.length > 0 && (
            <figure className="flex flex-col gap-3">
              <div
                className={`grid gap-4 ${
                  images.length === 1 ? "grid-cols-1" : "grid-cols-1 md:grid-cols-3"
                }`}
              >
                {images.map((img, index) => (
                  <img
                    className="mx-auto rounded-lg"
                    key={img}
                    src={img}
                    alt={article.imageCaption || `Figure ${index + 1} from the article`}
                    loading="lazy"
                  />
                ))}
              </div>
              {article.imageCaption && (
                <figcaption className="text-sm text-slate-600 font-inter">
                  {article.imageCaption}
                </figcaption>
              )}
            </figure>
          )}

          <Markdown>{article.conclusion}</Markdown>
        </div>

        <footer className="font-inter mt-4 flex items-center gap-3 text-sm text-slate-600 border-t border-slate-300 pt-6">
          <img
            className="size-10 rounded-full object-cover"
            src={article.authorImage || DEFAULT_AVATAR}
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
                {article.publisher || article.reference}
              </a>
            ) : (
              <span>{article.publisher}</span>
            )}
          </span>
        </footer>
      </article>

      {related.length > 0 && (
        <section className="mt-16 flex flex-col gap-7">
          <h2 className="font-semibold font-inter text-xl text-rich-black">
            {mediaPage.relatedHeading}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map((a) => (
              <CardRow key={a.id} article={a} />
            ))}
          </div>
        </section>
      )}

      <Link
        to="/media"
        className="mt-12 mx-auto flex flex-col items-center gap-2 font-inter text-rich-black hover:text-indian-yellow w-max"
      >
        <img className="w-10 h-auto" src={BACK_ICON} alt="" />
        <span className="p">{mediaPage.backLabel}</span>
      </Link>
    </Container>
  );
};

export default ArticlePage;
