import { useState } from "react";
import { cn } from "@/lib/utils";

import Section from "@/components/Section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";

const actionStyles = {
  Fill: "bg-blue-50 text-blue-700 border-blue-200",
  Click: "bg-green-50 text-green-700 border-green-200",
  Select: "bg-yellow-50 text-yellow-700 border-yellow-200",
};

function TestSteps() {
  const [testSteps, setTestSteps] = useState([
    {
      id: 1,
      action: "Fill",
      placeholder: "data for valid_username",
      target: "",
      into: "username",
    },
    {
      id: 2,
      action: "Fill",
      placeholder: "data for valid_password",
      target: "",
      into: "password",
    },
    { id: 3, action: "Click", target: "login" },
    { id: 4, action: "Click", target: "menu" },
    { id: 5, action: "Click", target: "about" },
    { id: 6, action: "Click", target: "book a demo" },
  ]);

  const handleStepTargetChange = (id, newTarget) => {
    setTestSteps(
      testSteps.map((step) =>
        step.id === id ? { ...step, target: newTarget } : step
      )
    );
  };

  return (
    <Section>
      <div className="mb-6">
        <Button variant="outline" size="sm" className="flex items-center gap-1">
          <Plus />
          <span>ADD DATA</span>
        </Button>
      </div>

      <div className="space-y-4">
        {testSteps.map(({ id, action, placeholder, target, into }) => (
          <div key={id} className="flex items-center gap-4">
            <Badge variant="outline" className="aspect-square">
              {id}
            </Badge>

            <Badge
              variant="outline"
              className={cn(
                "rounded-md px-2 py-1 w-14 text-sm justify-center",
                actionStyles[action]
              )}
            >
              {action}
            </Badge>

            {action === "Fill" ? (
              <Input
                value={target}
                placeholder={placeholder}
                onChange={(e) =>
                  handleStepTargetChange(id, e.target.value.trim())
                }
                className="w-48 h-8 text-sm bg-secondary"
              />
            ) : (
              <Badge
                variant="outline"
                className="px-1.5 py-1 bg-secondary rounded-md text-sm font-normal"
              >
                {target}
              </Badge>
            )}

            {into && (
              <>
                <div className="text-sm text-gray-500">into</div>
                <div className="text-sm font-medium">{into}</div>
              </>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}

export default TestSteps;
