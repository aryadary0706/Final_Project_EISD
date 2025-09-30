"use client";

import Header from "@/app/components/header";
import Promobanner from "@/app/components/promobanner";
import DoctorList from "@/app/components/DoctorList";
import FaskesList from "@/app/components/faskesList";
import ScheduleMeet from "@/app/components/Schedulelist";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import AppointmentDetail from "@/app/components/AppointmentDetail";
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
      <div className="flex flex-row w-full">
      {/* Kolom utama */}
        <div className="flex flex-col py-2">
          <Header />
          {/* Konten utama */}
          <main className="flex-1 mt-4 space-y-4 px-6 max-w-5xl">
            <section className="hidden md:flex items-center w-full">
              <Promobanner/>
            </section>  
            <section>
              <div className="block xl:hidden w-full">
                  <ScheduleMeet/>
              </div>
            </section>
            <section>
              <h2 className="text-[14px] text-lg">
                Fasilitas Kesehatan Terdekat
              </h2>
              <ScrollArea className="flex w-full sm:max-w-xl md:max-w-3xl lg:max-w-3xl xl:max-w-4xl whitespace-nowrap pb-3 mt-5">
                <FaskesList />
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </section>
            <section>
                <h2 className="text-[14px] text-lg"> 
                  Dokter Pilihan Pasien
                </h2>
                <ScrollArea className="flex w-full sm:max-w-xl md:max-w-3xl lg:max-w-3xl xl:max-w-4xl whitespace-nowrap pb-3 mt-5">
                  <DoctorList />
                <ScrollBar orientation="horizontal" />
                </ScrollArea>   
            </section>
          </main>
        </div>

      {/* Kolom kanan (optional) */}
      <div className="hidden lg:flex w-[380px] shrink-0 sticky top-0 h-screen">
          {selectedAppointment ? (
            <AppointmentDetail
              appointment={selectedAppointment}
              onClose={() => setSelectedAppointment(null)}
            />
          ) : (
            <div className="flex items-center justify-center w-full text-black text-sm">
              <ScheduleMeet/>
            </div>
          )}
      </div>
    </div>
    );
}
