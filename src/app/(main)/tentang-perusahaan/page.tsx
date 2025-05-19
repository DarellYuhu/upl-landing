import { ContactUs } from "@/components/upl/contact-us";
import { InfiniteSlider } from "@/components/upl/infinite-slider";
import { LinimasaCarousel } from "@/components/upl/linimasa-carousel";
import { AxiosClient } from "@/lib/axios-client";
import { CompanyProfiles, StrapiRes, Timeline } from "@/types";
import Image from "next/image";
import { FaCircle } from "react-icons/fa";
import Markdown from "react-markdown";

export default async function TentangPerusahaanPage() {
  const { data: companyProfiles } = await AxiosClient.get<
    StrapiRes<CompanyProfiles>
  >("/api/company-detail");
  const { data: timeline } = await AxiosClient.get<StrapiRes<Timeline[]>>(
    "/api/timelines",
    {
      params: { populate: ["image"] },
    }
  );
  return (
    <div>
      <div className="bg-[url('/assets/images/image-5.png')] bg-no-repeat text-center w-full bg-cover py-20 px-18 text-white  space-y-2">
        <h1>TENTANG KAMI</h1>
        <h3 className="text-2xl font-semibold">
          Mengenal kami secara lebih dekat.
        </h3>
      </div>

      <div className="text-justify flex flex-col items-center text-[#0070bf] space-y-6 p-7">
        <h2 className="font-bold">{companyProfiles.data.short_name}</h2>
        <Markdown>{companyProfiles.data.description}</Markdown>
        <Image
          src={"/assets/images/image-6.png"}
          alt="image-6"
          width={1000}
          height={1000}
          className="w-full rounded-xl"
        />
        <Image
          src={"/assets/images/image-7.png"}
          alt="image-7"
          width={1000}
          height={1000}
          className="w-full rounded-xl"
        />
        <Image
          src={"/assets/images/image-8.png"}
          alt="image-8"
          width={1000}
          height={1000}
          className="w-full rounded-xl"
        />
      </div>

      <InfiniteSlider className="bg-white p-2" speed={30}>
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="flex flex-row gap-2 text-[#0070bf] text-sm font-bold items-center"
          >
            <FaCircle size={10} />
            <p>{companyProfiles.data.company_name}</p>
          </div>
        ))}
      </InfiniteSlider>

      <div className="text-center p-7 space-y-8">
        <div className="bg-[#0070bf] text-white p-3 rounded-xl border-4 border-[#35e300]">
          <h3 className="font-bold">VISI</h3>
          <p>{companyProfiles.data.vision}</p>
        </div>
        <div className="bg-[#0070bf] text-white p-3 rounded-xl border-4 border-[#35e300]">
          <h3 className="font-bold">MISI</h3>
          <div className="text-left markdown -ml-5">
            <Markdown>{companyProfiles.data.mission}</Markdown>
          </div>
        </div>
      </div>

      <div className="px-7 mt-[100px]">
        <div className="text-center text-2xl text-[#0070bf]">
          <h3>LINIMASA</h3>
          <h1 className="font-bold">ULU PLASTIK LATERSIA</h1>
        </div>
      </div>
      <LinimasaCarousel items={timeline.data} />

      <InfiniteSlider className="bg-white p-2" speed={30} reverse>
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

      <ContactUs />
    </div>
  );
}
