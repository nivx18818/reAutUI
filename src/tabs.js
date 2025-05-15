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
    value: "scenario",
  },
  testData: {
    icon: BadgeCheck,
    component: TestData,
    label: "TestData",
    value: "testData",
  },
  locators: {
    icon: SquareDashed,
    component: Locators,
    label: "Locators",
    value: "locators",
  },
  script: {
    icon: Terminal,
    component: Script,
    label: "Script",
    value: "script",
  },
};

export default tabs;
