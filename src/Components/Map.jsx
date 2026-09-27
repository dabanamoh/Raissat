import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const MARKER = "/assets/marker-icon.png";
const SHADOW = "/assets/marker-shadow.png";

const Map = ({ location }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current || !location) return;
    const coords = [Number(location.lat), Number(location.lng)];

    const icon = L.icon({
      iconUrl: MARKER,
      // marker-icon.png is square; keep it square so it isn't stretched.
      iconSize: [40, 40],
      iconAnchor: [20, 40],
      popupAnchor: [0, -34],
      shadowUrl: SHADOW,
      shadowSize: [41, 41],
    });

    const map = L.map(mapRef.current).setView(coords, 13);

    L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: "© OpenStreetMap contributors",
    }).addTo(map);

    const popup = document.createElement("div");
    popup.textContent = location.popup || location.title;
    L.marker(coords, { icon }).addTo(map).bindPopup(popup).openPopup();

    return () => {
      map.remove();
    };
  }, [location]);

  return (
    <div
      ref={mapRef}
      role="region"
      aria-label="Office location map"
      className="h-[400px] w-full rounded-lg overflow-hidden"
    ></div>
  );
};

export default Map;
