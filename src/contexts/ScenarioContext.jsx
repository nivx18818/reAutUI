import { createContext, useEffect, useState } from "react";
import httpRequest from "@/utils/httpRequest";
import LoadingScreen from "@/components/LoadingScreen";

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

  const updateScenarioInContext = (updatedScenario) => {
    setScenarios(
      scenarios.map((scenario) =>
        scenario.id === updatedScenario.id ? updatedScenario : scenario
      )
    );
  };

  const contextValue = {
    scenarios,
    setScenarios,
    currentScenarioId,
    setCurrentScenarioId,
    updateScenarioInContext,
    isLoading,
    setIsLoading,
  };

  if (window.location.pathname === "/" && isLoading) return <LoadingScreen />;

  return (
    <ScenarioContext.Provider value={contextValue}>
      {children}
      {isLoading && <LoadingScreen />}
    </ScenarioContext.Provider>
  );
}

export default ScenarioProvider;
export { ScenarioContext };
