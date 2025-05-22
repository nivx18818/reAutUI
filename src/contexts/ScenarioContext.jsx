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
    setScenarios((prevScenarios) => [...prevScenarios, newlyCreatedScenario]);
    setCurrentScenarioId(newlyCreatedScenario?.id);

    setIsLoading(false);
  }, []);

  useEffect(() => {
    const fetchScenarios = async () => {
      setIsLoading(true);

      try {
        const fetchedScenarios = await httpRequest.get("/scenarios");

        if (fetchedScenarios && fetchedScenarios.length > 0) {
          setScenarios(fetchedScenarios);
          setCurrentScenarioId(fetchedScenarios[0]?.id);
          setIsLoading(false);
        } else if (fetchedScenarios) {
          await handleAddScenario();
        } else {
          setScenarios([]);
          setCurrentScenarioId(null);
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Failed to load initial scenarios:", error);
        setScenarios([]);
        setCurrentScenarioId(null);
        setIsLoading(false);
      }
    };
    fetchScenarios();
  }, [handleAddScenario]);

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
