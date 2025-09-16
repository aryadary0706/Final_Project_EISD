"use client";

import Header from "@/app/components/header";
import Promobanner from "@/app/components/promobanner";
import DoctorList from "@/app/components/DoctorList";
import FaskesList from "@/app/components/faskesList";
import ScheduleMeet from "@/app/components/Schedulelist";
import * as React from "react";

export default function Beranda() {
  return (
    <div className="flex flex-row">
      {/* Kolom utama */}
      <div className="flex-1 flex flex-col">
        <Header />

        {/* Konten utama */}
        <main className="flex-1 mt-4 space-y-8 px-6">
          <section>
            <Promobanner/>
          </section>  
          <section>
            <div className="block lg:hidden w-full">
                <ScheduleMeet/>
            </div>
          </section>
          <section>
            <h2 className="text-[16px] mb-4 text-lg">
              Fasilitas Kesehatan Terdekat
            </h2>
            <FaskesList />
          </section>
          <section>
            <div>
              <h2 className="text-[16px] mb-4 text-lg"> 
                Dokter Pilihan Pasien
              </h2>
              <DoctorList />
            </div>
            
          </section>
        </main>
      </div>

      {/* Kolom kanan (optional) */}
      <div className="flex-1 hidden lg:flex">
          <ScheduleMeet/>
      </div>
    </div>
  );
}
