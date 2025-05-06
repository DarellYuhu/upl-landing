"use client";

import { Button } from "../ui/button";
import { useSidebar } from "../ui/sidebar";
import { GiHamburgerMenu } from "react-icons/gi";

export const SidebarTrigger = () => {
  const { toggleSidebar } = useSidebar();
  return (
    <Button onClick={toggleSidebar} size={"icon"} variant={"secondary"}>
      <GiHamburgerMenu className="text-[#0070bf]" />
    </Button>
  );
};
