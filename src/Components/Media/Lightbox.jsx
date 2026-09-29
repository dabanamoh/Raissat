import { useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Dialog from "../Dialog";

const Lightbox = ({ photos, index, onClose, onIndex }) => {
  const photo = photos[index];
  const total = photos.length;

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") onIndex((index + 1) % total);
      if (e.key === "ArrowLeft") onIndex((index - 1 + total) % total);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, total, onIndex]);

  if (!photo) return null;

  return (
    <Dialog onClose={onClose} label={photo.caption || `Photo ${index + 1} of ${total}`} className="max-w-5xl" panelClassName="p-3 sm:p-4">
      <figure className="m-0 flex flex-col gap-3 font-inter">
        <div className="relative bg-bright-gray rounded-lg overflow-hidden">
          <img
            key={photo.image}
            src={photo.image}
            alt={photo.caption || ""}
            className="w-full max-h-[70vh] object-contain"
          />
          {total > 1 && (
            <>
              <button
                type="button"
                onClick={() => onIndex((index - 1 + total) % total)}
                aria-label="Previous photo"
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-rich-black/70 text-white rounded-full p-2 cursor-pointer hover:bg-rich-black"
              >
                <ChevronLeft className="size-6" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => onIndex((index + 1) % total)}
                aria-label="Next photo"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-rich-black/70 text-white rounded-full p-2 cursor-pointer hover:bg-rich-black"
              >
                <ChevronRight className="size-6" aria-hidden="true" />
              </button>
            </>
          )}
        </div>
        <figcaption className="flex justify-between gap-4 text-sm text-slate-600">
          <span>{photo.caption}</span>
          <span className="shrink-0 tabular-nums">
            {index + 1} / {total}
          </span>
        </figcaption>
      </figure>
    </Dialog>
  );
};

export default Lightbox;
