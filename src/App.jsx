import {
  BadgeCheck,
  Layers,
  SquareDashed,
  Terminal,
  Triangle,
  TvMinimal,
} from "lucide-react";
import { useState } from "react";
import { Checkbox } from "./components/ui/checkbox";
import { ScrollArea } from "./components/ui/scroll-area";
import { Tabs, TabsList, TabsTrigger } from "./components/ui/tabs";

import Locators from "./pages/Locators";
import Scenario from "./pages/Scenario";
import Script from "./pages/Script";
import TestData from "./pages/TestData";

import AutUILogo from "/autui-logo.svg";
import {
  Menubar,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "./components/ui/menubar";

function App() {
  const [activeTab, setActiveTab] = useState("scenario");
  const tabs = {
    scenario: <Scenario />,
    testData: <TestData />,
    locators: <Locators />,
    script: <Script />,
  };

  return (
    <div className="flex h-screen bg-white bg-[linear-gradient(#e5e7eb_1px,transparent_1px),linear-gradient(to_right,#e5e7eb_1px,transparent_1px)] bg-[size:24px_24px] relative">
      <div className="absolute top-5 left-28">
        <img src={AutUILogo} alt="Logo" className="w-32 h-8" />
      </div>

      {/* Sidebar */}
      <div className="fixed bg-white border-r w-60 hidden">
        <div className="p-4 border-b"></div>

        <div className="p-4 border-b">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Triangle className="w-4 h-4 fill-black stroke-none" />
              <span className="font-medium">Scenarios</span>
            </div>
            <Layers className="w-4 h-4" />
          </div>
        </div>

        <ScrollArea className="h-[calc(100vh-120px)]">
          <div className="p-2">
            {[1, 2].map((num) => (
              <div key={num} className="flex items-center p-2 space-x-2">
                <Checkbox id={`scenario-${num}`} />
                <label htmlFor={`scenario-${num}`} className="text-sm">
                  Scenario {num}
                </label>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>

      {/* Main Content */}
      <div className="flex flex-col flex-1">
        <div className="flex-1 p-6">{tabs[activeTab]}</div>
      </div>

      {/* Bottom Tabs */}
      <div className="fixed flex justify-center p-2 transform -translate-x-1/2 border-t bottom-8 left-1/2">
        <Menubar className="inline-flex items-center justify-center w-auto h-10 p-1 rounded-md bg-muted">
          <MenubarMenu>
            <MenubarTrigger
              onClick={() => setActiveTab("scenario")}
              className={`flex items-center gap-2 px-3 py-1.5 text-sm font-medium cursor-pointer rounded-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
                activeTab === "scenario"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-accent-foreground"
              }`}
            >
              <TvMinimal className="w-4" />
              Scenario
            </MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger
              onClick={() => setActiveTab("testData")}
              className={`flex items-center gap-2 px-3 py-1.5 text-sm font-medium cursor-pointer rounded-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
                activeTab === "testData"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-accent-foreground"
              }`}
            >
              <BadgeCheck className="w-4" />
              Test Data
            </MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger
              onClick={() => setActiveTab("locators")}
              className={`flex items-center gap-2 px-3 py-1.5 text-sm font-medium cursor-pointer rounded-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
                activeTab === "locators"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-accent-foreground"
              }`}
            >
              <SquareDashed className="w-4" />
              Locators
            </MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger
              onClick={() => setActiveTab("script")}
              className={`flex items-center gap-2 px-3 py-1.5 text-sm font-medium cursor-pointer rounded-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
                activeTab === "script"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-accent-foreground"
              }`}
            >
              <Terminal className="w-4" />
              Script
            </MenubarTrigger>
          </MenubarMenu>
        </Menubar>
      </div>
    </div>
  );
}

export default App;
