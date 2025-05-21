import { memo } from "react";
import { cn } from "@/lib/utils";
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import tabs from "@/tabs";

function AppMenubar({ activeTab, handleTabChange }) {
  return (
    <Menubar
      key={activeTab}
      className="fixed inline-flex items-center justify-center w-auto h-10 p-1 -translate-x-1/2 rounded-md bg-muted left-1/2 bottom-8"
    >
      {Object.values(tabs).map(({ label, icon, path }) => {
        const IconComponent = icon;
        return (
          <MenubarMenu key={path}>
            <MenubarTrigger
              onClick={() => handleTabChange(path)}
              className={cn(
                "flex items-center gap-2 px-3 py-1.5 text-sm font-medium cursor-pointer rounded-sm transition-colors whitespace-nowrap",
                activeTab === path
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-accent-foreground"
              )}
            >
              <IconComponent className="w-4" />
              {label}
            </MenubarTrigger>
          </MenubarMenu>
        );
      })}
    </Menubar>
  );
}

export default memo(AppMenubar);
