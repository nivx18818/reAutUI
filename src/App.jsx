import { useState } from "react";
import { cn } from "./lib/utils";

import AppMenubar from "./components/AppMenubar";
import AppSidebar from "./components/AppSidebar";
import LogoWithText from "/logo-with-text.svg";
import tabs from "./tabs";

function App() {
  const [activeTab, setActiveTab] = useState("scenario");
  const CurrentTabComponent = tabs[activeTab].component;

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex h-screen bg-[#f8fafc] bg-[linear-gradient(to_right,#0000001a_1px,transparent_1px),linear-gradient(to_bottom,#0000001a_1px,transparent_1px)] bg-[size:50px_50px] relative w-full px-28">
      <div className="absolute top-5">
        <img src={LogoWithText} alt="Logo" className="w-32 h-8" />
      </div>

      <AppSidebar />

      {/* Main Content */}
      <div className={cn("flex flex-col flex-1", activeTab === "scenario" ? "mt-32" : "mt-24")}>
        <div className="flex-1 p-6">
          <CurrentTabComponent />
        </div>
      </div>

      <AppMenubar activeTab={activeTab} handleTabChange={handleTabChange} />
    </div>
  );
}

export default App;
