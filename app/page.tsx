"use client";

import Promobanner from "@/components/app-components/promobanner";
import JadwalTemu from "@/components/app-components/jadwaltemu";
import DoctorList from '@/components/app-components/DoctorList';
import FaskesList from '@/components/app-components/faskesList';
import Header from '@/components/app-components/header';

export default function Home() {
  return (
    <div className="flex min-h-0">
      {/* Kolom Tengah: Konten Utama */}
      <div className="flex-1 min-w-0 space-y-8  overflow-y-auto">
        <Header />
        <section>
        <Promobanner />
        </section>
        <section>
          <h2 className="font-semibold mb-4 text-lg">Fasilitas Kesehatan Terdekat</h2>
          <FaskesList />
        </section>
        <section>
          <h2 className="font-semibold mb-4 text-lg">Dokter Pilihan Pasien</h2>
          <DoctorList />
        </section>
      </div>

      {/* Kolom Kanan: Jadwal Temu */}
      <JadwalTemu />
    </div>
  );
}
