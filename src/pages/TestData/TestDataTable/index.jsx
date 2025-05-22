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
import { memo, useState } from "react";
import { Input } from "@/components/ui/input";
import FunctionButtons from "./FunctionButtons";

function TestDataTable({ testData, handleEditTestData, handleDeleteTestData }) {
  const currentScenario = useCurrentScenario();
  const parsedActionList = currentScenario?.parsedActionList;
  const parsedActions = Array.isArray(parsedActionList) ? parsedActionList : [];
  const fillActions = parsedActions.filter((action) => action.type === "FILL");

  const [editingRowIndex, setEditingRowIndex] = useState(null);

  const handleEdit = (index) => {
    setEditingRowIndex(index);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    handleEditTestData(editingRowIndex, data);
    setEditingRowIndex(null);
  };

  return (
    <Section heading="Test Data">
      <form className="max-w-2xl" onSubmit={handleSubmit}>
        <Table className="table-fixed">
          <TableHeader>
            <TableRow>
              {fillActions && <TableHead className="w-16">No</TableHead>}
              {fillActions?.map(({ description }, index) => (
                <TableHead key={index}>{description}</TableHead>
              ))}
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {testData?.map((data, rowIndex) => (
              <TableRow key={rowIndex}>
                <TableCell>{rowIndex + 1}</TableCell>
                {data.map((value, cellIndex) => (
                  <TableCell key={cellIndex}>
                    {editingRowIndex === rowIndex ? (
                      <Input
                        name={fillActions[cellIndex].description}
                        defaultValue={value}
                        required
                        autoComplete="true"
                      />
                    ) : (
                      value
                    )}
                  </TableCell>
                ))}
                <TableCell>
                  <FunctionButtons
                    rowIndex={rowIndex}
                    editingRowIndex={editingRowIndex}
                    handleEdit={handleEdit}
                    handleDeleteTestData={handleDeleteTestData}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </form>
    </Section>
  );
}

export default memo(TestDataTable);
