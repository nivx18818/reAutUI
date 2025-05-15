import { Checkbox } from "@/components/ui/checkbox";
import { PanelLeftClose } from "lucide-react";
import Logo from "/logo.svg";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarTrigger,
} from "@/components/ui/sidebar";

function AppSidebar() {
  return (
    <div className="fixed">
      <Sidebar collapsible="icon">
        <SidebarHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img src={Logo} alt="Logo" className="w-8 h-8" />
              <span className="font-medium">Scenarios</span>
            </div>
            <SidebarTrigger>
              <PanelLeftClose />
            </SidebarTrigger>
          </div>
        </SidebarHeader>
        <SidebarContent>
          {[1, 2].map((num) => (
            <div key={num} className="flex items-center p-2 space-x-2">
              <Checkbox id={`scenario-${num}`} />
              <label htmlFor={`scenario-${num}`} className="text-sm">
                Scenario {num}
              </label>
            </div>
          ))}
        </SidebarContent>
      </Sidebar>
    </div>
  );
}

export default AppSidebar;
