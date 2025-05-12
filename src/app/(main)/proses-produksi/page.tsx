import { ContactUs } from "@/components/upl/contact-us";
import { InfiniteSlider } from "@/components/upl/infinite-slider";
import { ProsesProduksiCard } from "@/components/upl/proses-produksi-card";
import { FaCircle } from "react-icons/fa";

export default function ProsesProduksiPage() {
  return (
    <div className="bg-[#0070bf]">
      <div className="bg-[url('/assets/images/bg-1.jpg')] bg-no-repeat bg-cover">
        <div className="w-full py-15 px-10 text-white text-right bg-gradient-to-t from-[#0070bf] to-transparent to-80%">
          <p className="text-sm">MARI LIHAT DAN TELUSURI</p>
          <h1 className="text-5xl font-semibold">
            PROSES <span className="text-[#35e300]">PRODUKSI</span>
          </h1>
        </div>
      </div>

      <div className="p-7 space-y-14">
        {data.map((item, idx) => (
          <ProsesProduksiCard key={idx} item={item} />
        ))}
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

      <ContactUs />
    </div>
  );
}

const data = [
  {
    step: "Sortir",
    imageSrc: "/assets/images/proses-produksi/1.png",
    desc: "proses ini adalah memisahkan sampah plastik yang bisa menjadi bahan baku produksi.",
  },
  {
    step: "Gilingan",
    imageSrc: "/assets/images/proses-produksi/2.png",
    desc: "Sampah yang sudah  di sortir, dilanjutkan untuk di giling menjadi plastik kecil-kecil dan kemudian di  lakukan pencucian dengan tujuan memisahakan kotoran dari plastik.",
  },
  {
    step: "Penyampuran",
    imageSrc: "/assets/images/proses-produksi/3.png",
    desc: "Kemudian plastik plastik yang sudah di giling baik yang bahan baku basah dan kering, di campur menjadi satu dalam proses penyampuran.",
  },
  {
    step: "Ektursi",
    imageSrc: "/assets/images/proses-produksi/3.png",
    desc: "Tahapan ini melakukan peleburan hasil campuran bahan baku tadi menjadi biji plastik yang akan di Jual dan di proses di bagian produski rafia.",
  },
  {
    step: "Pembuatan Rafia",
    imageSrc: "/assets/images/proses-produksi/3.png",
    desc: "Biji plastik (Pellet) yang sudah jadi tadi akan di leburkan kembali dan di proses menjadi tali rafia.",
  },
];

const products = [
  "Tisu Hijau",
  "Tisu Putih",
  "Jumbo Putih",
  "Sablon A",
  "Sablon B",
];
