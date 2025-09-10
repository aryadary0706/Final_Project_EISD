import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { compareAsc, format } from "date-fns";
import { id as LocaleID } from "date-fns/locale";
import style from "@/app/styles/schedule.module.css"
import { Calendar, Clock, BadgePlus} from "lucide-react";
import { Separator } from '@radix-ui/react-separator';

const mockAppointments = [
  {
    id: 1,
    specialty: "Dokter Umum",
    facility: "RS Medic Center",
    queue: 1,
    date: new Date(2025, 8, 6),
    time: "13:00 WIB - 13:15 WIB",
  },
  {
    id: 2,
    specialty: "Dokter Umum",
    facility: "RS Medic Center",
    queue: 2,
    date: new Date(2025, 8, 7),
    time: "13:00 WIB - 13:15 WIB",
  },
];

type Appointment = {
  id: number;
  specialty: string;
  facility: string;
  queue: number;
  date: Date;
  time: string;
};

export default function ScheduleMeet() {
  // 🔹 Pakai date-fns untuk bikin key per hari
  const getDateKey = (date: Date) => format(date, "yyyy-MM-dd");

  // 🔹 Grouping janji temu
  const groupedAppointments = mockAppointments.reduce((acc, curr) => {
    const dateKey = getDateKey(curr.date);
    if (!acc[dateKey]) {
      acc[dateKey] = [];
    }
    acc[dateKey].push(curr);
    return acc;
  }, {} as Record<string, Appointment[]>);

  // 🔹 Urutkan tanggal naik
  const sortedDates = Object.keys(groupedAppointments).sort((a, b) =>
    compareAsc(new Date(a), new Date(b))
  );

  return (
    <div className={style.container}>
      <div className="flex justify-between items-center self-stretch mb-6">
        <h2 className="font-semibold text-[18px]">Jadwal Temu Mendatang</h2>
        <button className="font-light text-blue-400 hover:underline">batalkan</button>
      </div>

      <ScrollArea className="flex-1 overflow-y-auto pr-2">
        <div className="flex flex-col space-y-4">
          {sortedDates.map((date) => (
            <div key={date}>
              {/* 🔹 Format tanggal dengan bahasa Indonesia */}
              <h3 className="font-normal text-sm text-black mb-2">
                {format(new Date(date), "EEEE, dd MMMM yyyy", { locale: LocaleID })}
              </h3>
              <div className="flex flex-col space-y-4">
                {groupedAppointments[date].map(
                  ({ id, specialty, facility, queue, date: apptDate, time }) => (
                    <button
                      key={id}
                      className="w-full text-left rounded-lg"
                    >
                      <Card className={style.card}>
                        {/* Title */}
                        <div className="p-4 pb-3">
                          <h2 className="text-blue-700 text-base font-semibold">{specialty}</h2>
                          <h4 className="text-gray-500 text-sm">{facility} - Bandung</h4>
                        </div>

                        {/* Content */}
                        <CardContent className="p-4 pt-0">
                          <div className="grid grid-cols-2 gap-4 items-center">
                            {/* Nomor Antrian */}
                            <div className="flex flex-col">
                              <p className="text-sm text-gray-400">Antrian</p>
                              <p className="text-4xl font-bold">
                                {queue.toString().padStart(2, "0")}
                              </p>
                            </div>

                            {/* Tanggal dan Jam */}
                            <div className="flex flex-col space-y-4">
                              <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4 text-gray-500" />
                                <p className="text-sm font-medium">
                                  {format(apptDate, "dd MMMM yyyy", { locale: LocaleID })}
                                </p>
                              </div>
                              <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4 text-gray-500" />
                                <p className="text-sm font-medium">{time}</p>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </button>
                  )
                )}

              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
      
      <Separator className="my-4" />

      <Button className={style.button}>
        Buat Jadwal Baru
        <BadgePlus className="w-10 h-10"/>
      </Button>
    </div>
  );
}
