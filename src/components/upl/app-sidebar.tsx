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

export const AppSidebar = () => {
  return (
    <Sidebar>
      <SidebarHeader></SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {menus.map((menu, idx) => (
                <SidebarMenuItem key={idx}>
                  <Link href={menu.url}>
                    <SidebarMenuButton className="text-green-400 border-green-400 border-y-[1.5px] rounded-none font-semibold hover:text-green-200">
                      {menu.title}
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
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
    title: "HUBUNGAN KAMI",
    url: "/hubungan-kami",
  },
];
