import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const MapComponent = ({ pinIcon }) => {
  const position = [6.4506518, 3.4777957]; // Replace with your actual latitude & longitude

  // Custom marker icon
  const customIcon = new L.Icon({
    iconUrl: pinIcon,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: "100%", width: "100%", zIndex: "1" }}
      attributionControl={false}
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/">Carto</a>'
      />

      <Marker position={position} icon={customIcon}>
        <Popup>8 Babatunde Anjous, Off Admiralty Way</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
