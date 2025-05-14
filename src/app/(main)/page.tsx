import { ContactUs } from "@/components/upl/contact-us";
import { InfiniteSlider } from "@/components/upl/infinite-slider";
import { WhatsappButton } from "@/components/upl/whatsapp-button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaCircle } from "react-icons/fa";
import { TbArrowDownDashed } from "react-icons/tb";

export default async function Home() {
  return (
    <>
      <div className="text-white relative">
        <div
          style={{
            backgroundImage: "url('/assets/images/image-2.png')",
            backgroundSize: "cover",
          }}
          className="h-[calc(100dvh-68px)]"
        >
          <div className="bg-linear-to-t from-[#0070bf] to-transparent from-8% to-80% h-full pt-10 px-5 justify-between flex-col flex">
            <div className="space-y-4">
              <h1 className="font-semibold text-xl">ULU PLASTIK LATERSIA</h1>
              <h2 className="font-bold text-4xl/15">
                <span className="bg-[#5cc3ff]/65 px-3">Daur ulang,</span> <br />
                <span className="bg-[#5cc3ff]/65 px-3">Produksi</span> <br />
                <span className="bg-[#5cc3ff]/65 px-3">
                  Biji Plastik & Rafia.
                </span>
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
        </div>

        <div className="bg-[#0070bf] justify-between flex flex-col">
          <div className="px-5 py-10 h-full flex flex-col space-y-5">
            <h2 className="text-[#35e300] font-bold text-[26px]">
              Profile Perusahaan
            </h2>
            <p className="text-[16px]">
              Mengawali sebagai badan usaha CV. Ulu Plastik, pada tahun 2014.
              kini berkembang pesat menjadi badan usaha yang bernama{" "}
              <span className="font-bold">PT. ULU PLASTIK LATERSIA</span>{" "}
              berdiri di Pandaan, Jawa Timur, Indonesia pada tahun 2022 dengan
              fokus melakukan daur ulang sampah plastik menjadi produk biji
              plastik dan tali rafia yang digunakan sebagai bahan baku produksi
              perusahaan manufaktur.
            </p>
            <Link
              href="/tentang-perusahaan"
              className="text-[#35e300] text-sm flex flex-row gap-2 items-center justify-center"
            >
              Lihat selengkapnya <ArrowRight size={16} />
            </Link>
            <Image
              src="/assets/images/image-1.png"
              alt="logo-1"
              width={800}
              height={800}
              className="w-full h-56 object-cover"
            />
          </div>
          <InfiniteSlider className="bg-white p-2" speed={30}>
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="flex flex-row gap-2 text-[#0070bf] text-sm font-bold"
              >
                <Image
                  src={"/assets/images/upl-logo-color.png"}
                  alt="logo"
                  width={50}
                  height={20}
                  className="w-6 h-full"
                />
                <p>Ulu Plastik Latersia</p>
              </div>
            ))}
          </InfiniteSlider>
        </div>

        <div className="bg-[#0070bf] space-y-8">
          <div className="p-5  h-full flex flex-col gap-5">
            <h2 className="text-[#35e300] font-bold text-2xl">Produk Kami</h2>
            <p className="text-sm">
              Kami memproduksi biji plastik Polypropylene dan Tali Rafia dengan
              standar kualitas yang tinggi serta harga yang kompetitif sehingga
              cocok digunakan sebagai bahan baku produksi perusahaan manufaktur.
            </p>
            <div
              style={{
                backgroundImage: 'url("/assets/images/jumbo-putih.png")',
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              className="h-40 rounded-xl overflow-hidden"
            >
              <div className="bg-gradient-to-t from-black to-transparent from-0% to-50% w-full h-full  flex items-end p-3">
                <p>PP Jumbo Putih</p>
              </div>
            </div>
            <div
              style={{
                backgroundImage: 'url("/assets/images/jumbo-hijau.png")',
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              className="h-40 rounded-xl overflow-hidden"
            >
              <div className="bg-gradient-to-t from-black to-transparent from-0% to-50% w-full h-full  flex items-end p-3">
                <p>PP Jumbo Hijau</p>
              </div>
            </div>
            <Link
              href={"/produk"}
              className="flex flex-row gap-2 items-center bg-[#35e300] self-center text-sm rounded-full px-3 py-1 text-blue-700 font-semibold"
            >
              Lihat produk lainnya <ArrowRight size={16} />
            </Link>
          </div>
          <InfiniteSlider className="bg-white p-2" speed={30} reverse>
            {products.map((i, idx) => (
              <div
                key={idx}
                className="flex flex-row gap-2 text-[#0070bf] text-sm font-bold items-center"
              >
                <FaCircle />
                <p>{i}</p>
              </div>
            ))}
          </InfiniteSlider>
        </div>

        <div className="flex flex-col">
          <div
            style={{
              backgroundImage: "url('/assets/images/image-3.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="w-full h-[250px] flex items-center flex-col justify-center px-11 space-y-4">
              <p className="text-center font-bold text-xl text-blue-300/80">
                Biji plastik yang kami produksi, di proses dengan mesin
                berteknologi tinggi dari Cina.
              </p>
              <Link
                href={"/proses-produksi"}
                className="flex flex-row gap-2 items-center bg-[#35e300] w-fit place-self-center text-sm rounded-full px-3 py-1 text-blue-700 font-semibold"
              >
                Lihat proses produksi kami <ArrowRight size={16} />
              </Link>
            </div>
          </div>
          <ContactUs />
        </div>
      </div>
      <WhatsappButton />
    </>
  );
}

const products = [
  "Tisu Hijau",
  "Tisu Putih",
  "Jumbo Putih",
  "Sablon A",
  "Sablon B",
];
