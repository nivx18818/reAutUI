import { toast } from "react-toastify";
import { Copy, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Section from "@/components/Section";
import { useCurrentScenario } from "@/hooks/useScenario";

function Script() {
  const script = useCurrentScenario()?.script;

  const handleDownloadScript = () => {
    const blob = new Blob([script], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "script.py";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast.success("Script downloaded!");
  };

  const handleCopyScript = () => {
    navigator.clipboard
      .writeText(script)
      .then(() => toast.success("Script copied to clipboard!"));
  };

  return (
    <Section heading="Executable Python Script" className="p-5 pt-1">
      {script && (
        <>
          <div className="rounded-md bg-secondary">
            <ScrollArea className="h-[50vh] p-4">
              <pre className="font-mono">{script}</pre>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </div>
          <div className="flex mt-4 space-x-2">
            <Button variant="outline" size="sm" onClick={handleDownloadScript}>
              <Download />
              <span>DOWNLOAD SCRIPT</span>
            </Button>
            <Button variant="outline" size="sm" onClick={handleCopyScript}>
              <Copy />
              <span>COPY SCRIPT</span>
            </Button>
          </div>
        </>
      )}
    </Section>
  );
}

export default Script;
