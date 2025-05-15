import { ContactUs } from "@/components/upl/contact-us";
import { InfiniteSlider } from "@/components/upl/infinite-slider";
import { ProsesProduksiCard } from "@/components/upl/proses-produksi-card";
import { AxiosClient } from "@/lib/axios-client";
import { ProducionProcess, StrapiRes } from "@/types";
import { FaCircle } from "react-icons/fa";

export default async function ProsesProduksiPage() {
  const { data: productionProcess } = await AxiosClient.get<
    StrapiRes<ProducionProcess[]>
  >("/api/production-processes", { params: { populate: ["image"] } });

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
        {productionProcess.data.map((item, idx) => (
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

const products = [
  "Tisu Hijau",
  "Tisu Putih",
  "Jumbo Putih",
  "Sablon A",
  "Sablon B",
];
