"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search, Bell } from "lucide-react";
import { useUserStore } from "@/stores/userStore";

export default function Header() {
  const [search, setSearch] = useState("");
  const user = useUserStore((state) => state.user);

  return (
    <header className="flex w-full items-center px-6 pt-8 pb-4">
      {/* Kiri: Avatar + Nama Pengguna */}
      <div className="mr-auto flex items-center gap-3">
        <div className="flex h-12 w-12 items-center rounded-full bg-gray-200 md:h-13 md:w-13" />
        <div className="hidden leading-tight sm:block">
          <p className="text-sm font-semibold md:text-md">
            Halo, {user?.name || "Pasien"}
          </p>
          <p className="text-xs text-gray-500 md:text-sm">
            Bagaimana kabarmu?
          </p>
        </div>
      </div>

      {/* Kanan: Search Bar + Bell */}
      <div className="flex items-center gap-2 justify-end min-w-0">
        {/* Search Bar */}
        <div className="relative min-w-0 w-32 sm:w-48 md:w-64 lg:w-80">
          <input
            type="text"
            placeholder="Cari dokter, fasilitas kesehatan..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="h-10 w-full rounded-lg border border-gray-300 bg-white 
                       px-4 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 
                       focus:ring-blue-400 md:h-12 md:text-base"
          />
          <div className="absolute left-3 top-1/2 -translate-y-1/2 transform">
            <Search className="h-4 w-4 text-gray-400 md:h-5 md:w-5" />
          </div>
        </div>

        {/* Bell Button */}
        <Button
          variant="outline"
          size="icon"
          className="flex-shrink-0 h-9 w-9 rounded-lg border border-gray-300 
                     focus:outline-none focus:ring-2 focus:ring-blue-400 
                     md:h-10 md:w-10 lg:h-12 lg:w-12"
        >
          <Bell className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6" />
        </Button>
      </div>
    </header>
  );
}
