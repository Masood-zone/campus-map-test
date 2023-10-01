import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon, divIcon, point } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";

const Map = () => {
  const markers = [
    {
      geocode: [6.69961, -1.68189],
      popUp: "AMMUSTED University",
    },
    {
      geocode: [6.6814, -1.6075],
      popUp: "T.I AMASS",
    },
    {
      geocode: [6.703, -1.6443],
      popUp: "Samuel Pencils",
    },
  ];

  const customIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/128/9131/9131546.png",
    // For local import
    // iconUrl: require("path")
    iconSize: [38, 38],
  });
  const createCustomClusterIcon = (cluster) => {
    return new divIcon({
      html: `<div class="h-[3rem] w-[3rem] rounded-full bg-[#fff] translate-x-[-12%] translate-y-[-11%] flex justify-center items-center font-bold text-lg ">${cluster.getChildCount()}</div>`,
      iconSize: point(38, 38, true),
    });
  };
  return (
    <div>
      <MapContainer center={[6.700071, -1.630783]} zoom={13}>
        <TileLayer
          attribution='&copy; <Link to="https://www.openstreetmap.org/copyright">OpenStreetMap</Link> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MarkerClusterGroup
          chunkedLoading
          iconCreateFunction={createCustomClusterIcon}
        >
          {markers.map((marker) => {
            return (
              <Marker
                position={marker.geocode}
                icon={customIcon}
                key={marker.popUp}
              >
                <Popup>{marker.popUp}</Popup>
              </Marker>
            );
          })}
        </MarkerClusterGroup>
      </MapContainer>
    </div>
  );
};

export default Map;
