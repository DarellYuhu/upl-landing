"use client";

import { usePathname, useRouter } from "next/navigation";
import { SidebarTrigger } from "../upl/sidebar-trigger";
import { Button } from "./button";
import { X } from "lucide-react";

export const RightHeader = () => {
  const pathname = usePathname();
  const router = useRouter();

  switch (true) {
    case pathname.includes("/produk/"):
      return (
        <Button
          className="text-[#0070bf]"
          size={"icon"}
          variant={"secondary"}
          onClick={() => router.back()}
        >
          <X className="size-7" />
        </Button>
      );

    default:
      return <SidebarTrigger />;
  }
};
