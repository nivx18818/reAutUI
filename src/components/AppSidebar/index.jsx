import { memo } from "react";
import { PanelLeftClose, Save, TvMinimal } from "lucide-react";

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
import useScenario from "@/hooks/useScenario";
import Logo from "/logo.svg";

function AppSidebar({ className, handleScenarioChange }) {
  const { scenarios, currentScenarioId } = useScenario();
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
                {scenarios.map(({ id, name }) => {
                  const isActive = id === currentScenarioId;
                  return (
                    <SidebarMenuItem key={id}>
                      <SidebarMenuButton
                        isActive={isActive}
                        tooltip={name}
                        className={open && "has-[:hover]:!bg-sidebar"}
                        onClick={() => !isActive && handleScenarioChange(id)}
                      >
                        <TvMinimal />
                        <span className="text-sm whitespace-nowrap">
                          {name}
                        </span>
                        <SidebarMenuAction asChild>
                          <span>
                            <Save />
                          </span>
                        </SidebarMenuAction>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </div>
  );
}

export default memo(AppSidebar);
