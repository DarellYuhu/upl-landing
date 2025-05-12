import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/upl/app-sidebar";
import { SidebarTrigger } from "@/components/upl/sidebar-trigger";
import { Copyright } from "lucide-react";
import Image from "next/image";
import { ReactNode } from "react";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="w-full">
        <header className="flex flex-row justify-between items-center p-4">
          <Image
            src={"/assets/images/upl-logo-color.png"}
            alt="upl_logo"
            width={50}
            height={50}
          />
          <SidebarTrigger />
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
