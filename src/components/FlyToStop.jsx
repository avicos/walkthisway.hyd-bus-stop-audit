import { useEffect } from "react";
import { useMap } from "react-leaflet";

export default function FlyToStop({ selectedStop }) {
  const map = useMap();

  useEffect(() => {
    if (!selectedStop?._geolocation) return;

    const lat = Number(selectedStop._geolocation[0]);
    const lon = Number(selectedStop._geolocation[1]);

    if (!Number.isFinite(lat) || !Number.isFinite(lon)) return;

    map.flyTo([lat, lon], 18, {
      duration: 0.8,
    });
  }, [selectedStop, map]);

  return null;
}