import { useContext } from "react";
import { ScenarioContext } from "@/contexts/ScenarioContext";

const useScenario = () => {
  const context = useContext(ScenarioContext);

  if (!context) {
    throw new Error("useScenario must be used within a ScenarioProvider.");
  }

  return context;
};

export default useScenario;
