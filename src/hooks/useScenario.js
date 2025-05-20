import { useContext } from "react";
import { ScenarioContext } from "@/contexts/ScenarioContext";

const useScenario = () => {
  const context = useContext(ScenarioContext);

  if (!context) {
    throw new Error("useScenario must be used within a ScenarioProvider.");
  }

  return context;
};

const useCurrentScenario = () => {
  const { scenarios, currentScenarioId } = useScenario();
  const currentScenario = scenarios.find(({ id }) => id === currentScenarioId);
  return currentScenario;
};

export default useScenario;
export { useCurrentScenario };
