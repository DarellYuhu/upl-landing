"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { Timeline } from "@/types";

export const LinimasaCarousel = ({ items }: { items: Timeline[] }) => {
  return (
    <Carousel plugins={[Autoplay({ delay: 5000 })]} opts={{ loop: true }}>
      <CarouselContent className="h-60">
        {items.map((item, idx) => (
          <CarouselItem key={idx} className="relative">
            <Image
              src={item.image.url}
              alt={`image-${idx}`}
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
            <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-xl text-center">
              {item.title}
            </p>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-5" />
      <CarouselNext className="right-5" />
    </Carousel>
  );
};
