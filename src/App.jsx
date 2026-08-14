import { useState } from "react";
import BusMap from "./components/BusMap";
import Menu from "./components/Menu";
import useLocation from "./hooks/useLocation";
import useAudits from "./hooks/useAudits";
import AuditForm from "./components/AuditForm";
import styles from "./App.module.css";
import Header from "./components/Header";

function App() {
  const location = useLocation();
  const { audits, auditCount } = useAudits();
  const [selectedAudit, setSelectedAudit] = useState(null);
  const [selectedStop, setSelectedStop] = useState(null);
  const [isAddingStop, setIsAddingStop] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [recenterRequest, setRecenterRequest] = useState(0);

  return (
    <div className={styles.app}>
      <Header
  audits={audits}
  onSelect={setSelectedAudit}
  auditCount={auditCount}
/>

      <div className={styles.mapContainer}>
        <BusMap
          selectedStop={selectedStop}
          setSelectedStop={setSelectedStop}
          selectedAudit={selectedAudit}
          setSelectedAudit={setSelectedAudit}
          userLocation={location}
          isAddingStop={isAddingStop}
          setIsAddingStop={setIsAddingStop}
          audits={audits}
          recenterRequest={recenterRequest}
        />

        <Menu
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          setIsAddingStop={setIsAddingStop}
          recenterMap={() => {
            setRecenterRequest((prev) => prev + 1);
          }}
        />

        <AuditForm
          key={
            selectedStop
              ? `${selectedStop.stop_lat}-${selectedStop.stop_lon}`
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
