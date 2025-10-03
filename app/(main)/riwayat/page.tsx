"use client";

import Header from "@/app/components/header";
import ScheduleMeet from "@/app/components/Schedulelist";
import AppointmentDetail from "@/app/components/AppointmentDetail";
import { Calendar, Clock } from "lucide-react";
import { Separator } from "@radix-ui/react-separator";
import { compareAsc, format } from "date-fns";
import mockSchedule from "@/data/mockAppointments.json";
import { motion, AnimatePresence } from "framer-motion";
import { useAppointmentStore, Appointment} from "@/stores/AppointmentStore";
import clsx from "clsx";

export default function RiwayatPage() {
  const getDateKey = (date: Date) => format(date, "yyyy-MM-dd");
  const { selectedAppointment, source, openDetailAppointment ,closeDetailAppointment } = useAppointmentStore();

  // Format dan urutkan appointment by date (ascending)
  const sortedAppointments = [...mockSchedule].sort((a, b) =>
    compareAsc(new Date(getDateKey(new Date(a.date))), new Date(getDateKey(new Date(b.date))))
  );
  return (
    <div className="flex flex-row w-full">
      <div className="flex-1 flex flex-col py-2">
        <Header />
        <main className="flex-1 mt-4 space-y-4 px-6 w-full">
          <h1 className="text-base font-medium">Riwayat Jadwal Temu</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {sortedAppointments.map((appt: Appointment) => (
              <div
                key={appt.id}
                onClick={() => openDetailAppointment(appt, "riwayat")}  // klik card → buka detail
                className={`border rounded-xl p-4 shadow-sm bg-white flex flex-col space-y-2 cursor-pointer hover:shadow-md ${
                  selectedAppointment?.id === appt.id ? "ring-2 ring-blue-500" : ""
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-blue-600">{appt.doctor.specialty}</p>
                    <p className="text-xs text-gray-500">{appt.facility}</p>
                  </div>
                  <span
                    className={clsx("text-xs px-3 py-1 rounded-full font-medium", 
                      appt.status === "Selesai" && "bg-green-100 text-green-600",
                      appt.status === "Dibatalkan" && "bg-red-100 text-red-600",
                      appt.status === "Menunggu" && "bg-blue-100 text-blue-600",
                    )}
                  >
                    {appt.status === "Selesai" && "Selesai"}
                    {appt.status === "Dibatalkan" && "Dibatalkan"}
                    {appt.status === "Menunggu" && "Menunggu"}
                  </span>
                </div>

                <p className="text-sm font-medium">{appt.doctor.name}</p>

                <div className="flex items-center text-xs text-gray-500 space-x-4">
                  <div className="flex items-center space-x-1">
                    <Calendar size={14} />
                    <span>{format(new Date(appt.date), "EEEE, dd MMMM yyyy", { locale: undefined })}</span>
                  </div>
                  <Separator />
                  <div className="flex items-center space-x-1">
                    <Clock size={14} />
                    <span>{appt.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

      {/* Aside untuk Appointment Detail */}
      <div className="hidden lg:flex w-[400px] shrink-0 relative">
        <div className="sticky top-0 w-full h-screen overflow-hidden">
          <div className="relative w-full h-full flex items-start justify-center">
            <ScheduleMeet />
          </div>
          <AnimatePresence mode="wait">
            {selectedAppointment && (
              <motion.div
                key="appointment"
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x:"100%", opacity: 0 }}
                transition={{ type: "spring", stiffness: 250, damping: 25, duration:0.3 }}
                className="absolute top-0 left-0 w-full h-full"
              >
                <AppointmentDetail
                  appointment={selectedAppointment}
                  onClose={closeDetailAppointment}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
