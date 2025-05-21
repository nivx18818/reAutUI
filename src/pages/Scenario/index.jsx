import { useNavigate } from "react-router";
import useScenario, { useCurrentScenario } from "@/hooks/useScenario";
import httpRequest from "@/utils/httpRequest";

import { Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

function Scenario() {
  const navigate = useNavigate();
  const { updateScenarioInContext } = useScenario();
  const currentScenario = useCurrentScenario();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    const parsedActionList = await httpRequest.post(
      "/scenario/parse",
      data.description
    );

    const updatedScenarioData = {
      ...currentScenario,
      ...data,
      parsedActionList,
    };

    await httpRequest.put(
      `/scenarios/${currentScenario.id}`,
      updatedScenarioData
    );

    updateScenarioInContext(updatedScenarioData);
    navigate("../test-data");
  };

  return (
    <form
      key={currentScenario?.id}
      className="max-w-2xl mx-auto space-y-6"
      onSubmit={handleSubmit}
    >
      <label className="block space-y-2">
        <span className="text-sm font-medium">URL</span>
        <Input
          name="url"
          placeholder="Enter your web URL"
          defaultValue={currentScenario?.url}
        />
      </label>

      <label className="block space-y-2">
        <span className="text-sm font-medium">Description</span>
        <Textarea
          name="description"
          placeholder="Enter detailed description of the scenario"
          defaultValue={currentScenario?.description}
          className="resize-none min-h-40"
        />
      </label>

      <Button className="w-full">
        <Database />
        <span>INPUT TEST DATA</span>
      </Button>
    </form>
  );
}

export default Scenario;
