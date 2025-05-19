import Section from "@/components/Section";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

const locators = [
  {
    query: "password",
    xpath: "/html/body/div/div/div[2]/div[1]/div/div/form/div[2]/input",
    isCorrect: true,
  },
  {
    query: "book a demo",
    xpath:
      "/html/body/div[1]/div[3]/div/div/div[1]/div/div[1]/div[3]/div/div[2]/a",
    isCorrect: true,
  },
  {
    query: "about",
    xpath: "/html/body/div/div/div[1]/div[1]/div[1]/div/div[2]/div[1]/nav/a[2]",
    isCorrect: true,
  },
  {
    query: "login",
    xpath: "/html/body/div/div/div[2]/div[1]/div/div/form/input",
    isCorrect: true,
  },
  {
    query: "menu",
    xpath: "/html/body/div/div/div[1]/div[1]/div[1]/div/div[1]/div/button",
    isCorrect: true,
  },
  {
    query: "username",
    xpath: "/html/body/div/div/div[2]/div[1]/div/div/form/div[1]/input",
    isCorrect: true,
  },
];

function Locators() {
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
          {locators.map(({ query, xpath, isCorrect }) => (
            <TableRow key={query}>
              <TableCell>{query}</TableCell>
              <TableCell
                className={cn(
                  "font-mono",
                  isCorrect ? "text-green-600" : "text-red-600"
                )}
              >
                {xpath}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Section>
  );
}

export default Locators;
