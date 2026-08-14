import { useState } from "react";
import StopSearch from "./components/StopSearch";
import BusMap from "./components/BusMap";
import Menu from "./components/Menu";
import useStops from "./hooks/useStops";
import useLocation from "./hooks/useLocation";
import useAudits from "./hooks/useAudits";
import { distanceKm } from "./utils/distance";
import AuditForm from "./components/AuditForm";
import styles from "./App.module.css";
import Header from "./components/Header";

function App() {
  const stops = useStops();
  const location = useLocation();
  const { audits, auditCount } = useAudits();
  const [viewMode, setViewMode] = useState("audit");
  const [selectedStop, setSelectedStop] = useState(null);
  const [isAddingStop, setIsAddingStop] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
    <div className={styles.app}>
      <Header
        stops={stops}
        onSelect={setSelectedStop}
        audits={audits}
        auditCount={auditCount}
      />
      <div className={styles.mapContainer}>
        <BusMap
          selectedStop={selectedStop}
          setSelectedStop={setSelectedStop}
          userLocation={location}
          nearbyStops={nearbyStops}
          isAddingStop={isAddingStop}
          setIsAddingStop={setIsAddingStop}
          audits={audits}
          viewMode={viewMode}
        />

        

        <Menu
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          viewMode={viewMode}
          setViewMode={setViewMode}
          setIsAddingStop={setIsAddingStop}
          recenterMap={() => {
            // we'll wire this next
          }}
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
      </div>
    </div>
  );
}

export default App;
