import { Product } from "@/types";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  item: Product;
};

export const ProductCard = ({ item }: Props) => {
  return (
    <div className="rounded-xl overflow-hidden">
      <Image
        src={item.images[0].url}
        alt={item.images[0].name}
        width={300}
        height={300}
        className="h-60 w-full object-cover bg-gray-300"
      />
      <h4 className="text-center font-bold text-xl bg-[#0070bf] text-white p-3">
        {item.name}
      </h4>
      <div className="p-4 bg-[#eaeaea]">
        <table>
          <tbody>
            {item.mesh && (
              <tr>
                <td>Mesh</td>
                <td className="p-1">:</td>
                <td>{item.mesh}</td>
              </tr>
            )}
            <tr>
              <td>Warna</td>
              <td className="p-1">:</td>
              <td>{item.color}</td>
            </tr>
            <tr>
              <td>Aplikasi</td>
              <td className="p-1">:</td>
              <td>{item.application_short}</td>
            </tr>
            {item.diameter && (
              <tr>
                <td>Diameter</td>
                <td className="p-1">:</td>
                <td>{item.diameter}</td>
              </tr>
            )}
            {item.weight && (
              <tr>
                <td>Berat</td>
                <td className="p-1">:</td>
                <td>{item.weight}</td>
              </tr>
            )}
          </tbody>
        </table>

        <Link href={`/produk/${item.documentId}`}>
          <div className="flex justify-self-end mt-6 text-sm text-[#0070bf] gap-2">
            Detail Produk <ArrowRight className="size-5" />
          </div>
        </Link>
      </div>
    </div>
  );
};
