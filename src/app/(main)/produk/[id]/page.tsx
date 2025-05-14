import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AxiosClient } from "@/lib/axios-client";
import { Product, StrapiRes } from "@/types";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

export default async function DetailProdukPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const { data: product } = await AxiosClient.get<StrapiRes<Product>>(
    "/api/products/" + id,
    { params: { populate: ["images"] } }
  );
  return (
    <div className="bg-[#0070bf] text-white">
      <Carousel>
        <CarouselContent>
          {product.data.images.map((item, idx) => (
            <CarouselItem key={idx}>
              <Image
                src={item.url}
                alt={item.name}
                width={item.width}
                height={item.height}
                className="w-full h-[280px] object-cover"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-5" />
        <CarouselNext className="right-5" />
      </Carousel>

      <div className="p-3">
        <h1 className="text-2xl font-bold">{product.data.name}</h1>

        <p className="mt-5">{product.data.description}</p>

        <div className="markdown">
          <h4 className="text-lg font-semibold">Keunggulan Utama</h4>
          <ReactMarkdown>{product.data.main_adventage}</ReactMarkdown>
        </div>

        <div className="markdown">
          <h4 className="text-lg font-semibold">Aplikasi</h4>
          <ReactMarkdown>{product.data.application_detail}</ReactMarkdown>
        </div>

        <div className="markdown">
          <h4 className="text-lg font-semibold">Manfaat</h4>
          <ReactMarkdown>{product.data.benefit}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
