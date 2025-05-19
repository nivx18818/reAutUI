import { Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import useScenario from "@/hooks/useScenario";

function Scenario() {
  const { scenarios, currentScenarioIndex } = useScenario();
  const currentScenario = scenarios[currentScenarioIndex];

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <label className="block space-y-2">
        <span className="text-sm font-medium">URL</span>
        <Input
          name="url"
          placeholder="Enter your web URL"
          defaultValue={currentScenario.url}
        />
      </label>

      <label className="block space-y-2">
        <span className="text-sm font-medium">Description</span>
        <Textarea
          name="scenarioDescription"
          placeholder="Enter detailed description of the scenario"
          defaultValue={currentScenario.description}
          className="resize-none min-h-40"
        />
      </label>

      <Button className="w-full">
        <Database />
        <span>INPUT TEST DATA</span>
      </Button>
    </div>
  );
}

export default Scenario;
