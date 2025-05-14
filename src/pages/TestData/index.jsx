import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

function TestData() {
  return (
    <div className="max-w-2xl p-6 mx-auto border border-gray-300 border-dashed rounded-lg">
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <Input placeholder="valid_username" className="w-48" />
          <span className="text-sm">into username</span>
        </div>

        <div className="flex items-center space-x-2">
          <Input placeholder="valid_password" className="w-48" />
          <span className="text-sm">into password</span>
        </div>
      </div>

      <div className="mt-12">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>valid_username</TableHead>
              <TableHead>valid_password</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>standard_user</TableCell>
              <TableCell>1</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default TestData;
