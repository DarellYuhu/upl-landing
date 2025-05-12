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

export const LinimasaCarousel = () => {
  return (
    <Carousel plugins={[Autoplay({ delay: 5000 })]} opts={{ loop: true }}>
      <CarouselContent className="h-60">
        {data.map((item, idx) => (
          <CarouselItem key={idx}>
            <Image
              src={item.uri}
              alt={`image-${idx}`}
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-5" />
      <CarouselNext className="right-5" />
    </Carousel>
  );
};

const data = [
  {
    uri: "/assets/images/image-1.png",
  },
  {
    uri: "/assets/images/image-2.png",
  },
  {
    uri: "/assets/images/image-3.png",
  },
];
