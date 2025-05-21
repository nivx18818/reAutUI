import { useCallback, useState } from "react";
import { useCurrentScenario } from "@/hooks/useScenario";
import TestDataTable from "./TestDataTable";
import TestSteps from "./TestSteps";
import httpRequest from "@/utils/httpRequest";

function TestData() {
  const currentScenario = useCurrentScenario();
  const [testData, setTestData] = useState(currentScenario?.dataSetList);

  const handleChangeTestData = useCallback(
    async (updatedTestData) => {
      setTestData(updatedTestData);
      await httpRequest.put(`/scenarios/${currentScenario?.id}`, {
        ...currentScenario,
        dataSetList: updatedTestData,
      });
    },
    [currentScenario]
  );

  const handleAddTestData = async (data) => {
    const updatedTestData = [...testData, Object.values(data)];
    handleChangeTestData(updatedTestData);
  };

  const handleEditTestData = async (index, data) => {
    const updatedTestData = [
      ...testData.slice(0, index),
      Object.values(data),
      ...testData.slice(index + 1),
    ];
    handleChangeTestData(updatedTestData);
  };

  const handleDeleteTestData = async (index) => {
    const updatedTestData = [
      ...testData.slice(0, index),
      ...testData.slice(index + 1),
    ];
    handleChangeTestData(updatedTestData);
  };

  return (
    <div className="space-y-8">
      <TestSteps handleAddTestData={handleAddTestData} />
      <TestDataTable
        testData={testData}
        handleEditTestData={handleEditTestData}
        handleDeleteTestData={handleDeleteTestData}
      />
    </div>
  );
}

export default TestData;
