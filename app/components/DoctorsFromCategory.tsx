"use client";

import Image from "next/image";
import { useState } from "react";
import { Plus, X, UserCircle2 } from "lucide-react";
import mockDoctors from "@/data/mockDoctors.json";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Link from "next/link";

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
    <div className="py-4 px-6 border-2 bg-white">
      {/* Header */}
      <div className="flex items-start flex-col">
        <button className="py-3" onClick={onClose}>
          <X size={20} />
        </button>
      </div>

      <h2 className="text-blue-500 font-bold text-2xl">Poli</h2>
      <h1 className="text-2xl font-bold">
        {speciality ? speciality : "Semua Spesialis"}
      </h1>
      <p className="text-sm text-gray-600 mt-1">Dokter Jaga Hari Ini</p>
      
      <ScrollArea className="h-[500px]">
        {/* Doctors */}
          <div className="space-y-4">
            {filteredDoctors.map((doctor) => (
              <Link key={doctor.id} href={`search/doctor/${doctor.id}`}>
              <div
                key={doctor.id}
                className="mb-5 bg-gradient-to-r from-blue-100 via-blue-50 to-blue-100 border-1 flex flex-row-reverse pl-3"
                >
                {doctor.image ? (
                  <Image
                  src={doctor.image}
                  alt={doctor.name}
                  width={400}
                  height={400}
                  className="rounded-lg object-cover"
                  placeholder="blur"
                  blurDataURL="/images/placeholder.jpg" 
                  />
                ) : (
                  <UserCircle2 size={80} className="text-gray-400" />
                )}
                <div className="">
                  <h3 className="text-lg text-black opacity-80 font-bold my-5">{doctor.name}</h3>
                  <p className="text-sm text-blue-600 font-medium">
                    {doctor.totalPatients} Total Pasien Terlayani
                  </p>
                </div>
              </div>
              </Link>
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
