import { useState } from "react";
import StopSearch from "./components/StopSearch";
import BusMap from "./components/BusMap";
import useStops from "./hooks/useStops";
import useLocation from "./hooks/useLocation";
import { distanceKm } from "./utils/distance";
import NearbyStops from "./components/NearbyStops";
import styles from "./App.module.css";

function App() {
  const stops = useStops();

  const location = useLocation();

  const [selectedStop, setSelectedStop] = useState(null);

  const nearbyStops = location
    ? stops
        .map((stop) => ({
          ...stop,
          distance: distanceKm(
            location.lat,
            location.lon,
            stop.stop_lat,
            stop.stop_lon,
          ),
        }))
        .filter((stop) => stop.distance <= 3)
        .sort((a, b) => a.distance - b.distance)
        .slice(0, 20)
    : [];

  return (
    <>
      <BusMap
        selectedStop={selectedStop}
        userLocation={location}
        nearbyStops={nearbyStops}
        setSelectedStop={setSelectedStop}
      />
       <div className={styles.searchOverlay}>
    <StopSearch
      stops={stops}
      onSelect={setSelectedStop}
    />
    
  </div>
    </>
  );
}

export default App;
