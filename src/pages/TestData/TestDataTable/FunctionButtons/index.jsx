import { memo } from "react";
import { useNavigate } from "react-router";
import useScenario, { useCurrentScenario } from "@/hooks/useScenario";
import httpRequest from "@/utils/httpRequest";
import { Pencil, Play, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

function FunctionButtons({
  rowIndex,
  editingRowIndex,
  handleEdit,
  handleDeleteTestData,
}) {
  const navigate = useNavigate();

  const currentScenario = useCurrentScenario();
  const { updateScenarioInContext, setIsLoading } = useScenario();
  const {
    id = null,
    url = null,
    parsedActionList = null,
    dataSetList = null,
  } = currentScenario ?? {};

  const handleGenerateScript = async (currentRowIndex) => {
    setIsLoading(true);

    const currentRowData = dataSetList[currentRowIndex];
    let dataIndex = 0;

    const actionsWithData = parsedActionList.map((action) => {
      if (action.type === "FILL") {
        if (dataIndex < currentRowData.length) {
          return { ...action, data: currentRowData[dataIndex++] };
        }
        return { ...action, data: null };
      }
      return action;
    });

    const res = await httpRequest.post("/script/generate", {
      url: url,
      parsedActions: actionsWithData,
    });

    if (res && res.scriptAndLocatorContainer) {
      const { script, elementLocatorList } = res.scriptAndLocatorContainer;
      const updatedScenarioData = {
        ...currentScenario,
        script,
        locatorList: elementLocatorList,
      };

      await httpRequest.put(`/scenarios/${id}`, updatedScenarioData);
      updateScenarioInContext(updatedScenarioData);
    }

    setIsLoading(false);
    navigate("../script");
  };

  const functionButtons = [
    { icon: Play, tooltip: "Generate script", onClick: handleGenerateScript },
    { icon: Pencil, tooltip: "Edit", onClick: handleEdit },
    { icon: Trash2, tooltip: "Delete", onClick: handleDeleteTestData },
  ];

  return (
    <div className="flex items-center gap-2">
      {editingRowIndex === rowIndex ? (
        <Button>Save</Button>
      ) : (
        functionButtons.map((button) => (
          <Tooltip key={button.tooltip}>
            <TooltipTrigger asChild>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className={
                  button.icon === Trash2 &&
                  "text-destructive hover:text-destructive/90"
                }
                onClick={() => button.onClick(rowIndex)}
              >
                <button.icon />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>{button.tooltip}</p>
            </TooltipContent>
          </Tooltip>
        ))
      )}
    </div>
  );
}

export default memo(FunctionButtons);
