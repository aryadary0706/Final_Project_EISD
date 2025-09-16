"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search, Bell } from "lucide-react";
import { useUserStore } from "@/stores/userStore";

export default function Header() {
  const [search, setSearch] = useState("");
  const user = useUserStore((state) => state.user);

  return (
    <header className="flex items-center mt-4 w-full max-w-[1040px] mx-0 py-4 px-4 gap-4">
      {/* Kiri: Avatar + Nama Pengguna */}
      <div className="flex items-center gap-3 flex-shrink-0">
        <div className="w-13 h-13 rounded-full bg-gray-200 flex items-center justify-center">
          <span className="text-base md:text-lg font-semibold text-gray-600">N</span>
        </div>
        <div className="leading-tight">
          <p className="font-semibold text-sm lg:text-md">Halo, {user?.nama || "Tamu"}</p>
          <p className="text-gray-500 text-sm lg:text-md">Bagaimana kabarmu?</p>
        </div>
      </div>

      {/* Kanan: Search Bar + Bell — Jarak fluid ke kanan */}
      <div className="flex items-center gap-2 min-w-0 ml-auto max-w-[calc(100%-320px)]">
        {/* Search Bar */}
        <div className="relative flex-1 min-w-0">
          <input
            type="text"
            placeholder="Cari dokter, fasilitas kesehatan..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="h-12 w-full py-2 px-4 pl-10 pr-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
          />
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
            <Search className="w-4 h-4 lg:w-5 lg:h-5 text-gray-400" />
          </div>
        </div>

        {/* Bell Button */}
        <Button
          variant="outline"
          size="icon"
          className="rounded-lg w-10 h-10 md:w-12 md:h-12 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 flex-shrink-0"
        >
          <Bell className="w-4 h-4 md:w-5 md:h-5" />
        </Button>
      </div>
    </header>
  );
}