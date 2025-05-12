import { BsWhatsapp } from "react-icons/bs";
import { Button } from "../ui/button";
import Link from "next/link";

export const WhatsappButton = () => {
  return (
    <Button
      asChild
      className="bg-[#25D366] hover:bg-[#25D366]/70 fixed right-10 bottom-20 rounded-full size-12"
      size={"icon"}
    >
      <Link href={"https://wa.me/6282143203848"} target="_blank">
        <BsWhatsapp className="size-6" />
      </Link>
    </Button>
  );
};
