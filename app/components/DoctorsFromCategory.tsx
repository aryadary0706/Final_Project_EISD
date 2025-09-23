"use client";

import Image from "next/image";
import { useState } from "react";
import { Plus, X, UserCircle2 } from "lucide-react";
import mockDoctors from "@/data/mockDoctors.json";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export default function DoctorListBySpeciality({
  speciality,
  onClose, // ✅ tambahan
}: {
  speciality?: string; // opsional
  onClose: () => void; // ✅ tambahan
}) {
  const [showDetail, setShowDetail] = useState(false);

  // Kalau speciality ada → filter, kalau tidak → tampilkan semua
  const filteredDoctors = speciality
    ? mockDoctors.filter(
        (doc) => doc.label.toLowerCase() === speciality.toLowerCase()
      )
    : mockDoctors;

  return (
    <div className="py-4 px-6 border-2">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-blue-500 font-bold text-2xl">Poli</h2>
        <button className="p-2" onClick={onClose}>
          <X size={20} />
        </button>
      </div>

      <h1 className="text-2xl font-bold">
        {speciality ? speciality : "Semua Spesialis"}
      </h1>
      <p className="text-sm text-gray-600 mt-1">Dokter Jaga Hari Ini</p>
      
      <ScrollArea className="h-[540px]">
      {/* Doctors */}
      <div className="mt-4 space-y-4">
        {filteredDoctors.map((doctor) => (
          <div
            key={doctor.id}
            className="bg-gradient-to-r from-blue-300 via-blue-200 to-blue-300 rounded-md border-2 p-4 flex flex-col items-center"
          >
            {doctor.image ? (
              <Image
                src={doctor.image}
                alt={doctor.name}
                width={100}
                height={100}
                className="rounded-lg object-cover"
              />
            ) : (
              <UserCircle2 size={80} className="text-gray-400" />
            )}
            <div className="bg-white w-full">
              <h3 className="text-lg font-bold mt-2">{doctor.name}</h3>
              <p className="text-sm text-blue-600 font-medium">
                {doctor.totalPatients}+ Total Pasien Terlayani
              </p>
              <p className="text-xs text-gray-500">{doctor.specialty}</p>
            </div>
          </div>
        ))}
      </div>
      <ScrollBar orientation="vertical"/>
      </ScrollArea>
      {/* Button Detail */}
      <button
        onClick={() => setShowDetail(true)}
        className="mt-4 w-full flex items-center justify-between px-4 py-3 rounded-xl border text-gray-500 hover:text-blue-600"
      >
        <span>Lihat detail</span>
        <Plus size={18} />
      </button>

      {showDetail && (
        <div className="mt-4 p-4 border rounded-xl bg-gray-50 text-sm text-gray-600">
          Detail info dokter{" "}
          {speciality ? speciality : "semua spesialis"} akan ditampilkan di sini...
        </div>
      )}
    </div>
  );
}
