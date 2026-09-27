import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const MARKER = "/assets/marker-icon.png";
const SHADOW = "/assets/marker-shadow.png";

const Map = ({ location }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    const el = mapRef.current;
    if (!el || !location) return;
    const coords = [Number(location.lat), Number(location.lng)];

    const icon = L.icon({
      iconUrl: MARKER,
      iconSize: [40, 40],
      iconAnchor: [20, 40],
      popupAnchor: [0, -34],
      shadowUrl: SHADOW,
      shadowSize: [41, 41],
    });

    const map = L.map(el).setView(coords, 13);

    L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: "© OpenStreetMap contributors",
    }).addTo(map);

    const popup = document.createElement("div");
    popup.textContent = location.popup || location.title;
    const marker = L.marker(coords, { icon }).addTo(map).bindPopup(popup);

    // The container can change size after Leaflet measures it (fonts loading,
    // orientation change, drawer opening). Re-measure and re-centre when it does.
    const recentre = () => {
      map.invalidateSize();
      map.setView(coords, map.getZoom(), { animate: false });
      marker.openPopup();
    };
    const timer = setTimeout(recentre, 150);
    const observer = new ResizeObserver(recentre);
    observer.observe(el);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
      map.remove();
    };
  }, [location]);

  return (
    <div
      ref={mapRef}
      role="region"
      aria-label="Office location map"
      // isolate: keep Leaflet's internal z-indexes inside this box so the map
      // never paints over the fixed header, mobile menu or dialogs.
      className="relative z-0 isolate h-[400px] w-full rounded-lg overflow-hidden"
    ></div>
  );
};

export default Map;
