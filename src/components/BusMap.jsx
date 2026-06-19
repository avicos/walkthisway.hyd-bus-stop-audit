import { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet";

import { userIcon, stopIcon, auditedStopIcon } from "../utils/icons";

import FlyToStop from "./FlyToStop";
import FlyToUser from "./FlyToUser";
import RecenterMap from "./RecenterMap";
import MapClickHandler from "./MapClickHandler";

export default function BusMap({
  selectedStop,
  setSelectedStop,
  userLocation,
  nearbyStops,
  isAddingStop,
  setIsAddingStop,
  audits,
  viewMode,
}) {
  return (
    <MapContainer
      center={[17.45, 78.38]}
      zoom={15}
      style={{
        height: "100%",
        width: "100%",
      }}
    >
      <MapClickHandler
        isAddingStop={isAddingStop}
        setSelectedStop={setSelectedStop}
        setIsAddingStop={setIsAddingStop}
      />
      <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />

      <FlyToUser userLocation={userLocation} />
      <RecenterMap userLocation={userLocation} />
      {/* <FlyToStop selectedStop={selectedStop} /> */}
      {userLocation && (
        <Marker position={[userLocation.lat, userLocation.lon]} icon={userIcon}>
          <Popup>Your Location</Popup>
        </Marker>
      )}
      {userLocation && (
        <Circle center={[userLocation.lat, userLocation.lon]} radius={1000} />
      )}
      {viewMode === "audit" &&
        nearbyStops?.map((stop) => (
          <Marker
            key={stop.stop_id}
            position={[Number(stop.stop_lat), Number(stop.stop_lon)]}
            icon={stopIcon}
            eventHandlers={{
              click: () => {
                console.log(stop.stop_name);
                setSelectedStop(stop);
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
      {viewMode === "public" &&
        audits.map((audit) => (
          <Marker
            key={audit._uuid}
            position={[
              Number(audit._geolocation[0]),
              Number(audit._geolocation[1]),
            ]}
            icon={auditedStopIcon}
          >
            <Popup>
              <strong>{audit.Name_of_Bus_Stop}</strong>
              <br />
              Roof: {audit.Roof}
              <br />
              Lighting: {audit.Lighting}
              <br />
              Seating: {audit.Seating}
              <br />
              Route Map: {audit.Route_map_available}
              <br />
              Schedule: {audit.Schedule_available}
            </Popup>
          </Marker>
        ))}
      {selectedStop?.stop_lat && selectedStop?.stop_lon && (
        <Marker
          position={[
            Number(selectedStop.stop_lat),
            Number(selectedStop.stop_lon),
          ]}
        />
      )}
      {selectedStop?.audit_type === "manual" && (
        <Marker position={[selectedStop.stop_lat, selectedStop.stop_lon]}>
          <Popup>Custom Stop</Popup>
        </Marker>
      )}
    </MapContainer>
  );
}
