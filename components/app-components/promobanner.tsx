import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import * as React from "react";

export default function Promobanner() {
  return (
    <div className="flex flex-col items-center">
      <Carousel
        className="relative rounded-[12px] overflow-hidden bg-gradient-to-r from-blue-600 to-blue-400 text-white p-6 h-[207px] w-full"
        opts={{ loop: true }}
      >
        <CarouselContent>
          <CarouselItem className="flex items-center justify-center">
            {/* Konten slide pertama */}
            <div>Slide 1</div>
          </CarouselItem>
          <CarouselItem className="flex items-center justify-center">
            {/* Konten slide kedua */}
            <div>Slide 2</div>
          </CarouselItem>
          <CarouselItem className="flex items-center justify-center">
            {/* Konten slide ketiga */}
            <div>Slide 3</div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
