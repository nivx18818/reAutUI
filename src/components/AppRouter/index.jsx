import { Navigate, Route, Routes } from "react-router";
import MainLayout from "@/layouts/MainLayout";
import useScenario from "@/hooks/useScenario";

import Locators from "@/pages/Locators";
import Scenario from "@/pages/Scenario";
import Script from "@/pages/Script";
import TestData from "@/pages/TestData";

function AppRouter() {
  const { currentScenarioId } = useScenario();

  if (!currentScenarioId) return null;

  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to={`/${currentScenarioId}/scenario`} />}
      />
      <Route path="/:id" element={<MainLayout />}>
        <Route path="scenario" element={<Scenario />} />
        <Route path="test-data" element={<TestData />} />
        <Route path="locators" element={<Locators />} />
        <Route path="script" element={<Script />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;
