import Image from "next/image"
import { useState } from "react";

export default function Header() {
    const [search, setSearch] = useState("");
    return (
        <header className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Image
                      src="/profile.jpg"
                      alt="User profile"
                      width={48}
                      height={48}
                      className="rounded-full"
                      priority
                    />
                    
                    <div>
                      <p className="font-semibold text-lg">Halo, Naswa</p>
                      <p className="text-gray-500 text-sm">Bagaimana kabarmu?</p>
                    </div>
                  </div>
        
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Cari dokter, fasilitas kesehatan..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-80 py-2 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      />
                    </div>
                  </div>
                </header>
    )
}