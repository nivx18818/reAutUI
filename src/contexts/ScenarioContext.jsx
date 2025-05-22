import { createContext, useCallback, useEffect, useState } from "react";
import httpRequest from "@/utils/httpRequest";
import LoadingScreen from "@/components/LoadingScreen";

const ScenarioContext = createContext(null);

function ScenarioProvider({ children }) {
  const [scenarios, setScenarios] = useState([]);
  const [currentScenarioId, setCurrentScenarioId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleAddScenario = useCallback(async () => {
      setIsLoading(true);

      const defaultNewScenario = {
        name: "Untitled Scenario",
      };
      const newlyCreatedScenario = await httpRequest.post(
        "/scenarios",
        defaultNewScenario
      );
      setScenarios([...scenarios, newlyCreatedScenario]);
      setCurrentScenarioId(newlyCreatedScenario.id);

      setIsLoading(false);
    }, [scenarios, setScenarios, setCurrentScenarioId, setIsLoading]);

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

  useEffect(() => {
    if (!isLoading && scenarios.length === 0) {
      handleAddScenario();
    }
  }, [scenarios, handleAddScenario, isLoading]);

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
    handleAddScenario,
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
