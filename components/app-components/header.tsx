"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [search, setSearch] = useState("");

  return (
    <header className="flex items-center w-full py-4 px-4">
      {/* Bagian Kiri: Profile & Greeting */}
      <div className="flex items-center space-x-4 flex-shrink-0">
        <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
          <span className="text-lg font-semibold text-gray-600">N</span>
        </div>
        <div>
          <p className="font-semibold text-lg">Halo, Naswa</p>
          <p className="text-gray-500 text-sm">Bagaimana kabarmu?</p>
        </div>
      </div>

      {/* Spacer untuk mendorong elemen berikutnya ke kanan */}
      <div className="flex-1"></div>

      {/* Bagian Tengah (sekarang di kanan): Search Bar */}
      <div className="relative flex items-center mr-4">
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <input
          type="text"
          placeholder="Cari dokter, fasilitas kesehatan..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-80 h-12 py-3 pl-12 pr-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
        />
      </div>

      {/* Bagian Kanan: Notification Button */}
      <Button
        variant="outline"
        size="icon"
        className="rounded-lg w-12 h-12 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 flex-shrink-0"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 17h5l-5 5v-5zM4.5 19.5a1.5 1.5 0 01-1.5-1.5V6a1.5 1.5 0 011.5-1.5h15A1.5 1.5 0 0121 6v12a1.5 1.5 0 01-1.5 1.5h-15z"
          />
        </svg>
      </Button>
    </header>

  );
}