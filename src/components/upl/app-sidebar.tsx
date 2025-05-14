import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Image from "next/image";
import Link from "next/link";
import { SidebarCloseBtn } from "./sidebar-close-btn";
import { Separator } from "../ui/separator";

export const AppSidebar = () => {
  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarCloseBtn />
      </SidebarHeader>
      <SidebarContent className="mt-9">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {menus.map((menu, idx) => (
                <div key={idx}>
                  {idx === 0 && <Separator className="bg-[#35e300] mb-2" />}
                  <SidebarMenuItem>
                    <Link href={menu.url}>
                      <SidebarMenuButton className="text-[#35e300] rounded-none font-semibold text-lg py-5 hover:text-green-200">
                        {menu.title}
                      </SidebarMenuButton>
                    </Link>
                  </SidebarMenuItem>
                  <Separator className="bg-[#35e300]" />
                </div>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <Image
          width={200}
          height={200}
          src="/assets/images/upl-logo-green.png"
          alt="Logo"
          className="w-full h-full object-contain"
          priority={true}
        />
      </SidebarFooter>
    </Sidebar>
  );
};

const menus = [
  {
    title: "HOME",
    url: "/",
  },
  {
    title: "TENTANG PERUSAHAAN",
    url: "/tentang-perusahaan",
  },
  {
    title: "PRODUK",
    url: "/produk",
  },
  {
    title: "PROSES PRODUKSI",
    url: "/proses-produksi",
  },
  {
    title: "HUBUNGI KAMI",
    url: "/hubungi-kami",
  },
];
