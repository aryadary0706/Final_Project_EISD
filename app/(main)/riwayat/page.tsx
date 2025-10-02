"use client"

import React, { useState } from "react";
import Header from "@/app/components/header";
import ScheduleMeet from "@/app/components/Schedulelist";
import AppointmentDetail from "@/app/components/AppointmentDetail";
import { Calendar, Clock } from "lucide-react";
import { Separator } from "@radix-ui/react-separator";
import mockSchedule from "@/data/mockAppointments.json";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

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

export default function RiwayatPage() {
  const [selectedAppointment, setSelectedAppointment] = useState<Appointment | null>(null);
  return (
    <div className="flex flex-row w-full">
      <div className="flex-1 flex flex-col py-2">
        <Header />
        <main className="flex-1 mt-4 space-y-4 px-6 w-full">
          <h1 className="text-base font-medium">Riwayat Jadwal Temu</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {mockSchedule.map((appt: Appointment) => (
              <div
                key={appt.id}
                onClick={() => setSelectedAppointment(appt)}  // klik card → buka detail
                className={`border rounded-xl p-4 shadow-sm bg-white flex flex-col space-y-2 cursor-pointer hover:shadow-md ${
                  selectedAppointment?.id === appt.id ? "ring-2 ring-blue-500" : ""
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-blue-600">{appt.doctor.specialty}</p>
                    <p className="text-xs text-gray-500">{appt.facility}</p>
                  </div>
                  <span
                    className={clsx("text-xs px-3 py-1 rounded-full font-medium", 
                      appt.status === "Selesai" && "bg-green-100 text-green-600",
                      appt.status === "Dibatalkan" && "bg-red-100 text-red-600",
                      appt.status === "Menunggu" && "bg-blue-100 text-blue-600",
                    )}
                  >
                    {appt.status === "Selesai" && "Selesai"}
                    {appt.status === "Dibatalkan" && "Dibatalkan"}
                    {appt.status === "Menunggu" && "Menunggu"}
                  </span>
                </div>

                <p className="text-sm font-medium">{appt.doctor.name}</p>

                <div className="flex items-center text-xs text-gray-500 space-x-4">
                  <div className="flex items-center space-x-1">
                    <Calendar size={14} />
                    <span>{appt.date}</span>
                  </div>
                  <Separator />
                  <div className="flex items-center space-x-1">
                    <Clock size={14} />
                    <span>{appt.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

      {/* Aside untuk Appointment Detail */}
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
