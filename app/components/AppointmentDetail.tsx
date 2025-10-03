"use client";

import Image from "next/image";
import { X, Calendar, Clock, CircleX, CircleCheck } from "lucide-react";
import clsx from "clsx";
import { Separator } from "@radix-ui/react-context-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Scrollbar } from "@radix-ui/react-scroll-area";
import { format } from "date-fns";
import { Appointment } from "@/stores/AppointmentStore";

export default function AppointmentDetail({
  appointment,
  onClose,
}: {
  appointment: Appointment;
  onClose: () => void;
}) {
  const getDateKey = (date: Date) => format(date, "yyyy-MM-dd");
  return (
    <div className="pt-8 pb-4 bg-white border-l-1 shadow-md w-full min-h-screen max-h-fu;; relative">
      {/* Tombol Close */}
      <div className="my-6">
        <button
          onClick={onClose}
          className="absolute top-6 right-4 text-gray-500"
        >
          <X size={20} />
        </button>
      </div>

      {/* Header */}
      <div className="flex items-center justify-between px-7">
        <h2 className="text-md font-semibold">Riwayat Jadwal Temu</h2>

        <span
          className={clsx(
            "flex items-center gap-1 text-sm font-medium px-3 py-1 rounded-full",
            appointment.status === "Selesai" && "text-green-600 bg-green-100",
            appointment.status === "Dibatalkan" && "text-red-600 bg-red-100",
            appointment.status === "Menunggu" && "text-blue-600 bg-blue-100"
          )}
        >
          {appointment.status === "Selesai" && <CircleCheck size={14} />}
          {appointment.status === "Dibatalkan" && <CircleX size={14} />}
          {appointment.status === "Menunggu" && <Clock size={14} />}
          {appointment.status}
        </span>
      </div>

      <Separator className="my-2" />
      <ScrollArea className="h-[600px]">
        <div className="px-7">
          {/* Dokter */}
          <div className="flex flex-col items-center mt-4">
            {appointment.doctor.image && (
              <Image
                src={appointment.doctor.image}
                alt={appointment.doctor.name}
                width={80}
                height={80}
                className="rounded-full bg-blue-300"
              />
            )}
            <h3 className="mt-2 font-bold">{appointment.doctor.name}</h3>
            <p className="text-sm text-gray-500">
              {appointment.doctor.specialty}
            </p>
          </div>

          {/* Tanggal & Jam */}
          <div className="flex justify-around mt-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <Calendar size={16} />
              <span>{getDateKey(new Date(appointment.date))}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={16} />
              <span>{appointment.time}</span>
            </div>
          </div>

          {/* Data Pasien */}
          <div className="mt-6 space-y-4">
            <div>
              <h4 className="font-semibold">Data Pasien</h4>
              <p className="text-sm mt-1">{appointment.patient.name}</p>
            </div>
            <div>
              <h4 className="text-gray-500 text-sm">Gejala</h4>
              <p className="text-sm">{appointment.patient.symptom}</p>
            </div>
            {appointment.patient.allergy && (
              <div>
                <h4 className="text-gray-500 text-sm">Riwayat Alergi</h4>
                <p className="text-sm">{appointment.patient.allergy}</p>
              </div>
            )}
          </div>

          {/* Hasil Diagnosis */}
          <div className="mt-6">
            <h4 className="font-semibold">Hasil Diagnosis</h4>
            <ul className="list-disc list-inside mt-2 text-sm text-gray-700 space-y-1">
              {appointment.diagnosis.physicalExam.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Diagnosis Sementara */}
          {appointment.diagnosis.temporary && (
            <div className="mt-4">
              <h4 className="text-gray-500 text-sm">Diagnosis Sementara</h4>
              <p className="text-sm">{appointment.diagnosis.temporary}</p>
            </div>
          )}

          {/* Rencana Penanganan */}
          {appointment.diagnosis.plan && (
            <div className="mt-4">
              <h4 className="text-gray-500 text-sm">Rencana Penanganan</h4>
              <p className="text-sm">{appointment.diagnosis.plan}</p>
            </div>
          )}
        </div>
        <Scrollbar className="hidden" />
      </ScrollArea>
    </div>
  );
}
