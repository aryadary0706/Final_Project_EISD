"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import * as React from "react";
import Image from "next/image";

export default function Promobanner() {
  return (
    <div className="flex justify-center w-full">
      <Carousel
        className="w-full max-w-screen-xl"
        opts={{
          loop: true,
          align: "start",
        }}
      >
        <CarouselContent>
          {[1, 2, 3].map((item) => (
            <CarouselItem key={item} className="w-full">
              <div className="flex items-center justify-between rounded-md overflow-hidden bg-gradient-to-r from-blue-500 via-blue-200 to-blue-500 text-white px-4 sm:px-8 lg:px-12 h-[220px] sm:h-[240px] w-full">
                {/* Kiri */}
                <div className="flex flex-col gap-2 text-left max-w-[40%] pl-3">
                  <h3 className="text-base sm:text-lg lg:text-2xl font-bold">
                    PROMO SPESIAL
                  </h3>
                  <h2 className="text-xs sm:text-sm lg:text-lg font-medium border-2 px-4 py-1 rounded-md shadow-sm">
                    Beli Sekarang!
                  </h2>
                </div>

                {/* Tengah gambar */}
                <div className="flex-shrink-0 mx-2 sm:mx-6">
                  <Image
                    src="/beranda/dokterBanner.png"
                    alt="doctor"
                    width={160}
                    height={160}
                    className="w-[120px] sm:w-[160px] lg:w-[200px] h-auto object-contain"
                  />
                </div>

                {/* Kanan */}
                <div className="flex flex-col gap-1 max-w-[40%]">
                  <h3 className="text-base sm:text-lg lg:text-2xl font-bold">
                    Diskon 30%!
                  </h3>
                  <p className="text-xs sm:text-sm lg:text-base">
                    Dapatkan diskon untuk pengguna baru
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
