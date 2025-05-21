import { useCallback, useEffect, useState } from "react";
import useScenario, { useCurrentScenario } from "@/hooks/useScenario";
import httpRequest from "@/utils/httpRequest";
import TestDataTable from "./TestDataTable";
import TestSteps from "./TestSteps";

function TestData() {
  const currentScenario = useCurrentScenario();
  const { updateScenarioInContext } = useScenario();
  const [testData, setTestData] = useState([]);

  useEffect(() => {
    setTestData(currentScenario?.dataSetList ?? []);
  }, [currentScenario]);

  const handleChangeTestData = useCallback(
    async (updatedTestData) => {
      if (!currentScenario?.id) {
        console.error(
          "Cannot update test data: current scenario or ID is missing."
        );
        return;
      }

      setTestData(updatedTestData);

      const updatedScenarioData = {
        ...currentScenario,
        dataSetList: updatedTestData,
      };

      await httpRequest.put(
        `/scenarios/${currentScenario?.id}`,
        updatedScenarioData
      );

      updateScenarioInContext(updatedScenarioData);
    },
    [currentScenario, updateScenarioInContext]
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
