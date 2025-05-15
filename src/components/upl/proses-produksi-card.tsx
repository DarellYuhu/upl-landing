import { ProducionProcess } from "@/types";
import Image from "next/image";

type Props = {
  item: ProducionProcess;
};

export const ProsesProduksiCard = ({ item }: Props) => {
  return (
    <div className="text-center text-white space-y-4">
      <h3 className="text-4xl font-bold text-shadow-lg/30">{item.name}</h3>
      <Image
        src={item.image.url}
        alt={item.image.name}
        width={300}
        height={300}
        className="w-full h-60 rounded-lg object-cover"
      />
      <p>{item.description}</p>
    </div>
  );
};
