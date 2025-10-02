"use client";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { compareAsc, format } from "date-fns";
import { id as LocaleID } from "date-fns/locale";
import { Calendar, Clock, BadgePlus, XCircle } from "lucide-react";
import AppointmentDetail from "./AppointmentDetail";
import mockSchedule from "@/data/mockAppointments.json"
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Appointment = {
  id: number;
  doctor: {
    name: string;
    specialty: string;
    image: string;
  };
  date: string;
  time: string;
  status: string;
  facility: string;
  patient: {
    name: string;
    symptom: string;
    allergy: string;
  };
  diagnosis: {
    physicalExam: string[];
    temporary: string;
    plan: string;
  };
};

export default function ScheduleMeet() {
  const getDateKey = (date: Date) => format(date, "yyyy-MM-dd");
  const [selectedAppointment, setSelectedAppointment] = useState<Appointment | null>(null);

  // cancel mode state
  const [cancelMode, setCancelMode] = useState(false);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  const filteredAppointments =  (mockSchedule as Appointment[]).filter(
    (appt: Appointment) => appt.status === "Menunggu"
  );

  const handleSelect = (appt: Appointment) => {
    if (cancelMode) {
      // toggle checkbox selection
      setSelectedIds((prev) =>
        prev.includes(appt.id)
          ? prev.filter((id) => id !== appt.id)
          : [...prev, appt.id]
      );
    } else {
      setSelectedAppointment(appt);
    }
  };

  const groupedAppointments = filteredAppointments.reduce((acc, curr) => {
    const dateKey = getDateKey(new Date(curr.date));
    if (!acc[dateKey]) {
      acc[dateKey] = [];
    }
    acc[dateKey].push(curr);
    return acc;
  }, {} as Record<string, Appointment[]>);

  const sortedDates = Object.keys(groupedAppointments).sort((a, b) =>
    compareAsc(new Date(a), new Date(b))
  );

  const handleCancelAppointments = () => {
    console.log("Batalkan janji dengan ID:", selectedIds);
    // TODO: integrasi ke backend / hapus dari state
    setSelectedIds([]);
    setCancelMode(false);
  };

  return (
    <div className="justify-end flex flex-col w-full max-w-md sm:max-w-2xl md:max-w-4xl lg:max-w-4xl xl:max-w-5xl xl:w-full lg:h-[440px] xl:h-full bg-gray-50 border-1 border-gray-200">
      {/* Header */}
      <div className="flex justify-between items-center self-stretch mb-2 py-6 px-6">
        <h2 className="font-semibold text-[15px]">Jadwal Temu Mendatang</h2>
        <button
          className="font-light text-blue-400 hover:underline"
          onClick={() => {
            setCancelMode(!cancelMode);
            setSelectedIds([]);
          }}
        >
          {cancelMode ? "selesai" : "batalkan"}
        </button>
      </div>

      {/* Schedule Card List */}
      <div className="flex flex-col space-y-6 w-full h-full">
        {/* MOBILE */}
        <div className="xl:hidden">
          <div className="w-full h-[240px] overflow-hidden">
            <ScrollArea className="w-full h-xl">
              <div className="flex gap-6 px-5 pb-4">
                {sortedDates.map((date) => (
                  <div key={date} className="flex-shrink-0 flex flex-col">
                    <h3 className="font-normal text-md text-black mb-2 whitespace-nowrap">
                      {format(new Date(date), "EEEE, dd MMMM yyyy", { locale: LocaleID })}
                    </h3>
                    {groupedAppointments[date].map((appt) => (
                      <AppointmentCard
                        key={appt.id}
                        appt={appt}
                        isMobile={true}
                        cancelMode={cancelMode}
                        selected={selectedIds.includes(appt.id)}
                        onSelect={handleSelect}
                      />
                    ))}
                  </div>
                ))}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </div>
        </div>

        {/* DESKTOP */}
        <div className="hidden xl:flex flex-col">
          <div className="w-full h-full">
            <ScrollArea className="flex-1 h-[550px]">
              <div className="flex flex-col space-y-6 pb-4 items-center">
                {sortedDates.map((date) => (
                  <div key={date} className="flex flex-col">
                    <h3 className="font-normal text-md text-black mb-2">
                      {format(new Date(date), "EEEE, dd MMMM yyyy", { locale: LocaleID })}
                    </h3>
                    {groupedAppointments[date].map((appt) => (
                      <AppointmentCard
                        key={appt.id}
                        appt={appt}
                        isMobile={false}
                        cancelMode={cancelMode}
                        selected={selectedIds.includes(appt.id)}
                        onSelect={handleSelect}
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
      <div className="flex justify-center">
        {!cancelMode ? (
          <Button className="flex w-50 xl:w-85 justify-between p-[24px] xl:p-[32px] mb-6 bg-blue-400 hover:bg-blue-500">
            <h3 className="font-medium text-[16px]">Buat Jadwal Baru</h3>
            <BadgePlus className="w-16 h-16" />
          </Button>
        ) : (
          <Button
            className={`flex w-50 xl:w-85 justify-center p-[24px] xl:p-[32px] mb-6 ${
              selectedIds.length > 0
                ? "bg-red-500 hover:bg-red-600"
                : "bg-gray-300 cursor-not-allowed"
            }`}
            disabled={selectedIds.length === 0}
            onClick={handleCancelAppointments}
          >
            <XCircle className="w-5 h-5 mr-2" />
            Batalkan Janji Temu
          </Button>
        )}
      </div>

      {/* Appointment Detail */}
      <AnimatePresence mode="wait">
        {!cancelMode && selectedAppointment && (
          <motion.div
            key={selectedAppointment.id}   // gunakan id biar unik per appointment
            initial={{ x: "100%", opacity: 0 }} 
            animate={{ x: 0, opacity: 1 }} 
            exit={{ x: "100%", opacity: 0 }} 
            transition={{ type: "spring", stiffness: 250, damping: 25, duration: 0.3 }}
            className="absolute top-0 left-0 w-full h-full"
          >
            <AppointmentDetail
              appointment={selectedAppointment}
              onClose={() => setSelectedAppointment(null)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function AppointmentCard({
  appt,
  isMobile,
  cancelMode,
  selected,
  onSelect,
}: {
  appt: Appointment;
  isMobile: boolean;
  cancelMode: boolean;
  selected: boolean;
  onSelect: (appt: Appointment) => void;
}) {
  return (
    <Card
      className={`relative flex flex-col ${
        isMobile ? "w-[280px] h-[200px]" : "w-[328px] h-[172px]"
      } p-[16px] gap-[4px] rounded-lg border bg-white`}
      onClick={() => onSelect(appt)}
    >
      {cancelMode && (
        <input
          type="checkbox"
          checked={selected}
          readOnly
          className="absolute top-2 right-2 w-5 h-5"
        />
      )}

      <CardHeader className="flex items-center gap-2 p-1 mb-4 border-b-1">
        <div>
          <h2 className="text-blue-400 text-md font-semibold">
            {appt.doctor.specialty}
          </h2>
          <p className="text-gray-500 text-sm">{appt.facility} - Bandung</p>
        </div>
      </CardHeader>

      <div className="flex flex-row gap-0 h-full items-center">
        <div className="flex-1 flex flex-col">
          <p className="text-md text-gray-400">Antrian</p>
          <p className="text-4xl font-bold">
            {appt.id.toString().padStart(2, "0")}
          </p>
        </div>
        <div className="flex-1 flex flex-col gap-3 justify-start">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-gray-500" />
            <p className="text-xs font-medium">
              {format(new Date(appt.date), "dd MMMM yyyy", { locale: LocaleID })}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-gray-500" />
            <p className="text-xs font-medium">{appt.time}</p>
          </div>
        </div>
      </div>
    </Card>
  );
}
