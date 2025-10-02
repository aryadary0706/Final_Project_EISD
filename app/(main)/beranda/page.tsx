"use client";

import Header from "@/app/components/header";
import Promobanner from "@/app/components/promobanner";
import DoctorList from "@/app/components/DoctorList";
import FaskesList from "@/app/components/faskesList";
import ScheduleMeet from "@/app/components/Schedulelist";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import AppointmentDetail from "@/app/components/AppointmentDetail";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

type Appointment = {
  id: number;
  doctor: {
    name: string;
    specialty: string;
    image?: string;
  };
  date: string;
  time: string;
  status: string;
  facility: string;
  patient: {
    name: string;
    symptom: string;
    allergy?: string;
  };
  diagnosis: {
    physicalExam: string[];
    temporary?: string;
    plan?: string;
  };
};

export default function Beranda() {
    const [selectedAppointment, setSelectedAppointment] = useState<Appointment | null>(null);
    return (
      <div className="flex flex-col lg:flex-row w-full">
  {/* Kolom utama */}
  <div className="flex flex-col flex-1 py-2">
    <Header />

    {/* Konten utama */}
    <main className="flex-1 mt-4 space-y-4 px-4 sm:px-6 max-w-full md:max-w-[780px] lg:max-w-[840px] xl:max-w-[900px] w-full mx-auto">
      {/* Promo Banner */}
      <section className="w-full">
        <Promobanner />
      </section>

      {/* Jadwal Meet (mobile only) */}
      <section className="block xl:hidden w-full">
        <ScheduleMeet />
      </section>

      {/* Faskes */}
      <section>
        <h2 className="text-lg font-bold">Fasilitas Kesehatan Terdekat</h2>
        <div className="mt-5 w-full">
          <ScrollArea className="flex w-full overflow-x-auto whitespace-nowrap pb-3">
            <FaskesList />
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      </section>

      {/* Dokter */}
      <section>
        <h2 className="text-lg font-bold">Dokter Pilihan Pasien</h2>
        <div className="mt-5 w-full">
          <ScrollArea className="flex w-full overflow-x-auto whitespace-nowrap pb-3">
            <DoctorList />
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      </section>
    </main>
  </div>

  {/* Kolom kanan (hanya di lg ke atas) */}
  <div className="hidden lg:flex w-[400px] shrink-0 relative top-0 h-screen overflow-hidden">
    <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full text-black text-sm">
      <ScheduleMeet/>
    </div>
    <AnimatePresence mode="wait">
      {selectedAppointment && (
        <motion.div
          key="appointment"
          initial={{ x: "100%", opacity: 0 }} // masuk dari kanan
          animate={{ x: 0, opacity: 1 }}        // geser ke posisi normal
          exit={{ x:"100%", opacity: 0 }}      // keluar geser ke kanan lagi
          transition={{ type: "spring", stiffness: 250, damping: 25, duration:0.3}}
          className="absolute top-0 left-0 w-full h-full"
        >
          <AppointmentDetail
          appointment={selectedAppointment}
          onClose={() => setSelectedAppointment(null)}
          />
        </motion.div>
      )}
    </AnimatePresence>
  </div>
</div>
    );
}
