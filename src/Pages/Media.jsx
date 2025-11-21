// import { useState } from "react";

import Nav from "../Components/Media/Nav";
import CardRow from "../Components/Media/CardRow";
import Container from "../Components/Container";
// import MediaCard from "../Components/Media/MediaCard";
// import { truncateText } from "../utils";

import { media } from "../constants/media";
import { mediaAssets } from "../assets";

const { articles } = media;
const { thumbnail, defaultAvatar } = mediaAssets;

const Media = () => {
  // const [activeTab, setActiveTab] = useState("All");

  return (
    <Container className="py-16 w-full sm:w-[90%] md:w-[85%] mx-auto">
      <h1 className="font-semibold font-inter text-rich-black mb-8 h1">
        Featured Articles
      </h1>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {articles.map((article, idx) => (
          <CardRow
            key={idx}
            title={article.title}
            thumbnail={article.thumbnail || thumbnail}
            author={article.author}
            authorProfile={article.authorProfile || defaultAvatar}
            publishDate={new Date(article.date).getFullYear()}
            to={`/articles/${article.id}`}
            // body={truncateText(article.body, 20)}
          />
        ))}
      </section>
      {/* <Nav activeTab={activeTab} setActiveTab={setActiveTab} /> */}
      {/* {activeTab === "All" && (
        <>
        

          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <MediaCard />
            <MediaCard />
            <MediaCard />
          </section>
        </>
      )} */}

      {/* {activeTab === "Blogs" && (
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {blogs.map((blog) => (
            <CardRow
              title={blog.title}
              thumbnail={blog.thumbnail}
              authorProfile={blog.authorProfile}
              body={blog.body}
            />
          ))}
        </section>
      )} */}

      {/* {activeTab === "Media" && (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <MediaCard />
          <MediaCard />
          <MediaCard />
        </section>
      )} */}

      {/* {activeTab === "Articles" && (
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {articles.map((article) => (
            <CardRow
              title={article.title}
              thumbnail={article.thumbnail}
              authorProfile={article.authorProfile}
              body={article.body}
            />
          ))}
        </section>
      )} */}
    </Container>
  );
};

export default Media;
