"use client";

import { useState } from "react";
import Image from "next/image";
import Sidebar from "./components/sidebar/page";
import Header from "./components/header/page";
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
];

const mockDoctors = [
  {
    id: 1,
    name: "dr. Arief Nugroho, Sp.JP",
    specialty: "Spesialis Jantung dan Pembuluh Darah",
    rating: 5.0,
    totalPatients: 450,
    image: "/doctor1.jpg",
  },
  {
    id: 2,
    name: "dr. Ratna Dewi",
    specialty: "Dokter Umum",
    rating: 4.9,
    totalPatients: 450,
    image: "/doctor2.jpg",
  },
  {
    id: 3,
    name: "dr. Andini Pratama, Sp.PD",
    specialty: "Spesialis Penyakit Dalam",
    rating: 5.0,
    totalPatients: 450,
    image: "/doctor3.jpg",
  },
];

const mockAppointments = [
  {
    id: 1,
    specialty: "Psikiater",
    facility: "RS Medic Center - Bandung",
    queue: 10,
    date: new Date(2025, 7, 26),
    time: "13:00 WIB",
  },
  {
    id: 2,
    specialty: "Psikiater",
    facility: "RS Medic Center - Bandung",
    queue: 2,
    date: new Date(2025, 8, 2),
    time: "13:00 WIB",
  },
];

export default function Home() {
  

  return (
    <div className="min-h-screen flex bg-gray-50 text-gray-800">
      
    <Sidebar/>

      {/* Main Content */}
      <main className="flex-1 px-10 pt-8 pb-10 space-y-8 overflow-auto">
      <Header/>
        {/* Promo Banner */}
        <section className="relative rounded-lg overflow-hidden bg-gradient-to-r from-blue-400 to-blue-200 text-white p-6 flex items-center space-x-8 shadow">
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-2">PROMO SPESIAL</h3>
            <button className="bg-white text-blue-600 py-1 px-4 rounded-md font-semibold shadow">Book Sekarang</button>
          </div>
          <div className="flex-1 text-right">
            <h3 className="text-2xl font-semibold mb-2">DISKON 30%</h3>
            <p>Dapatkan diskon untuk pengguna baru <span className="font-bold">mediQ</span></p>
          </div>
          <Image
            src="/doctor-promo.png"
            alt="doctor promo"
            width={150}
            height={180}
            className="rounded-lg"
            priority
          />
          <div className="absolute top-2 left-2 p-1 bg-black bg-opacity-40 rounded">
            <svg width="20" height="20" fill="white" xmlns="http://www.w3.org/2000/svg">
              <circle cx="10" cy="10" r="10" />
            </svg>
          </div>
        </section>

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
          <div className="flex space-x-6 overflow-x-auto pb-2">
            {mockDoctors.map((doctor) => (
              <div
                key={doctor.id}
                className="bg-white rounded-xl p-6 min-w-[220px] shadow flex flex-col items-center space-y-3"
              >
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  width={120}
                  height={120}
                  className="rounded-lg"
                  priority
                />
                <h3 className="font-semibold text-center">{doctor.name}</h3>
                <p className="text-gray-500 text-sm text-center">{doctor.specialty}</p>
                <div className="flex items-center space-x-2 text-yellow-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927C9.552 1.697 11.448 1.697 11.951 2.927l1.25 3.794a1 1 0 0 0 .95.69h3.983c1.238 0 1.754 1.582.753 2.25l-3.224 2.33a1 1 0 0 0-.364 1.118l1.25 3.794c.503 1.23-1.023 2.238-2.069 1.491l-3.224-2.33a1 1 0 0 0-1.176 0l-3.224 2.33c-1.046.747-2.572-.261-2.069-1.49l1.25-3.794a1 1 0 0 0-.364-1.118l-3.224-2.33c-1-.668-.485-2.25.753-2.25h3.983a1 1 0 0 0 .95-.69l1.25-3.793z" />
                  </svg>
                  <span>{doctor.rating}</span>
                  <span className="text-gray-400">|</span>
                  <span className="text-gray-600 text-sm">{doctor.totalPatients}+ Total Pasien</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Sidebar Jadwal Temu */}
      
    </div>
  );
}
