import React, { useEffect, useState } from "react";
import { wrapFieldsWithMeta, useCMS } from "tinacms";

// Photo picker for the content manager: previews the chosen image, shows its
// pixel size and file size, and refuses files larger than MAX_BYTES.
export const MAX_BYTES = 5 * 1024 * 1024;
const UPLOAD_DIR = "Media/events";

const formatBytes = (n) =>
  n >= 1024 * 1024 ? `${(n / 1024 / 1024).toFixed(1)} MB` : `${Math.max(1, Math.round(n / 1024))} KB`;

const measure = (url) =>
  new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve({ width: img.naturalWidth, height: img.naturalHeight });
    img.onerror = () => resolve(null);
    img.src = url;
  });

const fileSize = async (url) => {
  try {
    const res = await fetch(url, { method: "HEAD" });
    const len = Number(res.headers.get("content-length"));
    if (len > 0) return len;
  } catch {
    /* fall through */
  }
  try {
    const res = await fetch(url);
    return (await res.blob()).size;
  } catch {
    return null;
  }
};

const btn = {
  font: "inherit",
  fontSize: 13,
  fontWeight: 600,
  padding: "6px 12px",
  borderRadius: 6,
  border: "1px solid #cbd5e1",
  background: "#fff",
  cursor: "pointer",
};

const PhotoInput = ({ input }) => {
  const cms = useCMS();
  const value = input.value || "";
  const [src, setSrc] = useState("");
  const [info, setInfo] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;
    setInfo(null);
    if (!value) {
      setSrc("");
      return undefined;
    }
    (async () => {
      let url = value;
      try {
        const preview = cms.media.previewSrc ? await cms.media.previewSrc(value) : value;
        if (preview) url = preview;
      } catch {
        /* keep the raw path */
      }
      if (cancelled) return;
      setSrc(url);
      const [dims, bytes] = await Promise.all([measure(url), fileSize(url)]);
      if (!cancelled) setInfo({ ...(dims || {}), bytes });
    })();
    return () => {
      cancelled = true;
    };
  }, [value, cms.media]);

  const choose = () => {
    setError("");
    cms.media.open({
      allowDelete: true,
      directory: UPLOAD_DIR,
      onSelect: async (media) => {
        const url = media.src || "";
        const bytes = url ? await fileSize(url) : null;
        if (bytes && bytes > MAX_BYTES) {
          setError(`That file is ${formatBytes(bytes)}. Photos must be 5 MB or smaller.`);
          return;
        }
        input.onChange(cms.media.store.parse ? cms.media.store.parse(media) : url);
      },
    });
  };

  const tooBig = info?.bytes > MAX_BYTES;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      {value ? (
        <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
          <img
            src={src}
            alt=""
            style={{ width: 160, maxHeight: 160, objectFit: "cover", borderRadius: 8, background: "#e2e8f0" }}
          />
          <div style={{ fontSize: 13, color: "#475569", lineHeight: 1.6, minWidth: 0 }}>
            <div style={{ wordBreak: "break-all" }}>{value.split("/").pop()}</div>
            <div>
              {info?.width ? `${info.width} × ${info.height} px` : "Measuring…"}
              {info?.bytes ? ` · ${formatBytes(info.bytes)}` : ""}
            </div>
            {tooBig && (
              <div style={{ color: "#b91c1c", fontWeight: 600 }}>
                Over the 5 MB limit. Please replace it with a smaller file.
              </div>
            )}
            <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
              <button type="button" style={btn} onClick={choose}>
                Change photo
              </button>
              <button type="button" style={btn} onClick={() => input.onChange("")}>
                Remove
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <button type="button" style={{ ...btn, background: "#0f4f4f", color: "#fff", border: 0 }} onClick={choose}>
            Choose photo
          </button>
          <span style={{ fontSize: 12, color: "#64748b", marginLeft: 10 }}>JPEG, PNG or WebP, up to 5 MB.</span>
        </div>
      )}
      {error && <div style={{ color: "#b91c1c", fontSize: 13, fontWeight: 600 }}>{error}</div>}
    </div>
  );
};

export const PhotoField = wrapFieldsWithMeta(PhotoInput);
