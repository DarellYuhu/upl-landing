import { ContactUs } from "@/components/upl/contact-us";
import { InfiniteSlider } from "@/components/upl/infinite-slider";
import { LinimasaCarousel } from "@/components/upl/linimasa-carousel";
import Image from "next/image";
import { FaCircle } from "react-icons/fa";

export default function TentangPerusahaanPage() {
  return (
    <div>
      <div className="bg-[url('/assets/images/image-5.png')] bg-no-repeat text-center w-full bg-cover py-20 px-18 text-white  space-y-2">
        <h1>TENTANG KAMI</h1>
        <h3 className="text-2xl font-semibold">
          Mengenal kami secara lebih dekat.
        </h3>
      </div>

      <div className="text-justify flex flex-col items-center text-[#0070bf] space-y-6 p-7">
        <h2 className="font-bold">ULU PLASTIK LATERSIA</h2>
        <p>
          Mengawali sebagai badan usaha CV. Ulu Plastik, pada tahun 2014. kini
          berkembang pesat menjadi badan usaha yang bernama{" "}
          <span className="font-bold">PT. ULU PLASTIK LATERSIA</span> berdiri di
          Pandaan, Jawa Timur, Indonesia pada tahun 2022 dengan fokus melakukan
          daur ulang sampah plastik menjadi produk biji plastik dan tali rafia
          yang digunakan sebagai bahan baku produksi perusahaan manufaktur.
        </p>
        <p>
          Didukung oleh sistem manajemen yang profesional, research and
          development, serta mesin berteknologi tinggi dari Cina, kami mampu
          memproduksi biji plastik dan rafia yang berkualitas.
        </p>
        <p>
          Seiring berjalannya waktu kami terus berupaya untuk meningkatkan
          kualitas dan kuantitas produksi untuk memenuhi kebutuhan pelanggan.
          Selain itu kami juga terus bekerja sama dengan warga lokal setempat
          untuk memberikan dampak positif bagi lingkungan ekosistem maupun bagi
          ekonomi warga lokal setempat.
        </p>
        <p>
          Kami menekankan hubungan yang erat dan hangat antara perusahaan dengan
          para pegawai dan pekerja, menghasilkan perasaan saling memiliki dan
          kesatuan visi untuk berkembangnya perusahaan di masa depan.
        </p>
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
            <FaCircle />
            <p>Ulu Plastik Latersia</p>
          </div>
        ))}
      </InfiniteSlider>

      <div className="text-center p-7 space-y-8">
        <div className="bg-[#0070bf] text-white p-3 rounded-xl border-4 border-[#35e300]">
          <h3 className="font-bold">VISI</h3>
          <p>
            Menjadi perusahaan ramah lingkungan yang membawa dampak positif
            untuk lingkungan serta menjadi produsen biji plastik berkualitas
            tinggi yang mampu bersaing dipasar Internasional.
          </p>
        </div>
        <div className="bg-[#0070bf] text-white p-3 rounded-xl border-4 border-[#35e300]">
          <h3 className="font-bold">MISI</h3>
          <ul className="text-start list-disc pl-7">
            <li>
              Membantu pemerintah untuk meminimalisir pencemaran sampah plastik.
            </li>
            <li>
              Menjadi pelopor gerakan daur ulang sampah plastik di Indonesia
              untuk mengurangi resiko permasalahan lingkungan.
            </li>
            <li>
              Melakukan daur ulang sampah plastik menjadi produk biji plastik
              berkualitas tinggi sebagai bahan baku perusahaan manufaktur produk
              plastik.
            </li>
            <li>
              Meningkatan kualitas dan kuantitas produksi sesuai dengan
              kebutuhan pelanggan.
            </li>
          </ul>
        </div>
      </div>

      <div className="px-7">
        <div className="text-center text-2xl text-[#0070bf]">
          <h3>LINIMASA</h3>
          <h1 className="font-bold">ULU PLASTIK LATERSIA</h1>
        </div>
      </div>
      <LinimasaCarousel />

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
