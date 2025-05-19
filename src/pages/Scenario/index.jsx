import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Database } from "lucide-react";

function Scenario() {
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div>
        <label className="block mb-2 text-sm font-medium">URL</label>
        <Input placeholder="Enter your web URL" />
      </div>

      <div>
        <label className="block mb-2 text-sm font-medium">Description</label>
        <Textarea
          placeholder="Enter detailed description of the scenario"
          className="min-h-[150px] resize-none"
        />
      </div>

      <Button className="w-full">
        <Database />
        <span>INPUT TEST DATA</span>
      </Button>
    </div>
  );
}

export default Scenario;
