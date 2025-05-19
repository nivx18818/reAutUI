import { useState } from "react";
import { cn } from "./lib/utils";

import { Slide, ToastContainer } from "react-toastify";
import { BadgeCheck } from "lucide-react";

import AppMenubar from "./components/AppMenubar";
import AppSidebar from "./components/AppSidebar";
import LogoWithText from "/logo-with-text.svg";
import tabs from "./tabs";

function App() {
  const [activeTab, setActiveTab] = useState("script");
  const CurrentTabComponent = tabs[activeTab].component;

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex h-screen bg-[#f8fafc] bg-[linear-gradient(to_right,#0000001a_1px,transparent_1px),linear-gradient(to_bottom,#0000001a_1px,transparent_1px)] bg-[size:50px_50px] relative w-full px-28">
      <div className="absolute top-5">
        <img src={LogoWithText} alt="Logo" className="w-32 h-8" />
      </div>

      {/* Main Content */}
      <div
        className={cn(
          "w-full flex flex-col flex-1",
          activeTab === "scenario" ? "mt-32" : "mt-24"
        )}
      >
        <div className="flex-1 p-6">
          <CurrentTabComponent />
        </div>
      </div>

      <AppSidebar className="h-4/5 top-[10%]" />
      <AppMenubar activeTab={activeTab} handleTabChange={handleTabChange} />

      <ToastContainer
        position="top-center"
        autoClose={2000}
        limit={2}
        hideProgressBar
        newestOnTop={false}
        closeOnClick={false}
        closeButton={false}
        rtl={false}
        pauseOnFocusLoss={false}
        pauseOnHover={false}
        theme="colored"
        transition={Slide}
        className="text-sm select-none"
        icon={({ type }) => {
          switch (type) {
            case "success":
              return <BadgeCheck />;
            default:
              return null;
          }
        }}
      />
    </div>
  );
}

export default App;
