import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

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

      <Button className="w-full bg-[#0f172a] hover:bg-[#1e293b] text-white">
        <svg
          className="w-4 h-4 mr-2"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 4V20M4 12H20"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        INPUT TEST DATA
      </Button>
    </div>
  );
}

export default Scenario;
