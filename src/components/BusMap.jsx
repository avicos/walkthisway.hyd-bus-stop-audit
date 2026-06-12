import { MapContainer, TileLayer } from "react-leaflet";
import BusStops from "./BusStops";

export default function BusMap() {
  return (
    <MapContainer
      center={[17.45, 78.38]}
      zoom={12}
      style={{
        height: "100vh",
        width: "100%",
      }}
    >
      <TileLayer
        attribution="© OpenStreetMap"
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
        <BusStops />
    </MapContainer>
  );
}