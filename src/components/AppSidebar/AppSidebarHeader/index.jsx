import { memo } from "react";
import { PanelLeftClose } from "lucide-react";
import {
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import Logo from "/logo.svg";

function AppSidebarHeader({ open }) {
  return (
    <SidebarHeader>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton
            key={open ? "sidebar-button-open" : "sidebar-button-collapsed"}
            asChild
            className="pr-0 hover:bg-transparent active:bg-transparent"
            tooltip="Open sidebar"
          >
            {!open ? (
              <SidebarTrigger>
                <img
                  src={Logo}
                  alt="Logo"
                  className="w-8 h-8 select-none"
                  draggable="false"
                />
              </SidebarTrigger>
            ) : (
              <div className="flex items-center justify-between">
                <img
                  src={Logo}
                  alt="Logo"
                  className="w-8 h-8 select-none"
                  draggable="false"
                />
                <SidebarTrigger>
                  <PanelLeftClose />
                </SidebarTrigger>
              </div>
            )}
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarHeader>
  );
}

export default memo(AppSidebarHeader);
