import { LeftHeader } from "@/components/ui/left-header";
import { RightHeader } from "@/components/ui/right-header";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/upl/app-sidebar";
import { Copyright } from "lucide-react";
import { ReactNode } from "react";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="w-full">
        <header className="flex flex-row justify-between items-center p-4 h-20">
          <LeftHeader />
          <RightHeader />
        </header>
        {children}
        <footer className="bg-[#0070bf] text-sm flex flex-row gap-2 items-center p-2 text-white">
          <Copyright size={16} />{" "}
          <p>2025 PT. ULU PLASTIK LATERSIA. All rights reserved.</p>
        </footer>
      </div>
    </SidebarProvider>
  );
}
