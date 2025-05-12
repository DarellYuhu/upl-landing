"use client";

import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useSidebar } from "../ui/sidebar";

export const SidebarCloseBtn = () => {
  const { toggleSidebar } = useSidebar();

  return (
    <Button
      onClick={toggleSidebar}
      size={"icon"}
      variant={"ghost"}
      className="flex self-end text-[#35e300] hover:text-[#35e300]/60 mt-8 hover:bg-transparent"
    >
      <X className="size-7" />
    </Button>
  );
};
