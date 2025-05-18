import { PanelLeftClose, Save, TvMinimal } from "lucide-react";
import Logo from "/logo.svg";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import useSidebar from "@/hooks/use-sidebar";

function AppSidebar({ className }) {
  const { open } = useSidebar();

  return (
    <div className="fixed">
      <Sidebar variant="floating" collapsible="icon" className={className}>
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
                    <img src={Logo} alt="Logo" className="w-8 h-8" />
                  </SidebarTrigger>
                ) : (
                  <div className="flex items-center justify-between">
                    <img src={Logo} alt="Logo" className="w-8 h-8" />
                    <SidebarTrigger>
                      <PanelLeftClose />
                    </SidebarTrigger>
                  </div>
                )}
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {[1, 2].map((num) => (
                  <SidebarMenuItem key={num}>
                    <SidebarMenuButton
                      isActive={num === 1}
                      tooltip={`Scenario ${num}`}
                      className="has-[:hover]:!bg-sidebar"
                    >
                      <TvMinimal />
                      <span className="text-sm whitespace-nowrap">
                        Scenario {num}
                      </span>
                      <SidebarMenuAction asChild>
                        <span>
                          <Save />
                        </span>
                      </SidebarMenuAction>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </div>
  );
}

export default AppSidebar;
