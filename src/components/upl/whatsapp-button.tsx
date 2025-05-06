import { BsWhatsapp } from "react-icons/bs";
import { Button } from "../ui/button";

export const WhatsappButton = () => {
  return (
    <Button
      className="bg-[#25D366] hover:bg-[#25D366]/70 absolute right-10 bottom-30 rounded-full size-12"
      size={"icon"}
    >
      <BsWhatsapp className="size-6" />
    </Button>
  );
};
