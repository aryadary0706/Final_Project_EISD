"use client";

import Header from "@/app/components/header";
import Promobanner from "@/app/components/promobanner";
import DoctorList from "@/app/components/DoctorList";
import FaskesList from "@/app/components/faskesList";
import ScheduleMeet from "@/app/components/Schedulelist";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import * as React from "react";

export default function Beranda() {
  return (
    <div className="flex flex-1">
      {/* Kolom utama */}
      <div className="flex-1 flex flex-col">
        <Header />

        {/* Konten utama */}
        <main className="flex-1 mt-4 space-y-8 px-6">
          <section>
            <div className="w-full max-w-7xl mx-auto">
                  <Carousel
                    className="w-full"
                    opts={{ 
                      loop: true,
                      align: "start",
                    }}
                  >
                    <CarouselContent className="-ml-2 lg:-ml-4">
                      <CarouselItem className="pl-2 lg:pl-4">
                        <div className="flex items-center justify-center rounded-[12px] overflow-hidden bg-gradient-to-r from-blue-600 to-blue-400 text-white p-6 h-[210px] w-full">
                          <div className="text-center">
                            <h3 className="text-2xl font-bold mb-2">Promo Khusus!</h3>
                            <p className="text-lg">Konsultasi dokter gratis untuk 100 pasien pertama</p>
                          </div>
                        </div>
                      </CarouselItem>
                      <CarouselItem className="pl-2 md:pl-4">
                        <div className="flex items-center justify-center rounded-[12px] overflow-hidden bg-gradient-to-r from-green-600 to-green-400 text-white p-6 h-[207px] w-full">
                          <div className="text-center">
                            <h3 className="text-2xl font-bold mb-2">Layanan 24/7</h3>
                            <p className="text-lg">Akses layanan kesehatan kapan saja, di mana saja</p>
                          </div>
                        </div>
                      </CarouselItem>
                      <CarouselItem className="pl-2 md:pl-4">
                        <div className="flex items-center justify-center rounded-[12px] overflow-hidden bg-gradient-to-r from-purple-600 to-purple-400 text-white p-6 h-[207px] w-full">
                          <div className="text-center">
                            <h3 className="text-2xl font-bold mb-2">Dokter Terpercaya</h3>
                            <p className="text-lg">Tim dokter berpengalaman siap melayani Anda</p>
                          </div>
                        </div>
                      </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious className="left-4" />
                    <CarouselNext className="right-4" />
                  </Carousel>
                </div>
          </section>  
          <section className="w-full">
            <div className="block lg:hidden w-full">
                <ScheduleMeet/>
            </div>
          </section>
          <section>
            <h2 className="font-[500] mb-4 text-lg">
              Fasilitas Kesehatan Terdekat
            </h2>
            <FaskesList />
          </section>
          <section>
            <div>
              <h2 className="font-[500] mb-4 text-lg"> Dokter Pilihan Pasien</h2>
              <DoctorList />
            </div>
            
          </section>
        </main>
      </div>

      {/* Kolom kanan (optional) */}
      <div className="hidden lg:flex lg:w-[420px]">
          <ScheduleMeet/>
      </div>
    </div>
  );
}
