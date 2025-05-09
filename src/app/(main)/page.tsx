import { Input } from "@/components/ui/input";
import { InfiniteSlider } from "@/components/upl/infinite-slider";
import { WhatsappButton } from "@/components/upl/whatsapp-button";
import { ArrowRight, Copyright, Mail, Phone } from "lucide-react";
import Image, { getImageProps } from "next/image";
import Link from "next/link";
import { FaCircle } from "react-icons/fa";
import { TbArrowDownDashed } from "react-icons/tb";

export default function Home() {
  return (
    <div className="text-white">
      <div
        style={{
          backgroundImage: "url('/assets/images/image-2.png')",
          backgroundSize: "cover",
        }}
        className="h-[calc(100dvh-68px)] relative"
      >
        <div className="bg-linear-to-t from-blue-500 to-transparent from-8% to-80% h-full pt-10 px-5 justify-between flex-col flex">
          <div className="space-y-4">
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

      <div className="h-dvh bg-blue-500 justify-between flex flex-col">
        <div className="px-5 py-10 h-full flex flex-col justify-evenly">
          <h2 className="text-[#35e300] font-bold text-2xl">
            Profile Perusahaan
          </h2>
          <p className="text-sm">
            Mengawali sebagai badan usaha CV. Ulu Plastik, pada tahun 2014. kini
            berkembang pesat menjadi badan usaha yang bernama{" "}
            <span className="font-bold">PT. ULU PLASTIK LATERSIA</span> berdiri
            di Pandaan, Jawa Timur, Indonesia pada tahun 2022 dengan fokus
            melakukan daur ulang sampah plastik menjadi produk biji plastik dan
            tali rafia yang digunakan sebagai bahan baku produksi perusahaan
            manufaktur.
          </p>
          <Link
            href="/profile"
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
              className="flex flex-row gap-2 text-blue-500 text-sm font-bold"
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

      <div className="h-dvh bg-blue-500 justify-between flex flex-col">
        <div className="px-5  h-full flex flex-col justify-evenly">
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
            href={"/"}
            className="flex flex-row gap-2 items-center bg-green-500 self-center text-sm rounded-full px-3 py-1 text-blue-700 font-semibold"
          >
            Lihat produk lainnya <ArrowRight size={16} />
          </Link>
        </div>
        <InfiniteSlider className="bg-white p-2" speed={30} reverse>
          {products.map((i, idx) => (
            <div
              key={idx}
              className="flex flex-row gap-2 text-blue-500 text-sm font-bold items-center"
            >
              <FaCircle />
              <p>{i}</p>
            </div>
          ))}
        </InfiniteSlider>
      </div>

      <div className="h-dvh flex flex-col">
        <div
          style={{
            backgroundImage: "url('/assets/images/image-1.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="w-full h-full bg-green-950/80 p-10 space-y-4">
            <p className="text-center font-bold text-xl text-blue-300/80">
              Biji plastik yang kami produksi, di proses dengan mesin
              berteknologi tinggi dari Cina.
            </p>
            <Link
              href={"/"}
              className="flex flex-row gap-2 items-center bg-green-500 w-fit place-self-center text-sm rounded-full px-3 py-1 text-blue-700 font-semibold"
            >
              Lihat proses produksi kami <ArrowRight size={16} />
            </Link>
          </div>
        </div>
        <div
          style={{
            backgroundImage: "url('/assets/images/image-1.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className="grow"
        >
          <div className="bg-blue-950/80 h-full space-y-4 p-5">
            <div>
              <p className="italic text-sm">Info lebih lanjut?</p>
              <p className="text-xl font-bold">Hubungi Kami</p>
            </div>
            <div className="space-y-2">
              <Input className="bg-white" type="text" placeholder="Nama" />
              <Input className="bg-white" type="email" placeholder="Email" />
              <Input
                className="bg-white"
                type="text"
                placeholder="Perusahaan"
              />
              <button className="bg-[#0070bf] py-1 px-3 rounded-full">
                Kirim
              </button>
            </div>
            <div>
              <h1 className="font-bold text-xl">PT ULU PLASTIK LATERSIA</h1>
              <p className="text-sm">
                Dusun Klanting, Desa Suwayuwo, Kec. Sukorejo, Kab. Pasuruan,
                Jawa Timur, 67161, Indonesia
              </p>
            </div>
            <div>
              <div className="flex flex-row gap-2 items-center">
                <Phone size={14} /> +6282143203848
              </div>
              <div className="flex flex-row gap-2 items-center">
                <Mail size={14} /> ulu.plastik@gmail.com
              </div>
            </div>
          </div>
        </div>
        <div className="bg-blue-500 text-sm flex flex-row gap-2 items-center p-2">
          <Copyright size={16} />{" "}
          <p>2025 PT. ULU PLASTIK LATERSIA. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

const products = [
  "Tisu Hijau",
  "Tisu Putih",
  "Jumbo Putih",
  "Sablon A",
  "Sablon B",
];
