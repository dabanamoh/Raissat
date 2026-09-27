import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import { global } from "../assets";

const { markerIcon, markerShadow } = global;

const views = {
  headquarters: {
    coords: [6.59517, 3.30319],
    popup: "<b>RAISSAT Headquarters</b><br />117A Shasha Road, Akowonjo, Lagos",
  },
  uk: {
    coords: [52.2355, 0.15192],
    popup: "<b>UK Office</b><br />Global Hub, Cambridge Innovation Park",
  },
};

const Map = ({ currentView }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current) return;
    const view = views[currentView] ?? views.headquarters;

    const icon = L.icon({
      iconUrl: markerIcon,
      iconSize: [35, 41],
      iconAnchor: [17, 41],
      popupAnchor: [1, -34],
      shadowUrl: markerShadow,
      shadowSize: [41, 41],
    });

    const map = L.map(mapRef.current).setView(view.coords, 13);

    L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: "© OpenStreetMap contributors",
    }).addTo(map);

    L.marker(view.coords, { icon }).addTo(map).bindPopup(view.popup).openPopup();

    return () => {
      map.remove();
    };
  }, [currentView]);

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
