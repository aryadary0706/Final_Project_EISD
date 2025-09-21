"use client";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { compareAsc, format } from "date-fns";
import { id as LocaleID } from "date-fns/locale";
import { Calendar, Clock, BadgePlus } from "lucide-react";
import Link from "next/link";
import { Separator } from "@radix-ui/react-separator";

const mockAppointments = [
  {
    id: 1,
    href: "#",
    specialty: "Dokter Umum",
    doctor: "Dr. Clara Wulandari, M.Ked",
    status: "dibatalkan",
    facility: "RS Medic Center",
    queue: 1,
    date: new Date(2025, 8, 6),
    time: "13:00 WIB - 13:15 WIB",
  },
  {
    id: 2,
    href: "#",
    specialty: "Psikiater",
    doctor: "Dr. Clara Wulandari, M.Ked",
    status: "berhasil",
    facility: "RS Medic Center",
    queue: 2,
    date: new Date(2025, 8, 7),
    time: "13:00 WIB - 13:15 WIB",
  }
];

type Appointment = {
  id: number;
  href: string;
  specialty: string;
  doctor: string;
  status: string
  facility: string;
  queue: number;
  date: Date;
  time: string;
};

export default function ScheduleMeet() {
  const getDateKey = (date: Date) => format(date, "yyyy-MM-dd");

  const groupedAppointments = mockAppointments.reduce((acc, curr) => {
    const dateKey = getDateKey(curr.date);
    if (!acc[dateKey]) {
      acc[dateKey] = [];
    }
    acc[dateKey].push(curr);
    return acc;
  }, {} as Record<string, Appointment[]>);

  const sortedDates = Object.keys(groupedAppointments).sort((a, b) =>
    compareAsc(new Date(a), new Date(b))
  );

  return (
    <div className="justify-end flex w-full lg:h-full flex-col h-full py-10 px-6 bg-gray-50 border-l-2 border-gray-200">
      {/* Header */}
      <div className="flex justify-between items-center self-stretch mb-5">
        <h2 className="font-semibold text-[15px]">Jadwal Temu Mendatang</h2>
        <button className="font-light text-blue-400 hover:underline">batalkan</button>
      </div>

      {/* Schedule Card List — SCROLLABLE CONTAINER */}
      <div className="flex flex-col space-y-6 mb-1 w-full h-full">
        {/* MOBILE: Horizontal Scroll (≤ lg) */}
        <div className="lg:hidden">
          {/* Fixed size container for mobile */}
          <div className="w-full h-[240px] overflow-hidden">
            <ScrollArea className="w-full h-full">
              <div className="flex gap-6 pr-4 pb-2">
                {sortedDates.map((date) => (
                  <div key={date} className="flex-shrink-0 flex flex-col">
                    {/* Tanggal */}
                    <h3 className="font-normal text-md text-black mb-2 whitespace-nowrap">
                      {format(new Date(date), "EEEE, dd MMMM yyyy", { locale: LocaleID })}
                    </h3>

                    {/* Cards — smaller size on mobile */}
                    {groupedAppointments[date].map((appt) => (
                      <AppointmentCard
                        key={appt.id}
                        appt={appt}
                        isMobile={true} // Pass flag to adjust card size
                      />
                    ))}
                  </div>
                ))}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </div>
        </div>

        {/* DESKTOP: Vertical Scroll (> lg) */}
        <div className="hidden lg:flex flex-col">
          {/* Fixed size container for desktop */}
          <div className="w-full h-full">
            <ScrollArea className="h-[100vh]">
              <div className="flex flex-col space-y-6 pb-4 items-center">
                {sortedDates.map((date) => (
                  <div key={date} className="flex flex-col">
                    {/* Tanggal */}
                    <h3 className="font-normal text-md text-black mb-2">
                      {format(new Date(date), "EEEE, dd MMMM yyyy", { locale: LocaleID })}
                    </h3>

                    {/* Cards — larger size on desktop */}
                    {groupedAppointments[date].map((appt) => (
                      <AppointmentCard
                        key={appt.id}
                        appt={appt}
                        isMobile={false} // Pass flag to adjust card size
                      />
                    ))}
                  </div>
                ))}
              </div>
              <ScrollBar orientation="vertical" />
            </ScrollArea>
          </div>
        </div>
      </div>

      {/* Action Button */}
      <Button className="w-50 lg:w-full justify-between p-[32px] items-center bg-blue-400 hover:bg-blue-500">
        <h3 className="font-medium text-[16px]">Buat Jadwal Baru</h3>
        <BadgePlus className="w-16 h-16" />
      </Button>
    </div>
  );
}

function AppointmentCard({ appt, isMobile }: { appt: Appointment; isMobile: boolean }) {
  return (
    <Link href={appt.href} className="text-left rounded-md">
      <Card
        className={`flex flex-col ${isMobile ? "w-[280px] h-[200px]" : "w-[320px] h-[180px]"} p-[16px] gap-[4px] rounded-lg border bg-white`}
      >
        {/* Header */}
        <CardHeader className="flex items-center gap-2 p-1 mb-4 border-b-1">
          <div>
            <h2 className="text-blue-400 text-md font-semibold">{appt.specialty}</h2>
            <p className="text-gray-500 text-sm">{appt.facility} - Bandung</p>
          </div>
        </CardHeader>

        {/* Body: Two Columns */}
        <div className="flex flex-row gap-0 h-full items-center">
          {/* Left Column: Queue */}
          <div className="flex-1 flex flex-col">
            <p className="text-md text-gray-400">Antrian</p>
            <p className="text-4xl font-bold">{appt.queue.toString().padStart(2, "0")}</p>
          </div>
          {/* Right Column: Date & Time */}
          <div className="flex-1 flex flex-col gap-3 justify-start">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-gray-500" />
              <p className="text-xs font-medium">
                {format(appt.date, "dd MMMM yyyy", { locale: LocaleID })}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-gray-500" />
              <p className="text-xs font-medium">{appt.time}</p>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
}