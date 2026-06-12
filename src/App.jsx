import { useState } from "react";
import StopSearch from "./components/StopSearch";
import BusMap from "./components/BusMap";
import useStops from "./hooks/useStops";

function App() {
  const stops = useStops();

  const [selectedStop, setSelectedStop] =
    useState(null);

  return (
    <>
      <StopSearch
        stops={stops}
        onSelect={setSelectedStop}
      />

      <BusMap
        selectedStop={selectedStop}
      />
    </>
  );
}

export default App;