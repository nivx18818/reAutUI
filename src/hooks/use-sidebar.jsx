import * as React from "react";
import { SidebarContext } from "@/contexts/SidebarContext.jsx";

const useSidebar = () => {
  const context = React.useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.");
  }

  return context;
};

export default useSidebar;
