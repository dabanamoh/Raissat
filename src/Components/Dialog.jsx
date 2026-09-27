import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

/**
 * Shared modal shell: portal to <body>, backdrop, close button, Escape key,
 * click-outside, body scroll lock, dialog semantics, and initial focus.
 * Content scrolls inside the panel when it is taller than the viewport.
 */
const Dialog = ({ onClose, label, className = "", children }) => {
  const panelRef = useRef(null);
  const closeRef = useRef(onClose);
  closeRef.current = onClose;

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const previouslyFocused = document.activeElement;
    document.body.style.overflow = "hidden";

    const onKey = (e) => {
      if (e.key === "Escape") closeRef.current();
    };
    window.addEventListener("keydown", onKey);

    // Prefer the first form field; otherwise the close button is a sane target.
    const panel = panelRef.current;
    const firstFocusable =
      panel?.querySelector("input, textarea, select") ||
      panel?.querySelector("button, a[href]");
    firstFocusable?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
      previouslyFocused?.focus?.();
    };
  }, []);

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) closeRef.current();
      }}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={label}
        className={`relative w-full bg-white/90 backdrop-blur-3xl rounded-xl shadow-2xl motion-safe:animate-fadeInScale ${className}`}
      >
        <button
          type="button"
          onClick={() => closeRef.current()}
          aria-label="Close"
          className="absolute top-2 right-2 sm:-top-3 sm:-right-3 z-10 bg-midnight-green text-white rounded-full p-2 sm:p-3 shadow-lg cursor-pointer transition-transform duration-200 hover:scale-110 active:scale-90"
        >
          <X className="size-5 sm:size-6" aria-hidden="true" />
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Dialog;
