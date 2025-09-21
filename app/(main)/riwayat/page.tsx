"use client"

import React from "react";
import Header from "@/app/components/header";
import ScheduleMeet from "@/app/components/Schedulelist";
import { Calendar, Clock, Hospital } from "lucide-react";
import { Separator } from "@radix-ui/react-separator";

const mockAppointments = [
  {
    id: 1,
    href: "#",
    specialty: "Dokter Umum",
    doctor: "dr. Clara Wulandari, M.Ked",
    status: "selesai",
    facility: "RS Medic Center - Bandung",
    date: new Date(2025, 7, 30), // 30 Agustus 2025
    time: "13:00 WIB - 13:15 WIB",
  },
  {
    id: 2,
    href: "#",
    specialty: "Dokter Umum",
    doctor: "dr. Clara Wulandari, M.Ked",
    status: "dibatalkan",
    facility: "RS Medic Center - Bandung",
    date: new Date(2025, 7, 30),
    time: "09:15 WIB - 09:30 WIB",
  },
  {
    id: 3,
    href: "#",
    specialty: "Spesialis Penyakit Dalam",
    doctor: "dr. Andini Pratama, Sp.D",
    status: "dibatalkan",
    facility: "RS Medic Center - Bandung",
    date: new Date(2025, 6, 3),
    time: "18:15 - 19:00 WIB",
  },
  {
    id: 4,
    href: "#",
    specialty: "Psikiater",
    doctor: "dr. Aditya Pratama, Sp.KJ",
    status: "selesai",
    facility: "RS Medic Center - Bandung",
    date: new Date(2025, 6, 26),
    time: "13:00 WIB - 13:15 WIB",
  },
];

type Appointment = {
  id: number;
  href: string;
  specialty: string;
  doctor: string;
  status: "selesai" | "dibatalkan";
  facility: string;
  date: Date;
  time: string;
};

export default function RiwayatPage() {
  const formatDate = (date: Date) => {
    return date.toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <div className="flex flex-row w-full">
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 mt-4 space-y-4 px-6 w-full">
          <h1 className="text-base font-medium">Riwayat Jadwal Temu</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {mockAppointments.map((appt) => (
              <div
                key={appt.id}
                className="border rounded-xl p-4 shadow-sm bg-white flex flex-col space-y-2"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-blue-600">{appt.specialty}</p>
                    <p className="text-xs text-gray-500">{appt.facility}</p>
                  </div>
                  <span
                    className={`text-xs px-3 py-1 rounded-full font-medium ${
                      appt.status === "selesai"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {appt.status === "selesai" ? "Selesai" : "Dibatalkan"}
                  </span>
                </div>

                <p className="text-sm font-medium">{appt.doctor}</p>

                <div className="flex items-center text-xs text-gray-500 space-x-4">
                  <div className="flex items-center space-x-1">
                    <Calendar size={14} />
                    <br/>
                    <span>{formatDate(appt.date)}</span>
                  </div>
                  <Separator/>
                  <div className="flex items-center space-x-1">
                    <Clock size={14} />
                    <br/>
                    <span>{appt.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
      <div className="hidden lg:flex w-[380px] shrink-0">
        <ScheduleMeet />
      </div>
    </div>
  );
}
