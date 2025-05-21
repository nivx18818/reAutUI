import { useState } from "react";
import useScenario from "@/hooks/useScenario";
import httpRequest from "@/utils/httpRequest";

import { Check, Pencil, Plus, Trash2, TvMinimal, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Input } from "@/components/ui/input";

function AppSidebarContent({
  scenarios,
  handleScenarioChange,
  handleAddScenario,
  handleDeleteScenario,
}) {
  const { currentScenarioId, updateScenarioInContext } = useScenario();
  const [editingScenarioId, setEditingScenarioId] = useState(null);
  const [currentEditingName, setCurrentEditingName] = useState("");

  const handleStartEdit = (scenario) => {
    setEditingScenarioId(scenario.id);
    setCurrentEditingName(scenario.name);
  };

  const handleCancelEdit = () => {
    setEditingScenarioId(null);
    setCurrentEditingName("");
  };

  const handleSaveName = async () => {
    if (!editingScenarioId || !currentEditingName.trim()) {
      handleCancelEdit();
      return;
    }

    const originalScenario = scenarios.find((s) => s.id === editingScenarioId);
    if (!originalScenario) {
      console.error("Original scenario not found for update.");
      handleCancelEdit();
      return;
    }

    const payload = { ...originalScenario, name: currentEditingName.trim() };

    const updatedScenarioFromServer = await httpRequest.put(
      `/scenarios/${editingScenarioId}`,
      payload
    );

    if (updatedScenarioFromServer && updatedScenarioFromServer.id) {
      updateScenarioInContext(updatedScenarioFromServer);
    }

    handleCancelEdit();
  };

  return (
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupContent>
          <SidebarMenu>
            {scenarios.map(({ id, name }) => {
              const isActive = id === currentScenarioId;
              const isEditingThis = editingScenarioId === id;

              return (
                <SidebarMenuItem key={id}>
                  <SidebarMenuButton
                    isActive={isActive}
                    tooltip={name}
                    className="pr-1 cursor-pointer"
                    onClick={() => !isActive && handleScenarioChange(id)}
                    asChild
                  >
                    <div>
                      <TvMinimal />
                      <div className="flex items-center justify-between flex-1">
                        {isEditingThis ? (
                          <Input
                            name={`scenario-name-${id}`}
                            value={currentEditingName}
                            className="h-fit text-sm flex-1 px-1 py-0 rounded-sm focus-visible:ring-0 focus-visible:ring-offset-0"
                            onChange={(e) =>
                              setCurrentEditingName(e.target.value)
                            }
                            onKeyDown={(e) => {
                              if (e.key === "Enter") handleSaveName();
                              if (e.key === "Escape") handleCancelEdit();
                            }}
                            autoFocus
                            autoComplete="true"
                          />
                        ) : (
                          <span className="text-sm truncate whitespace-nowrap">
                            {name}
                          </span>
                        )}
                        <div>
                          {isEditingThis ? (
                            <>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-7 w-7"
                                onClick={() => handleSaveName()}
                                title="Save name"
                              >
                                <Check className="text-green-600" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-7 w-7"
                                onClick={() => handleCancelEdit()}
                                title="Cancel edit"
                              >
                                <X className="text-destructive hover:text-destructive/90" />
                              </Button>
                            </>
                          ) : (
                            <>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="w-7 h-7"
                                onClick={() => handleStartEdit({ id, name })}
                                title="Edit name"
                              >
                                <Pencil />
                              </Button>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="w-7 h-7"
                                onClick={() => handleDeleteScenario(id)}
                                title="Delete scenario"
                              >
                                <Trash2 className="text-destructive hover:text-destructive/90" />
                              </Button>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
            <SidebarMenuItem className="group-data-[collapsible=icon]:hidden">
              <Button
                variant="ghost"
                size="sm"
                className="w-full"
                onClick={handleAddScenario}
              >
                <Plus />
                <span>Add Scenario</span>
              </Button>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
  );
}

export default AppSidebarContent;
