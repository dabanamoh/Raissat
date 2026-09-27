import CardRow from "../Components/Media/CardRow";
import Container from "../Components/Container";
import PageMeta from "../Components/PageMeta";

import { media } from "../constants/media";
import { mediaAssets } from "../assets";
import { formatDate } from "../utils";

const { articles } = media;
const { thumbnail, defaultAvatar } = mediaAssets;

const Media = () => {
  return (
    <Container className="py-16">
      <PageMeta
        title="Media Center"
        description="Articles and publications from RAISSAT researchers on ethics, antimicrobial resistance, public health preparedness and drug design."
      />
      <h1 className="font-semibold font-inter text-rich-black mb-8 h1">
        Featured Articles
      </h1>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <CardRow
            key={article.id}
            title={article.title}
            thumbnail={article.thumbnail || thumbnail}
            author={article.author}
            authorProfile={article.authorProfile || defaultAvatar}
            publishDate={formatDate(article.date)}
            to={`/articles/${article.id}`}
          />
        ))}
      </section>
    </Container>
  );
};

export default Media;
