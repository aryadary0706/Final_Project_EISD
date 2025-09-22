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
    <div className="justify-center">
      <Carousel
        className="w-full"
        opts={{
          loop: true,
          align: "start",
        }}
      >
        <CarouselContent>
          <CarouselItem className="pl-2 md:pl-4 md:w-[30px] lg:w-[50px] xl:w-[120px]">
            <div className="flex justify-center rounded-md overflow-hidden bg-gradient-to-r from-blue-500 via-blue-200 to-blue-500 text-white px-12 h-[240px] w-full">
              <div className="items-end flex flex-row">
                <div className="mr-2 mb-23">
                  <h3 className="text-md md:text-sm lg:text-2xl font-bold mb-2">PROMO SPESIAL</h3>
                  <h2 className="text-sm md:text-sm lg:text-lg font-medium border-2 pl-9 py-1 shadow-sm rounded-md">Beli Sekarang!</h2>
                </div>
                <div className="justify-end mx-3"> 
                  <Image
                    src="/beranda/dokterBanner.png"
                    alt="doctor"
                    width={180}
                    height={180}
                  />
                </div>              
                <div className="flex flex-col ml-2 mb-23">
                  <h3 className="text-md md:text-sm lg:text-2xl font-bold mb-2">Diskon 30%!</h3>
                  <p className="text-xs md:text-sm lg:text-md">Dapatkan diskon untuk pengguna baru</p>
                </div>
              </div>
            </div>
          </CarouselItem>

          <CarouselItem className="pl-2 md:pl-4">
            <div className="flex justify-center rounded-md overflow-hidden bg-gradient-to-r from-blue-500 via-blue-200 to-blue-500 text-white px-12 h-[240px] w-full">
              <div className="items-end flex flex-row">
                <div className="mr-2 mb-23">
                  <h3 className="text-2xl font-bold mb-2">PROMO SPESIAL</h3>
                  <h2 className="text-lg font-medium border-2 pl-9 py-1 shadow-sm rounded-md">Beli Sekarang!</h2>
                </div>
                <div className="justify-end mx-3">
                  <Image
                    src="/beranda/dokterBanner.png"
                    alt="doctor"
                    width={180}
                    height={180}
                  />
                </div>              
                <div className="flex flex-col ml-2 mb-23">
                  <h3 className="text-2xl font-bold mb-2">Diskon 30%!</h3>
                  <p className="text-md">Dapatkan diskon untuk pengguna baru</p>
                </div>
              </div>
            </div>
          </CarouselItem>

          <CarouselItem className="pl-2 md:pl-4">
            <div className="flex justify-center rounded-md overflow-hidden bg-gradient-to-r from-blue-500 via-blue-200 to-blue-500 text-white px-12 h-[240px] w-full">
              <div className="items-end flex flex-row">
                <div className="mr-2 mb-23">
                  <h3 className="text-2xl font-bold mb-2">PROMO SPESIAL</h3>
                  <h2 className="text-lg font-medium border-2 pl-9 py-1 shadow-sm rounded-md">Beli Sekarang!</h2>
                </div>
                <div className="justify-end mx-3">
                  <Image
                    src="/beranda/dokterBanner.png"
                    alt="doctor"
                    width={180}
                    height={180}
                  />
                </div>              
                <div className="flex flex-col ml-2 mb-23">
                  <h3 className="text-2xl font-bold mb-2">Diskon 30%!</h3>
                  <p className="text-md">Dapatkan diskon untuk pengguna baru</p>
                </div>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>

        <CarouselPrevious className="w-5 h-5 left-2" />
        <CarouselNext className="w-5 h-5 right-2" />
      </Carousel>
    </div>
  );
}