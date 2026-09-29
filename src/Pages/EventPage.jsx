import { useState } from "react";
import { useParams, Link } from "react-router";
import { ExternalLink } from "lucide-react";

import Container from "../Components/Container";
import PageMeta from "../Components/PageMeta";
import Markdown from "../Components/Markdown";
import Lightbox from "../Components/Media/Lightbox";
import PageNotFound from "./PageNotFound";
import { useContent } from "../content/live";
import { formatDate, videoEmbed } from "../utils";

const BACK_ICON = "/assets/iconBack.svg";

const EventPage = () => {
  const { events, mediaPage } = useContent();
  const { eventId } = useParams();
  const [open, setOpen] = useState(null);
  const event = events.find((e) => e.id === eventId);

  if (!event) return <PageNotFound />;

  const photos = (event.photos || []).filter((p) => p?.image);
  const videos = (event.videos || []).filter((v) => v?.url);

  return (
    <Container className="py-16">
      <PageMeta
        title={event.title}
        description={event.summary}
        image={event.cover || photos[0]?.image}
      />
      <header className="max-w-4xl mx-auto text-center">
        <p className="font-inter text-sm font-semibold uppercase tracking-wide text-midnight-green">
          {formatDate(event.date)}
          {event.location ? ` · ${event.location}` : ""}
        </p>
        <h1 className="h1 text-rich-black mt-2">{event.title}</h1>
        {event.body && <Markdown className="p mt-5 text-left max-w-[70ch] mx-auto">{event.body}</Markdown>}
      </header>

      {photos.length > 0 && (
        <section className="mt-12">
          <h2 className="font-semibold font-inter text-xl text-rich-black mb-5">{mediaPage.photosLabel}</h2>
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 list-none m-0 p-0">
            {photos.map((photo, i) => (
              <li key={`${photo.image}-${i}`}>
                <button
                  type="button"
                  onClick={() => setOpen(i)}
                  aria-label={photo.caption || `Open photo ${i + 1}`}
                  className="block w-full aspect-[4/3] overflow-hidden rounded-lg bg-white shadow-sm cursor-pointer group"
                >
                  <img
                    src={photo.image}
                    alt={photo.caption || ""}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-300 motion-safe:group-hover:scale-[1.03]"
                  />
                </button>
              </li>
            ))}
          </ul>
        </section>
      )}

      {videos.length > 0 && (
        <section className="mt-12">
          <h2 className="font-semibold font-inter text-xl text-rich-black mb-5">{mediaPage.videosLabel}</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 list-none m-0 p-0">
            {videos.map((video, i) => {
              const embed = videoEmbed(video.url);
              return (
                <li key={`${video.url}-${i}`} className="font-inter">
                  {embed ? (
                    <div className="aspect-video rounded-lg overflow-hidden bg-rich-black shadow-sm">
                      <iframe
                        src={embed}
                        title={video.title || `Video ${i + 1}`}
                        className="w-full h-full"
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    </div>
                  ) : (
                    <a
                      href={video.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 p-4 bg-white rounded-lg shadow-sm text-midnight-green font-semibold hover:text-indian-yellow"
                    >
                      <ExternalLink className="size-5 shrink-0" aria-hidden="true" />
                      <span className="truncate">{video.title || video.url}</span>
                    </a>
                  )}
                  {video.title && embed && <p className="mt-2 text-sm text-slate-600">{video.title}</p>}
                </li>
              );
            })}
          </ul>
        </section>
      )}

      {open !== null && (
        <Lightbox photos={photos} index={open} onIndex={setOpen} onClose={() => setOpen(null)} />
      )}

      <Link
        to="/media"
        className="mt-12 mx-auto flex flex-col items-center gap-2 font-inter text-rich-black hover:text-indian-yellow w-max"
      >
        <img className="w-10 h-auto" src={BACK_ICON} alt="" />
        <span className="p">{mediaPage.eventBackLabel}</span>
      </Link>
    </Container>
  );
};

export default EventPage;
