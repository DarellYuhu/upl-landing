import { ContactUs } from "@/components/upl/contact-us";
import { InfiniteSlider } from "@/components/upl/infinite-slider";
import { ProductCard } from "@/components/upl/product-card";
import { AxiosClient } from "@/lib/axios-client";
import { Product, StrapiRes } from "@/types";
import { FaCircle } from "react-icons/fa";

export default async function ProdukPage() {
  const { data: products } = await AxiosClient.get<StrapiRes<Product[]>>(
    "/api/products",
    { params: { populate: ["images"] } }
  );

  return (
    <div>
      <div className="bg-[url('/assets/images/image-9.png')] bg-no-repeat w-full bg-cover py-15 px-10 text-white">
        <p className="text-sm">MARI LIHAT DAN TELUSURI</p>
        <h1 className="text-5xl font-semibold">PRODUK UNGGULAN</h1>
      </div>
      <div className="p-7 space-y-7">
        {products.data.map((item, idx) => (
          <ProductCard key={idx} item={item} />
        ))}
      </div>

      <InfiniteSlider className="bg-white p-2" speed={30} reverse>
        {data.map((i, idx) => (
          <div
            key={idx}
            className="flex flex-row gap-2 text-blue-500 text-sm font-bold items-center"
          >
            <FaCircle />
            <p>{i.nama}</p>
          </div>
        ))}
      </InfiniteSlider>

      <ContactUs />
    </div>
  );
}

const data = [
  {
    imageSrc: "/assets/images/product/pp-sablon-a.png",
    nama: "PP Sablon A",
    mesh: "60 mesh",
    warna: "Hijau rumput",
    aplikasi: "Rafia & Campuran Material",
  },
  {
    imageSrc: "/assets/images/product/pp-sablon-b.png",
    nama: "PP Sablon B",
    mesh: "60 mesh",
    warna: "Hijau Moss",
    aplikasi: "Rafia & Campuran Material",
  },
  {
    imageSrc: "/assets/images/product/pp-tisu-putih.png",
    nama: "PP Tisu Putih",
    mesh: "60 mesh",
    warna: "Putih Kerang",
    aplikasi: "Campuran Material",
  },
  {
    imageSrc: "/assets/images/product/pp-jumbo-putih.png",
    nama: "PP Jumbo Putih",
    mesh: "60 mesh",
    warna: "Putih Tulang",
    aplikasi: "Campuran Material",
  },
  {
    imageSrc: "/assets/images/product/pp-tisu-hijau.png",
    nama: "PP Tisu Hijau",
    mesh: "60 mesh",
    warna: "Hijau Mint",
    aplikasi: "Campuran Material",
  },
  {
    imageSrc: "/assets/images/product/rafia-roll.png",
    nama: "Rafia Roll",
    warna: "Abu-abu",
    aplikasi: "Tali Tampar & Tali Press",
    diameter: "70 - 80 cm",
    berat: "45 - 70 kg",
  },
];
