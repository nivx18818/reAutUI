import { useCallback, useEffect, useState } from "react";
import useScenario, { useCurrentScenario } from "@/hooks/useScenario";
import httpRequest from "@/utils/httpRequest";
import TestDataTable from "./TestDataTable";
import TestSteps from "./TestSteps";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

function TestData() {
  const navigate = useNavigate();

  const currentScenario = useCurrentScenario();
  const { updateScenarioInContext, setIsLoading } = useScenario();
  const [testData, setTestData] = useState([]);

  useEffect(() => {
    const dataSetList = currentScenario?.dataSetList;
    setTestData(Array.isArray(dataSetList) ? dataSetList : []);
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

  const handleGenerateScript = async (currentRowIndex = 0) => {
    setIsLoading(true);

    const currentRowData =
      currentScenario?.dataSetList &&
      currentScenario?.dataSetList[currentRowIndex];
    let dataIndex = 0;

    const actionsWithData = currentScenario?.parsedActionList?.map((action) => {
      if (action.type === "FILL") {
        if (dataIndex < currentRowData.length) {
          return { ...action, data: currentRowData[dataIndex++] };
        }
        return { ...action, data: null };
      }
      return action;
    });

    const res = await httpRequest.post("/script/generate", {
      url: currentScenario?.url,
      parsedActions: actionsWithData,
    });

    if (res && res.scriptAndLocatorContainer) {
      const { script, elementLocatorList } = res.scriptAndLocatorContainer;
      const updatedScenarioData = {
        ...currentScenario,
        script,
        locatorList: elementLocatorList,
      };

      await httpRequest.put(
        `/scenarios/${currentScenario?.id}`,
        updatedScenarioData
      );
      updateScenarioInContext(updatedScenarioData);

      setIsLoading(false);
      navigate("../script");
    } else if (res?.error) {
      toast.error("Unexpected error occurred while generating the script.");
    }

    setIsLoading(false);
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
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this test data?"
    );

    if (!isConfirmed) {
      return;
    }

    const updatedTestData = [
      ...testData.slice(0, index),
      ...testData.slice(index + 1),
    ];
    handleChangeTestData(updatedTestData);
  };

  return (
    <div className="space-y-8">
      <TestSteps
        handleAddTestData={handleAddTestData}
        handleGenerateScript={handleGenerateScript}
      />
      <TestDataTable
        testData={testData}
        handleGenerateScript={handleGenerateScript}
        handleEditTestData={handleEditTestData}
        handleDeleteTestData={handleDeleteTestData}
      />
    </div>
  );
}

export default TestData;
