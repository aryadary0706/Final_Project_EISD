export default function ScheduleMeet(mockAppointments: any) {
    return (
        <aside className="w-80 bg-white shadow-md p-6 flex flex-col space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-lg">Jadwal Temu</h2>
          <button className="p-1 rounded hover:bg-gray-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
            </svg>
          </button>
        </div>

        {/* Appointments */}
        <div className="flex flex-col space-y-4 overflow-y-auto">
          {mockAppointments.map(({ id, specialty, facility, queue, date, time }) => (
            <div key={id} className="bg-gray-50 rounded-xl p-4 flex flex-col space-y-2 shadow">
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
                  <p className="font-semibold text-blue-700">{specialty}</p>
                  <p className="text-gray-500 text-sm">{facility}</p>
                </div>
              </div>

              <div className="flex justify-between font-semibold">
                <div>
                  <p className="text-xs text-gray-400">Antrian</p>
                  <p className="text-xl">{queue.toString().padStart(2, "0")}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400">Tanggal</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400">Jam</p>
                  <p>{time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="bg-blue-400 text-white rounded-xl py-3 font-semibold shadow flex justify-center items-center space-x-2 hover:bg-blue-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
          <span>Buat Jadwal Baru</span>
        </button>
      </aside>
    )
}
