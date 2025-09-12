"use client";

import Header from "@/app/components/header";
import Promobanner from "@/app/components/promobanner";
import DoctorList from "@/app/components/DoctorList";
import FaskesList from "@/app/components/faskesList";
import ScheduleMeet from "@/app/components/jadwaltemu";

export default function Beranda() {
  return (
    <div className="flex flex-1">
      {/* Kolom utama */}
      <div className="flex-1 flex flex-col px-6 py-4 overflow-y-auto">
        {/* Header khusus halaman ini */}
        <Header />

        {/* Konten utama */}
        <main className="flex-1 mt-4 space-y-8">
          <section>
            <Promobanner />
          </section>

          <section>
            <h2 className="font-[500] mb-4 text-lg">
              Fasilitas Kesehatan Terdekat
            </h2>
            <FaskesList />
          </section>

          <section>
            <h2 className="font-[500] mb-4 text-lg">
              Dokter Pilihan Pasien
            </h2>
            <DoctorList />
          </section>
        </main>
      </div>

      {/* Kolom kanan (optional) */}
      <div className="pl-4">
        <ScheduleMeet />
      </div>
    </div>
  );
}
