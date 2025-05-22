import Section from "@/components/Section";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useCurrentScenario } from "@/hooks/useScenario";
import { cn } from "@/lib/utils";

function Locators() {
  const locators = useCurrentScenario()?.locatorList ?? [];

  return (
    <Section heading="Locator Results">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Query</TableHead>
            <TableHead>XPath</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {locators?.map(({ description, xpath }) => (
            <TableRow key={description}>
              <TableCell>{description}</TableCell>
              <TableCell
                className={cn(
                  "font-mono",
                  xpath !== "FALSE" ? "text-green-600" : "text-red-600"
                )}
              >
                {xpath !== "FALSE" ? xpath : "Can't find element locator"}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Section>
  );
}

export default Locators;
