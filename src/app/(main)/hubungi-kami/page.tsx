import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone } from "lucide-react";
import { IoSend } from "react-icons/io5";

export default function HubungiKamiPage() {
  return (
    <div className="bg-[#0070bf] text-white">
      <div
        style={{
          backgroundImage: "url('/assets/images/image-4.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="grow h-full space-y-4 p-5 py-10 text-white"
      >
        <div>
          <p className="italic text-sm">Info lebih lanjut?</p>
          <p className="text-xl font-bold">Hubungi Kami!</p>
        </div>
        <p className="text-2xl/7 font-semibold">
          Kami mengundang Anda untuk menyampaikan segala pertanyaan. Dengan
          senang hati, kami akan membantu Anda.
        </p>
        <div>
          <h1 className="font-bold text-xl">PT ULU PLASTIK LATERSIA</h1>
          <p className="text-sm">
            Dusun Klanting, Desa Suwayuwo, Kec. Sukorejo, Kab. Pasuruan, Jawa
            Timur, 67161, Indonesia
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

      <div className="p-10 space-y-5">
        <div className="w-full p-3 text-xl font-semibold text-[#0070bf] rounded-xl bg-white text-center">
          KONTAK KAMI
        </div>

        <div className="space-y-4 shadow-2xl p-4 rounded-xl">
          <Input placeholder="Nama" className="p-6 placeholder:text-white/60" />
          <Input
            placeholder="Nama Perusahaan"
            className="p-6 placeholder:text-white/60"
          />
          <Input
            placeholder="Nomor HP"
            className="p-6 placeholder:text-white/60"
          />
          <Textarea
            placeholder="Pesan"
            rows={5}
            className="p-6 placeholder:text-white/60"
          />

          <button className="bg-white text-[#0070bf] hover:text-[#0070bf]/60 px-3 rounded-md text-lg font-bold flex flex-row p-2 items-center gap-2 w-full justify-center">
            Kirim
            <IoSend className="size-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
