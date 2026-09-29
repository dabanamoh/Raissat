import { Link } from "react-router";
import { Images, Video } from "lucide-react";
import { formatDate, fill } from "../../utils";
import { mediaPage } from "../../content";

const EventCard = ({ event }) => {
  const photos = event.photos?.length || 0;
  const videos = event.videos?.length || 0;
  const cover = event.cover || event.photos?.[0]?.image || mediaPage.defaultThumbnail;

  return (
    <Link
      to={`/events/${event.id}`}
      className="group flex flex-col bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow"
    >
      <div className="aspect-[16/10] overflow-hidden">
        <img
          className="w-full h-full object-cover transition-transform duration-300 motion-safe:group-hover:scale-[1.03]"
          src={cover}
          alt=""
          loading="lazy"
        />
      </div>
      <div className="font-inter p-5 flex flex-col gap-2 grow">
        <p className="text-xs font-semibold uppercase tracking-wide text-midnight-green">
          {formatDate(event.date)}
          {event.location ? ` · ${event.location}` : ""}
        </p>
        <h3 className="text-rich-black font-bold text-base md:text-lg leading-snug">{event.title}</h3>
        {event.summary && <p className="text-sm text-slate-600 line-clamp-2">{event.summary}</p>}
        <div className="mt-auto pt-3 flex items-center justify-between gap-3 text-xs text-slate-500">
          <span className="inline-flex items-center gap-3">
            {photos > 0 && (
              <span className="inline-flex items-center gap-1">
                <Images className="size-4" aria-hidden="true" />
                {photos === 1 ? mediaPage.photoCountOne : fill(mediaPage.photoCountFormat, { count: photos })}
              </span>
            )}
            {videos > 0 && (
              <span className="inline-flex items-center gap-1">
                <Video className="size-4" aria-hidden="true" />
                {videos === 1 ? mediaPage.videoCountOne : fill(mediaPage.videoCountFormat, { count: videos })}
              </span>
            )}
          </span>
          <span className="text-sm font-semibold text-midnight-green group-hover:text-indian-yellow whitespace-nowrap">
            {mediaPage.viewEventLabel}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
