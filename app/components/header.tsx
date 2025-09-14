"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search, Bell } from "lucide-react";
import { useUserStore } from "@/stores/userStore";

export default function Header() {
  const [search, setSearch] = useState("");
  const user = useUserStore((state) => state.user);

  return (
    <header className="flex items-center w-full max-w-7xl mx-auto py-4 px-2 md:px-4 lg:px-6">
      {/* kiri */}
      <div className="flex items-center gap-3 md:gap-4 flex-shrink-0">
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-200 flex items-center justify-center">
          <span className="text-base md:text-lg font-semibold text-gray-600">N</span>
        </div>
        <div className="leading-tight">
          <p className="font-semibold text-sm md:text-lg">Halo, {user?.nama || "Tamu"}</p>
          <p className="text-gray-500 text-xs md:text-sm">Bagaimana kabarmu?</p>
        </div>
      </div>

      {/* kanan */}
      <div className="flex items-center justify-end gap-2 md:gap-3 flex-1 ml-4">
        {/* search bar */}
        <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
          <input
            type="text"
            placeholder="Cari dokter, fasilitas kesehatan..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="h-10 md:h-12 w-full py-2 md:py-3 pl-10 pr-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
          />
          <div className="absolute left-3 md:left-4 top-1/2 transform -translate-y-1/2">
            <Search className="w-4 h-4 md:w-5 md:h-5 text-gray-400" />
          </div>
        </div>

        {/* bell button */}
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
