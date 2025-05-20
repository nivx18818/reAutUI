import { Pencil, Play, Trash2 } from "lucide-react";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useCurrentScenario } from "@/hooks/useScenario";

const functionButtons = [
  { icon: Play, tooltip: "Generate script" },
  { icon: Pencil, tooltip: "Edit" },
  { icon: Trash2, tooltip: "Delete" },
];

function TestDataTable() {
  const testData = useCurrentScenario()?.dataSetList;

  return (
    <Section heading="Test Data">
      <div className="max-w-3xl">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-16">No</TableHead>
              <TableHead>valid_username</TableHead>
              <TableHead>valid_password</TableHead>
              <TableHead className="w-28"></TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {testData.map((data, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{data[0]}</TableCell>
                <TableCell>{data[1]}</TableCell>
                <TableCell>
                  <div className="flex items-center justify-end gap-2">
                    {functionButtons.map((button) => (
                      <Tooltip key={button.tooltip}>
                        <TooltipTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            className={
                              button.icon === Trash2 &&
                              "text-destructive hover:text-destructive/90"
                            }
                          >
                            <button.icon />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{button.tooltip}</p>
                        </TooltipContent>
                      </Tooltip>
                    ))}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Section>
  );
}

export default TestDataTable;
