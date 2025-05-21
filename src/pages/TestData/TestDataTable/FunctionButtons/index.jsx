import { Pencil, Play, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { memo } from "react";

function FunctionButtons({
  rowIndex,
  editingRowIndex,
  handleEdit,
  handleDeleteTestData,
}) {
  const functionButtons = [
    { icon: Play, tooltip: "Generate script" },
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
