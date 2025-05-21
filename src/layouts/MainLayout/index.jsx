import { Outlet, useLocation, useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import { Slide, ToastContainer } from "react-toastify";
import { BadgeCheck } from "lucide-react";
import { cn } from "@/lib/utils";

import AppMenubar from "@/components/AppMenubar";
import AppSidebar from "@/components/AppSidebar";
import LogoWithText from "/logo-with-text.svg";
import useScenario from "@/hooks/useScenario";

function MainLayout() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("");
  const { setCurrentScenarioId } = useScenario();

  useEffect(() => {
    if (id) {
      const basePathPattern = new RegExp(`^/${id}/`);
      const subPath = location.pathname.replace(basePathPattern, "");
      setActiveTab(subPath || "scenario");
    }
  }, [location.pathname, id]);

  const handleTabChange = (tabValue) => {
    if (id) {
      navigate(`/${id}/${tabValue}`);
    }
  };

  const handleScenarioChange = (scenarioId) => {
    if (scenarioId) {
      navigate(`/${scenarioId}/${activeTab}`);
      setCurrentScenarioId(scenarioId);
    }
  };

  return (
    <>
      {/* Background */}
      <div className="fixed top-0 left-0 bottom-0 right-0 bg-[#f8fafc] bg-[linear-gradient(to_right,#0000001a_1px,transparent_1px),linear-gradient(to_bottom,#0000001a_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="relative flex w-full min-h-screen px-28">
        <div className="absolute top-5 ">
          <img
            src={LogoWithText}
            alt="Logo"
            className="w-32 h-8 select-none"
            draggable="false"
          />
        </div>

        {/* Main Content */}
        <div
          className={cn(
            "w-full flex flex-col flex-1 pb-20",
            activeTab === "scenario" ? "mt-32" : "mt-24"
          )}
        >
          <div className="flex-1 p-6">
            <Outlet />
          </div>
        </div>

        <AppSidebar
          className="h-4/5 top-[10%]"
          handleScenarioChange={handleScenarioChange}
        />
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
    </>
  );
}

export default MainLayout;
