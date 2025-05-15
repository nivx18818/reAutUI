import { useState } from "react";

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
    <div className="flex h-screen bg-white bg-[linear-gradient(#e5e7eb_1px,transparent_1px),linear-gradient(to_right,#e5e7eb_1px,transparent_1px)] bg-[size:24px_24px] relative w-full">
      <div className="absolute top-5 left-28">
        <img src={LogoWithText} alt="Logo" className="w-32 h-8" />
      </div>

      <AppSidebar />

      {/* Main Content */}
      <div className="flex flex-col flex-1">
        <div className="flex-1 p-6">
          <CurrentTabComponent />
        </div>
      </div>

      <AppMenubar activeTab={activeTab} handleTabChange={handleTabChange} />
    </div>
  );
}

export default App;
