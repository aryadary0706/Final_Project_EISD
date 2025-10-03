"use client";

import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { MapPin, Phone, ChevronLeft } from "lucide-react";
import DoctorList from "@/app/components/DoctorList";
import ReviewList from "@/app/components/ReviewList";
import PoliCategory from "@/app/components/KategoriPoli";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import DoctorListBySpeciality from "@/app/components/DoctorsFromCategory";
import { useState } from "react";

export default function FaskesPage({ params }: { params: Promise<{ id: string }> }) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  //data dummy
  const faskes = {
    id: "1",
    name: "Rumah Sakit Medic Center",
    address: "Jl. Merdeka No.123, Bandung, Jawa Barat",
    phone: "(022) 5678 999",
    jam: "07.00 - 21.00",
    description:
      "Rumah sakit umum modern dengan pelayanan kesehatan komprehensif yang berfokus pada kenyamanan pasien. Dengan fasilitas lengkap dan didukung oleh dokter spesialis berpengalaman di berbagai bidang serta tenaga medis profesional. Visi kami adalah menjadi mitra terpercaya dalam menjaga kesehatan keluarga dengan layanan yang cepat dan aman.",
    categories: [
      { label: "Umum", src: "/icons/Umum.png", alt: "Icon Poli Umum" },
      { label: "Anak", src: "/icons/Anak.png", alt: "Icon Poli Anak" },
      { label: "Penyakit Dalam", src: "/icons/Penyakit Dalam.png", alt: "Icon Poli Penyakit Dalam" },
      { label: "Bedah", src: "/icons/Bedah.png", alt: "Icon Poli Bedah" },
      { label: "Gigi & Mulut", src: "/icons/Gigi & mulut.png", alt: "Icon Poli Gigi & Mulut" },
      { label: "Kandungan", src: "/icons/Kandungan.png", alt: "Icon Poli Kandungan" },
      { label: "Jantung", src: "/icons/Jantung.png", alt: "Icon Poli Jantung" },
    ],
  };

  return (
    <div className="flex flex-col lg:flex-row w-full">
      {/* Bagian kiri */}
      <div className="flex-1 flex flex-col px-4 sm:px-6 py-6 space-y-8 max-w-full lg:max-w-[900px] mx-auto">
        {/* Tombol kembali */}
        <div>
          <Link href="/search">
            <Button variant="outline" className="flex items-center gap-2">
              <ChevronLeft className="w-4 h-4" />
              Kembali
            </Button>
          </Link>
        </div>

        {/* Info Faskes */}
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl text-blue-500 font-semibold">{faskes.name}</h1>

          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
            <div className="flex flex-row items-center gap-6">
              <div className="flex flex-col gap-1 pr-6 border-r">
                <h5 className="text-gray-600 text-sm">Jam Operasional</h5>
                <h3 className="text-black text-xl font-bold">{faskes.jam}</h3>
              </div>
              <h2 className="text-lg sm:text-xl font-bold">IGD 24 JAM</h2>
            </div>

            <div className="flex flex-row items-center gap-2">
              <Phone className="w-5 h-5 text-gray-700" />
              <p className="text-base sm:text-lg">{faskes.phone}</p>
            </div>
          </div>

          <p className="text-sm text-gray-700 font-sans">{faskes.description}</p>

          <div className="flex flex-row items-start gap-2">
            <MapPin className="w-5 h-5 text-gray-700" />
            <span className="text-sm">{faskes.address}</span>
          </div>
        </div>

        {/* kategori poli */}
        <div className="bg-white">
          <h3 className="text-lg font-semibold mb-4">Kategori Poli</h3>
          <ScrollArea className="w-full pb-3">
            <PoliCategory 
              categories={faskes.categories} 
              onCategoryClick={(label) => setSelectedCategory(label)} 
            />
          </ScrollArea>
        </div>

        {/* Dokter */}
        <section>
          <h2 className="text-lg font-semibold mb-4">Dokter Pilihan Pasien</h2>
          <ScrollArea className="w-full pb-3">
            <DoctorList />
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </section>

        <section>
          <div className="flex xl:hidden flex-col w-full h-auto">
            <ReviewList/>
          </div>
        </section>
      </div>

      {/* Bagian kanan - Review / Doctor by Category */}
      <aside className="xl:flex hidden w-full lg:w-[400px] shrink-0 relative">
        <div className="sticky top-0 w-full h-screen overflow-hidden">
          <ReviewList />

          <AnimatePresence mode="wait">
            {selectedCategory && (
              <motion.div
                key="appointment"
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: "100%", opacity: 0 }}
                transition={{ type: "spring", stiffness: 250, damping: 25, duration: 0.3 }}
                className="absolute top-0 left-0 w-full h-full"
              >
                {selectedCategory && (
                  <DoctorListBySpeciality
                    speciality={selectedCategory}
                    onClose={() => setSelectedCategory(null)} // ✅ reset ke ReviewList
                  />
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </aside>
    </div>
  );
}
