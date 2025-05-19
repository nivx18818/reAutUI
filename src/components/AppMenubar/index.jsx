import { memo } from "react";
import { cn } from "@/lib/utils";
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import tabs from "@/tabs";

function AppMenubar({ activeTab, handleTabChange }) {
  return (
    <Menubar className="fixed inline-flex items-center justify-center w-auto h-10 p-1 -translate-x-1/2 rounded-md bg-muted left-1/2 bottom-8">
      {Object.values(tabs).map(({ label, icon, value }) => {
        const IconComponent = icon;
        return (
          <MenubarMenu key={value}>
            <MenubarTrigger
              onClick={() => handleTabChange(value)}
              className={cn(
                "flex items-center gap-2 px-3 py-1.5 text-sm font-medium cursor-pointer rounded-sm transition-colors",
                activeTab === value
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground"
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
