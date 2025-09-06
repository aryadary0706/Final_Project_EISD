export default function JadwalTemuHomepage() {
  return (
    <aside className="w-[480px] flex-shrink-0 bg-white shadow-md p-6 flex flex-col space-y-6 ml-6">
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-[18px]">Jadwal Temu Mendatang</h2>
        <a href="#" className="text-blue-500 text-sm hover:underline">Batalkan</a>
      </div>

      <div className="flex-1 overflow-y-auto pr-2">
        <div className="flex flex-col space-y-4">
          {/* Hari ini */}
          <div>
            <h3 className="font-semibold text-gray-500 mb-2">Hari ini</h3>
            <div className="bg-white rounded-xl shadow border p-4">
              <div className="flex items-center space-x-3 mb-3">
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
                  <h3 className="text-blue-700 text-base font-semibold">Dokter Umum</h3>
                  <p className="text-gray-500 text-sm">RS Medic Center - Bandung</p>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div className="flex flex-col items-start">
                  <p className="text-xs text-gray-400">Antrian</p>
                  <p className="text-3xl font-bold">02</p>
                </div>
                <div className="flex flex-col items-end text-right">
                  <div>
                    <p className="text-xs text-gray-400">Tanggal</p>
                    <p className="text-sm font-medium">02 September 2025</p>
                  </div>
                  <div className="mt-1">
                    <p className="text-xs text-gray-400">Jam</p>
                    <p className="text-sm font-medium">13:00 WIB - 13:15 WIB</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 05/09/2025 */}
          <div>
            <h3 className="font-semibold text-gray-500 mb-2">05/09/2025</h3>
            <div className="bg-white rounded-xl shadow border p-4">
              <div className="flex items-center space-x-3 mb-3">
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
                  <h3 className="text-blue-700 text-base font-semibold">Psikiater</h3>
                  <p className="text-gray-500 text-sm">RS Medic Center - Bandung</p>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div className="flex flex-col items-start">
                  <p className="text-xs text-gray-400">Antrian</p>
                  <p className="text-3xl font-bold">02</p>
                </div>
                <div className="flex flex-col items-end text-right">
                  <div>
                    <p className="text-xs text-gray-400">Tanggal</p>
                    <p className="text-sm font-medium">05 September 2025</p>
                  </div>
                  <div className="mt-1">
                    <p className="text-xs text-gray-400">Jam</p>
                    <p className="text-sm font-medium">13:00 WIB - 14:30 WIB</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button className="w-full bg-blue-400 hover:bg-blue-500 text-white rounded-xl py-3 font-semibold shadow flex items-center justify-center space-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
        <span>Buat Jadwal Baru</span>
      </button>
    </aside>
  );
}
