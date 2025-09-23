"use client";

import Promobanner from "@/components/app-components/promobanner";
import JadwalTemu from "@/components/app-components/jadwaltemu";
import DoctorList from '@/components/app-components/DoctorList';
import FaskesList from '@/components/app-components/faskesList';
import Header from '@/components/app-components/header';
// import Sidebar from "@/components/app-components/sidebar";

export default function Beranda() {
  return (
    <div className="flex min-h-0">
      {/* <Sidebar/> */}
      {/* Kolom Tengah: Konten Utama */}
      <div className="flex-1 px-12 py-3 min-w-0 space-y-8  overflow-y-auto">
        <Header />
        <section>
        <Promobanner />
        </section>
        <section>
          <h2 className="font-[500] self-stretch mb-4 text-lg">Fasilitas Kesehatan Terdekat</h2>
          <FaskesList />
        </section>
        <section>
          <h2 className="font-[500] self-stretch mb-4 text-lg">Dokter Pilihan Pasien</h2>
          <DoctorList />
        </section>
      </div>

      {/* Kolom Kanan: Jadwal Temu */}
      <JadwalTemu />
    </div>
  );
}
