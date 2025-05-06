import { WhatsappButton } from "@/components/upl/whatsapp-button";
import { getImageProps } from "next/image";
import { TbArrowDownDashed } from "react-icons/tb";

function getBackgroundImage(srcSet = "") {
  const imageSet = srcSet
    .split(", ")
    .map((str) => {
      const [url, dpi] = str.split(" ");
      return `url("${url}") ${dpi}`;
    })
    .join(", ");
  return `image-set(${imageSet})`;
}

export default function Home() {
  const {
    props: { srcSet },
  } = getImageProps({
    alt: "",
    width: 500,
    height: 500,
    src: "/assets/images/upl-logo-color.png",
  });
  const backgroundImage = getBackgroundImage(srcSet);

  return (
    <div className="text-white">
      <div
        style={{ backgroundImage }}
        className="h-[calc(100dvh-68px)] relative"
      >
        <div className="bg-linear-to-t from-blue-500 to-transparent from-8% to-80% h-full pt-10 px-5 justify-between flex-col flex">
          <div className="bg-black space-y-4">
            <h1 className="font-semibold text-xl">ULU PLASTIK LATERSIA</h1>
            <h2 className="font-bold text-4xl">
              Daur ulang, <br />
              Produksi <br />
              Biji Plastik & Rafia.
            </h2>
            <h3 className="">
              Tidak hanya memproduksi, kami juga andil dalam memberikan dampak
              postif bagi lingkungan.
            </h3>
          </div>
          <div className="content-center flex flex-col items-center w-40 text self-center text-sm space-y-2 mb-3">
            <p className="text-center">
              gulir kebawah untuk informasi lanjutan
            </p>
            <TbArrowDownDashed />
          </div>
        </div>
        <WhatsappButton />
      </div>
    </div>
  );
}
