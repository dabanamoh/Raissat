import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import { global } from "../assets";

const { markerIcon } = global;

const Map = ({ currentView }) => {
  const mapRef = useRef(null); // this holds the map container div

  const defaultIcon = L.icon({
    iconUrl: markerIcon,
    iconSize: [35, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    shadowSize: [41, 41],
  });

  // const markerIcon = L.Icon.Default.imagePath = '../assets/marker-icon.png'
  // console.log(L.Icon.Default.imagePath);

  const views = {
    headquarters: [6.59517, 3.30319],
    uk: [52.2355, 0.15192],
  };

  useEffect(() => {
    if (!mapRef.current) return;

    // Initialize the map
    const map = L.map(mapRef.current).setView(views[currentView], 13);

    // Add a tile layer (OpenStreetMap)
    L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
      maxZoom: 19,
      // attribution: "© OpenStreetMap contributors",
    }).addTo(map);

    // Add a marker example
    const marker = L.marker(views[currentView], { icon: defaultIcon }).addTo(
      map
    );
    marker
      .bindPopup(
        `${
          currentView === "headquarters"
            ? "<b>Raissat Headquarters</b> <br /> 25 Raymond Njoku Street"
            : "<b>UK Office</b> <br /> Global Hub Cambridge Innovation Park"
        }`
      )
      .openPopup();

    // Cleanup on unmount
    return () => {
      map.remove();
    };
  }, [currentView, views]);

  return (
    <div
      ref={mapRef}
      className="h-[400px] w-full rounded-lg overflow-hidden"
    ></div>
  );
};

export default Map;
