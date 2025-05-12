import Image from "next/image";

type Props = {
  item: {
    step: string;
    imageSrc: string;
    desc: string;
  };
};

export const ProsesProduksiCard = ({ item }: Props) => {
  return (
    <div className="text-center text-white space-y-4">
      <h3 className="text-4xl font-bold text-shadow-lg/30">{item.step}</h3>
      <Image
        src={item.imageSrc}
        alt={item.step}
        width={300}
        height={300}
        className="w-full h-60 rounded-lg object-cover"
      />
      <p>{item.desc}</p>
    </div>
  );
};
