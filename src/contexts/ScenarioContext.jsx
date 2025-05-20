import { createContext, useEffect, useState } from "react";
import * as httpRequest from "@/utils/httpRequest";

const ScenarioContext = createContext(null);

function ScenarioProvider({ children }) {
  const [scenarios, setScenarios] = useState([]);
  const [currentScenarioId, setCurrentScenarioId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchScenarios = async () => {
      setIsLoading(true);

      const res = await httpRequest.get("/scenarios");
      if (res) {
        setScenarios(res);
        setCurrentScenarioId(res[0].id);
      }

      setIsLoading(false);
    };
    fetchScenarios();
  }, []);

  const contextValue = {
    scenarios,
    setScenarios,
    currentScenarioId,
    setCurrentScenarioId,
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
