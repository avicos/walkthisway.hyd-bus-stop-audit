import { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet";

import { userIcon, stopIcon } from "../utils/icons";

import FlyToStop from "./FlyToStop";
import FlyToUser from "./FlyToUser";
import RecenterMap from "./RecenterMap";

export default function BusMap({ selectedStop, userLocation, nearbyStops }) {
  return (
    <MapContainer
      center={[17.45, 78.38]}
      zoom={12}
      style={{
        height: "600px",
      }}
    >
      <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <FlyToUser userLocation={userLocation} />
      <RecenterMap userLocation={userLocation} />
      <FlyToStop selectedStop={selectedStop} />
      {userLocation && (
        <Marker position={[userLocation.lat, userLocation.lon]} icon={userIcon}>
          <Popup>Your Location</Popup>
        </Marker>
      )}
      {userLocation && (
        <Circle center={[userLocation.lat, userLocation.lon]} radius={1000} />
      )}
      {nearbyStops?.map((stop) => (
        <Marker
          key={stop.stop_id}
          position={[Number(stop.stop_lat), Number(stop.stop_lon)]}
          icon={stopIcon}
          eventHandlers={{
            click: () => {
              console.log(stop.stop_name);
            },
          }}
        >
          <Popup>
            <strong>{stop.stop_name}</strong>
            <br />
            {stop.distance.toFixed(2)} km
          </Popup>
        </Marker>
      ))}
      {selectedStop && (
        <Marker position={[selectedStop.stop_lat, selectedStop.stop_lon]} />
      )}
    </MapContainer>
  );
}
