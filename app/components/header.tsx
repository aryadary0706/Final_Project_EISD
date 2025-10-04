"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search, Bell, FileClock  } from "lucide-react";
import { useUserStore } from "@/stores/userStore";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { format } from "date-fns";
import { id } from "date-fns/locale";
import mockSchedule from "@/data/mockAppointments.json"
import {Appointment} from "@/stores/AppointmentStore"
import Link from "next/link";

function filteredAppointments(Schedule : Appointment[]){
  return Schedule.filter((appt) => appt.status == "Menunggu")
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .slice(0,2);
}

export default function Header() {
  const [search, setSearch] = useState("");
  const user = useUserStore((state) => state.user);
  const waitingApointments = filteredAppointments(mockSchedule)

  return (
    <header className="flex w-full items-center justify-between px-7 pt-5 pb-2">
      {/* Kiri: Avatar + Nama Pengguna */}
      <div className="mr-auto flex items-center gap-3">
        <Link href="/profil">
          <Avatar className="w-10 h-10 md:h-12 md:w-12">
            <AvatarImage src="" alt="dummy avatar" />
            <AvatarFallback className="bg-blue-200 text-sm font-bold">AV</AvatarFallback>
          </Avatar>
        </Link>
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
      <div className="flex items-center gap-2 min-w-0">
        {/* Search Bar */}
        <div className="relative min-w-0 max-w-[400px] sm:w-48 md:w-64 lg:w-120">
          <input
            type="text"
            placeholder="Cari dokter, fasilitas kesehatan..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="h-8 w-full rounded-md border border-gray-300 bg-white 
                      pl-10 pr-4 text-xs md:h-10 md:text-base"
          />
          <div className="absolute left-3 top-1/2 -translate-y-1/2 transform">
            <Search className="h-4 w-4 text-gray-400 md:h-5 md:w-5" />
          </div>
        </div>

        {/* Bell + Popover */}
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="flex-shrink-0 h-7 w-7 rounded-lg border border-gray-300 md:h-8 md:w-8 lg:h-10 lg:w-10"
            >
              <Bell className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6" />
            </Button>
          </PopoverTrigger>

          <PopoverContent
            side="bottom"
            align="end"
            className="z-10 w-[385px] rounded-xl bg-white py-3 shadow-lg border border-gray-400"
          >
            <h3 className="font-semibold text-sm mb-3">Pusat Notifikasi</h3>
            <div className="space-y-3">
              {waitingApointments.length === 0 ? (
                <p className="text-gray-500 text-sm">Tidak ada janji temu menunggu</p>
              ) : (
                waitingApointments.map((appt) => (
                  <div
                    key={appt.id}
                    className="px-4 py-2 border-y border-gray-300 w-full hover:bg-gray-100 cursor-pointer"
                  >
                    <div className="flex flex-row items-start justify-between gap-2">
                      <div className="flex flex-row gap-1 items-center">
                        <FileClock className="w-4 h-4"/>
                        <p className="text-black text-sm">Janji Temu berhasil Dibuat!</p>
                      </div>
                      <div>
                        <p className="text-gray-600 text-xs">
                          {format(new Date(appt.date), "dd/MM/yy")}
                        </p>
                      </div>
                    </div>
                    <p className="text-xs text-gray-600">
                      Janji temu Anda dengan {appt.doctor.name}, di {appt.facility} pada {format(new Date(appt.date), "dd MMMM yyyy", { locale: id })}, pukul {appt.time} WIB. Pastikan anda hadir tepat waktu!
                    </p>
                  </div>
                ))
              )}
            </div>
          </PopoverContent>
        </Popover>    
      </div>
    </header>
  );
}
