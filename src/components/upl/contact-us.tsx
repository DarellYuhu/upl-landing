import { Input } from "@/components/ui/input";
import { sendContact } from "@/send-contact";
import { Mail, Phone } from "lucide-react";

export const ContactUs = () => {
  return (
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
        <p className="text-xl font-bold">Hubungi Kami</p>
      </div>
      <form action={sendContact} className="space-y-2 w-2/4 text-black">
        <Input
          name="nama"
          className="bg-white"
          type="text"
          placeholder="Nama"
          required
        />
        <Input
          name="email"
          className="bg-white"
          type="email"
          placeholder="Email"
          required
        />
        <Input
          name="namaPerusahaan"
          className="bg-white"
          type="text"
          placeholder="Perusahaan"
        />
        <button
          className="bg-[#0070bf] px-3 rounded-full text-white"
          type="submit"
        >
          Kirim
        </button>
      </form>
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
  );
};
