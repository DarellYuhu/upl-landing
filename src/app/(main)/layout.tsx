import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/upl/app-sidebar";
import { ReactNode } from "react";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div>
        <header>
          <SidebarTrigger />
        </header>
        {children}
      </div>
    </SidebarProvider>
  );
}
