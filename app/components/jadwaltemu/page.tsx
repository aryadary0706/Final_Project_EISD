import { ScrollArea } from "@radix-ui/react-scroll-area";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type Appointment = {
  id: number;
  specialty: string;
  facility: string;
  queue: number;
  date: Date;
  time: string;
};

type ScheduleMeetProps = {
  mockAppointments: Appointment[];
};

export default function ScheduleMeet({ mockAppointments }: ScheduleMeetProps) {
  const getDateKey = (date: Date) =>
  `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

  const groupedAppointments = mockAppointments.reduce((acc, curr) => {
    const dateKey = getDateKey(curr.date);
    if (!acc[dateKey]) {
      acc[dateKey] = [];
    }
    acc[dateKey].push(curr);
    return acc;
  }, {} as Record<string, Appointment[]>);

  return (
    <aside className="w-[480px] bg-white shadow-md p-6 flex flex-col space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-[18px]">Jadwal Temu Mendatang</h2>
        {/* Menggunakan tombol dengan ikon dari shadcn/ui */}
        <Button variant="outline" size="icon" className="rounded-md w-[52px] h-[52] aspect-square border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 3C10.9 3 10 3.9 10 5C10 6.1 10.9 7 12 7C13.1 7 14 6.1 14 5C14 3.9 13.1 3 12 3ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM12 17C10.9 17 10 17.9 10 19C10 20.1 10.9 21 12 21C13.1 21 14 20.1 14 19C14 17.9 13.1 17 12 17Z" />
          </svg>
        </Button>
      </div>

      <ScrollArea className="flex-1 overflow-y-auto pr-2">
        <div className="flex flex-col space-y-4">
          {Object.entries(groupedAppointments).map(([date, appointments]) => (
            <div key={date}>
              <h3 className="font-semibold text-gray-500 mb-2">{date}</h3>
              <div className="flex flex-col space-y-4">
                {appointments.map(({ id, specialty, facility, queue, date: apptDate, time }) => (
                  <Card key={id} className="bg-white rounded-xl shadow">
                    <CardHeader className="p-4 pb-2">
                      <div className="flex items-center space-x-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-7 h-7 text-blue-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2v-7H3v7a2 2 0 002 2z"
                          />
                        </svg>
                        <div>
                          <CardTitle className="text-blue-700 text-base">{specialty}</CardTitle>
                          <CardDescription className="text-gray-500 text-sm mt-0">{facility}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <div className="flex flex-col h-full justify-between">
                      {/* Nomor Antrian dan Tanggal/Jam */}
                      <div className="flex justify-between items-start">
                        {/* Nomor Antrian */}
                        <div className="flex flex-col items-start">
                          <p className="text-xs text-gray-400">Antrian</p>
                          <p className="text-3xl font-bold">{queue.toString().padStart(2, "0")}</p>
                        </div>
                        {/* Tanggal dan Jam */}
                        <div className="flex flex-col items-end text-right">
                          <div>
                            <p className="text-xs text-gray-400">Tanggal</p>
                            <p className="text-sm font-medium">{apptDate.toLocaleDateString('id-ID', {day: 'numeric', month: 'long', year: 'numeric'})}</p>
                          </div>
                          <div className="mt-1">
                            <p className="text-xs text-gray-400">Jam</p>
                            <p className="text-sm font-medium">{time}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      <Button className="w-full bg-blue-400 hover:bg-blue-500 text-white rounded-xl py-3 font-semibold shadow">
        Buat Jadwal Baru
      </Button>
    </aside>
  );
}