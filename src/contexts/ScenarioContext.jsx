import { createContext, useEffect, useState } from "react";
import * as httpRequest from "@/utils/httpRequest";

const ScenarioContext = createContext(null);

function ScenarioProvider({ children }) {
  const [scenarios, setScenarios] = useState([]);
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);

  useEffect(() => {
    const fetchScenarios = async () => {
      const res = await httpRequest.get("/scenarios");
      if (res) {
        setScenarios(res);
      }
    };
    fetchScenarios();
  }, []);

  const contextValue = {
    scenarios,
    setScenarios,
    currentScenarioIndex,
    setCurrentScenarioIndex,
  };

  return (
    <ScenarioContext.Provider value={contextValue}>
      {children}
    </ScenarioContext.Provider>
  );
}

export default ScenarioProvider;
export { ScenarioContext };
