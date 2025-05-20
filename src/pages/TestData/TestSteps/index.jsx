import { cn } from "@/lib/utils";

import Section from "@/components/Section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";
import { useCurrentScenario } from "@/hooks/useScenario";

const actionStyles = {
  FILL: "bg-blue-50 text-blue-700 border-blue-200",
  CLICK: "bg-green-50 text-green-700 border-green-200",
  SELECT: "bg-yellow-50 text-yellow-700 border-yellow-200",
};

function TestSteps() {
  const testSteps = useCurrentScenario()?.parsedActionList;

  const handleStepTargetChange = () => {};

  return (
    <Section>
      <div className="mb-6">
        <Button variant="outline" size="sm" className="flex items-center gap-1">
          <Plus />
          <span>ADD DATA</span>
        </Button>
      </div>

      <div className="space-y-4">
        {testSteps.map(({ type, description }, index) => (
          <div key={index} className="flex items-center gap-4">
            <Badge
              variant="outline"
              className="flex items-center justify-center p-0 leading-none w-7 h-7"
            >
              {index}
            </Badge>

            <Badge
              variant="outline"
              className={cn(
                "rounded-md px-2 py-1 w-14 text-sm justify-center",
                actionStyles[type]
              )}
            >
              {type[0] + type.slice(1).toLowerCase()}
            </Badge>

            {type === "FILL" ? (
              <>
                <Input
                  placeholder={`data for valid_${description}`}
                  onChange={(e) =>
                    handleStepTargetChange(e.target.value.trim())
                  }
                  className="w-48 h-8 text-sm bg-secondary"
                />
                <div className="text-sm text-gray-500">into</div>
                <div className="text-sm font-medium">{description}</div>
              </>
            ) : (
              <Badge
                variant="outline"
                className="px-1.5 py-1 bg-secondary rounded-md text-sm font-normal"
              >
                {description}
              </Badge>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}

export default TestSteps;
