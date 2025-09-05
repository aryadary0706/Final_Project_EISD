import { Avatar } from "@radix-ui/react-avatar";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Header() {
    const [search, setSearch] = useState("");
    return (
        <header className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Avatar className="w-15 h-15 rounded-full bg-gray-100"/>
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
                        className="w-120 h-13 py-2 px-2 rounded-md border justify-between border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      />
                    </div>
                    <Button
                      variant="outline"
                      className="rounded-md w-12 h-12 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      value="#"
                    />
                  </div>
                </header>
    )
}