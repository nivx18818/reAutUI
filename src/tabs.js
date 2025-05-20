import { BadgeCheck, SquareDashed, Terminal, TvMinimal } from "lucide-react";
import Scenario from "./pages/Scenario";
import TestData from "./pages/TestData";
import Locators from "./pages/Locators";
import Script from "./pages/Script";

const tabs = {
  scenario: {
    icon: TvMinimal,
    component: Scenario,
    label: "Scenario",
    path: "scenario",
  },
  testData: {
    icon: BadgeCheck,
    component: TestData,
    label: "Test Data",
    path: "test-data",
  },
  locators: {
    icon: SquareDashed,
    component: Locators,
    label: "Locators",
    path: "locators",
  },
  script: {
    icon: Terminal,
    component: Script,
    label: "Script",
    path: "script",
  },
};

export default tabs;
