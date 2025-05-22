import { memo, useCallback, useEffect } from "react";
import useSidebar from "@/hooks/use-sidebar";
import useScenario from "@/hooks/useScenario";
import httpRequest from "@/utils/httpRequest";

import { Sidebar } from "@/components/ui/sidebar";
import AppSidebarHeader from "./AppSidebarHeader";
import AppSidebarContent from "./AppSidebarContent";

function AppSidebar({ className, handleScenarioChange }) {
  const {
    scenarios,
    setScenarios,
    setCurrentScenarioId,
    isLoading,
    setIsLoading,
  } = useScenario();
  const { open } = useSidebar();

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
    if (!isLoading && scenarios.length === 0) {
      handleAddScenario();
    }
  }, [scenarios, handleAddScenario, isLoading]);

  const handleDeleteScenario = async (id) => {
    await httpRequest.del(`/scenarios/${id}`);
    setScenarios(scenarios.filter((scenario) => scenario.id !== id));
    setCurrentScenarioId(scenarios[0]);
  };

  return (
    <div className="fixed">
      <Sidebar variant="floating" collapsible="icon" className={className}>
        <AppSidebarHeader open={open} />
        <AppSidebarContent
          scenarios={scenarios}
          handleScenarioChange={handleScenarioChange}
          handleAddScenario={handleAddScenario}
          handleDeleteScenario={handleDeleteScenario}
        />
      </Sidebar>
    </div>
  );
}

export default memo(AppSidebar);
