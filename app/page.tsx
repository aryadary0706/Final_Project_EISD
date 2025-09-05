"use client";

import Image from "next/image";
import Sidebar from "./components/sidebar/page";
import Header from "./components/header/page";
import ScheduleMeet from "./components/jadwaltemu/page";
import Promobanner from "./components/promobanner/page";

// Asset foto dokter
import doctor1 from "@/public/doctor1.png";
import doctor2 from "@/public/doctor2.png";
import doctor3 from "@/public/doctor3.png";


const mockFacilities = [
  {
    id: 1,
    type: "Rumah Sakit",
    name: "RS Medic Center",
    city: "Bandung",
  },
  {
    id: 2,
    type: "Klinik",
    name: "Sehat Harmoni",
    city: "Bandung",
  },
  {
    id: 3,
    type: "Puskesmas",
    name: "Suka Maju",
    city: "Bandung",
  },
  {
    id: 4,
    type: "Klinik",
    name: "Harmony Dental",
    city: "Bandung",
  },
  {
    id: 5,
    type: "Rumah Sakit",
    name: "RS Mitra Keluarga",
    city: "Bandung",
  }
];

const mockDoctors = [
  {
    id: 1,
    name: "dr. Arief Nugroho, Sp.JP",
    specialty: "Spesialis Jantung dan Pembuluh Darah",
    rating: 5.0,
    totalPatients: 450,
    image: doctor1,
  },
  {
    id: 2,
    name: "dr. Ratna Dewi",
    specialty: "Dokter Umum",
    rating: 4.9,
    totalPatients: 450,
    image: doctor2,
  },
  {
    id: 3,
    name: "dr. Andini Pratama, Sp.PD",
    specialty: "Spesialis Penyakit Dalam",
    rating: 5.0,
    totalPatients: 450,
    image: doctor3,
  },
];

const mockAppointments = [
  {
    id: 1,
    specialty: "Psikiater",
    facility: "RS Medic Center - Bandung",
    queue: 2,
    date: new Date(2025, 7, 26),
    time: "13:00 WIB",
  },
  {
    id: 2,
    specialty: "Psikiater",
    facility: "RS Medic Center - Bandung",
    queue: 10,
    date: new Date(2025, 8, 2),
    time: "13:00 WIB",
  },
];


export default function Home() {
  

  return (
    <div className="min-h-screen flex bg-gray-50 text-gray-800">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 px-10 pt-8 pb-10 space-y-8 overflow-auto">
      <Header/>

        {/* Promo Banner (Carousel)*/}
        <Promobanner/>

        {/* Fasilitas Kesehatan Terdekat */}
        <section>
          <h2 className="font-semibold mb-4 text-lg">Fasilitas Kesehatan Terdekat</h2>
          <div className="flex space-x-4 overflow-x-auto pb-2">
            {mockFacilities.map((facility) => (
              <div
                key={facility.id}
                className="bg-white rounded-xl p-4 min-w-[180px] shadow flex flex-col space-y-3"
              >
                <span className="text-xs font-semibold text-blue-400 bg-blue-100 rounded px-2 py-1 inline-block">
                  {facility.type}
                </span>
                <h3 className="font-semibold">{facility.name}</h3>
                <p className="text-gray-500">{facility.city}</p>
                <button className="mt-auto w-full text-blue-500 border border-blue-500 rounded-md py-1 flex justify-center items-center space-x-1 hover:bg-blue-50">
                  <span>Lihat</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Dokter Pilihan Pasien */}
        <section>
          <h2 className="font-semibold mb-4 text-lg">Dokter Pilihan Pasien</h2>
          <div className="flex space-x-4 overflow-x-auto pb-2">
            {mockDoctors.map((doctor) => (
              <div
                key={doctor.id}
                className="flex w-60 flex-col items-start bg-white rounded-[8px] shadow-sm border"
              >
                {/* Image dan Nama */}
                <div className="flex flex-col items-center justify-center">
                  <div className="relative w-60 h-60 overflow-hidden rounded-t-md bg-blue-200 align-left">
                    <Image
                      src={doctor.image}
                      alt={doctor.name}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="rounded-xl object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-center mt-2">{doctor.name}</h3>
                </div>
                {/* Specialty */}
                <p className="text-gray-500 text-sm text-left mb-2">{doctor.specialty}</p>

                {/* Rating */}
                <div className="flex items-center justify-center space-x-1">
                  <span className="text-sm font-semibold">{doctor.rating}</span>
                </div>
                {/* Total Patients */}
                <div className="text-center text-sm text-gray-600 mt-1">
                  <span>{doctor.totalPatients}+ Total Pasien</span>
            </div>
              </div>
            ))}
          </div>
        </section>

        {/* Jadwal Temu */}
      </main>
      <ScheduleMeet mockAppointments={mockAppointments} />
    </div>
  );
}
