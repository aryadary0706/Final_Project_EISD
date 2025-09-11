"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search, Bell } from "lucide-react";
import { useUserStore } from "@/stores/userStore";

export default function Header() {
  const [search, setSearch] = useState("");
  const user = useUserStore((state) => state.user);

  return (
    <header className="flex items-center w-full py-6 px-0">
      {/* Bagian Kiri: Profile & Greeting */}
      <div className="flex items-center space-x-4 flex-shrink-0">
        <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
          <span className="text-lg font-semibold text-gray-600">N</span>
        </div>
        <div>
          <p className="font-semibold text-lg">Halo, {user?.nama || "Tamu"}</p>
          <p className="text-gray-500 text-sm">Bagaimana kabarmu?</p>
        </div>
      </div>

      {/* Spacer */}
      <div className="flex-1"></div>

      {/* Search Bar */}
      <div className="relative flex items-center flex-1 max-w-2xl mr-4">
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
          <Search className="w-5 h-5 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Cari dokter, fasilitas kesehatan..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="h-12 w-full py-3 pl-12 pr-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
        />
      </div>

      {/* Slot untuk komponen kanan (opsional, bisa button, avatar, dll) */}
      <div className="flex items-center space-x-3">
        <Button
          variant="outline"
          size="icon"
          className="rounded-lg w-12 h-12 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 flex-shrink-0"
        >
          <Bell className="w-5 h-5" />
        </Button>
        
      </div>
    </header>
  );
}
