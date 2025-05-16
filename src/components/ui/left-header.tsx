"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const LeftHeader = () => {
  const pathname = usePathname();

  switch (true) {
    case pathname.includes("/produk/"):
      return (
        <div className="text-[#0070bf] font-bold">
          Detail <br />
          Produk
        </div>
      );

    default:
      return (
        <Link href={"/"}>
          <Image
            src={"/assets/images/upl-logo-color.png"}
            alt="upl_logo"
            width={70}
            height={70}
          />
        </Link>
      );
      break;
  }
};
