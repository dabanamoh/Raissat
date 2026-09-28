import { useState } from "react";

import CardRow from "../Components/Media/CardRow";
import Container from "../Components/Container";
import PageMeta from "../Components/PageMeta";
import { articles, mediaPage } from "../content";

const Media = () => {
  const [active, setActive] = useState(mediaPage.allLabel);
  const categories = (mediaPage.categories || []).filter((c) =>
    articles.some((a) => a.category === c)
  );
  const tabs = [mediaPage.allLabel, ...categories];
  const visible =
    active === mediaPage.allLabel ? articles : articles.filter((a) => a.category === active);

  return (
    <Container className="py-16">
      <PageMeta title={mediaPage.title} description={mediaPage.metaDescription} />
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
        <h1 className="font-semibold font-inter text-rich-black h1">{mediaPage.heading}</h1>
        {categories.length > 1 && (
          <div role="tablist" aria-label="Filter by type" className="flex flex-wrap gap-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                role="tab"
                aria-selected={active === tab}
                onClick={() => setActive(tab)}
                className={`px-4 py-2 rounded-full font-inter text-sm font-medium cursor-pointer transition ${
                  active === tab
                    ? "bg-midnight-green text-white"
                    : "bg-white text-midnight-green hover:bg-midnight-green/10"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        )}
      </div>

      {visible.length === 0 ? (
        <p className="p">{mediaPage.emptyText}</p>
      ) : (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((article) => (
            <CardRow key={article.id} article={article} />
          ))}
        </section>
      )}
    </Container>
  );
};

export default Media;
