import { createContext, useEffect, useState } from "react";
import * as httpRequest from "@/utils/httpRequest";

const ScenarioContext = createContext(null);

function ScenarioProvider({ children }) {
  const [scenarios, setScenarios] = useState([]);
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchScenarios = async () => {
      setIsLoading(true);

      const res = await httpRequest.get("/scenarios");
      if (res) {
        setScenarios(res);
      }

      setIsLoading(false);
    };
    fetchScenarios();
  }, []);

  const contextValue = {
    scenarios,
    setScenarios,
    currentScenarioIndex,
    setCurrentScenarioIndex,
  };

  if (isLoading) return null;

  return (
    <ScenarioContext.Provider value={contextValue}>
      {children}
    </ScenarioContext.Provider>
  );
}

export default ScenarioProvider;
export { ScenarioContext };
