import { useState } from "react";
import BusMap from "./components/BusMap";

function App() {
  const [selectedStop, setSelectedStop] = useState(null);

  return (
    <BusMap
      selectedStop={selectedStop}
      setSelectedStop={setSelectedStop}
    />
  );
}

export default App;