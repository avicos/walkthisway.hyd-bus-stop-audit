import {
  MapContainer,
  TileLayer,
  Marker,
} from "react-leaflet";

import FlyToStop from "./FlyToStop";

export default function BusMap({
  selectedStop,
}) {
  return (
    <MapContainer
      center={[17.45, 78.38]}
      zoom={12}
      style={{
        height: "600px",
      }}
    >
      <TileLayer
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <FlyToStop
        selectedStop={selectedStop}
      />

      {selectedStop && (
        <Marker
          position={[
            selectedStop.stop_lat,
            selectedStop.stop_lon,
          ]}
        />
      )}
    </MapContainer>
  );
}