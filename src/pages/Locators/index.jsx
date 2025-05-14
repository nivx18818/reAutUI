import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

function Locators() {
  return (
    <div className="max-w-2xl p-6 mx-auto border border-gray-300 border-dashed rounded-lg">
      <h2 className="mb-4 font-medium">XPath</h2>
      <Table>
        <TableBody>
          {[
            "/html/body/div/div/div[2]/div[1]/div/div/form/div[2]/input",
            "/html/body/div[1]/div[3]/div/div/div[1]/div/div[1]/div[3]/div/div[2]/a",
            "/html/body/div/div/div[1]/div[1]/div[1]/div/div[2]/div[1]/nav/a[2]",
            "/html/body/div/div/div[2]/div[1]/div/div/form/input",
            "/html/body/div/div/div[1]/div[1]/div[1]/div/div[1]/div/button",
            "/html/body/div/div/div[2]/div[1]/div/div/form/div[1]/input",
          ].map((xpath, index) => (
            <TableRow key={index}>
              <TableCell className="font-mono text-sm text-green-600">
                {xpath}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default Locators;
