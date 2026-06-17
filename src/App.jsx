import { useState } from "react";
import StopSearch from "./components/StopSearch";
import BusMap from "./components/BusMap";
import useStops from "./hooks/useStops";
import useLocation from "./hooks/useLocation";
import { distanceKm } from "./utils/distance";
import AuditForm from "./components/AuditForm";
import styles from "./App.module.css";
import AddStopButton from "./components/AddStopButton";

function App() {
  const stops = useStops();

  const location = useLocation();

  const [selectedStop, setSelectedStop] = useState(null);
  const [isAddingStop, setIsAddingStop] = useState(false);

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
        setSelectedStop={setSelectedStop}
        userLocation={location}
        nearbyStops={nearbyStops}
        isAddingStop={isAddingStop}
        setIsAddingStop={setIsAddingStop}
      />

      <div className={styles.searchOverlay}>
        <StopSearch stops={stops} onSelect={setSelectedStop} />
      </div>
      <AddStopButton
        isAddingStop={isAddingStop}
        setIsAddingStop={setIsAddingStop}
      />
      <AuditForm
  key={
    selectedStop
      ? `${selectedStop.stop_id}-${selectedStop.stop_lat}-${selectedStop.stop_lon}`
      : "none"
  }
  selectedStop={selectedStop}
  setSelectedStop={setSelectedStop}
/>
    </>
  );
}

export default App;
