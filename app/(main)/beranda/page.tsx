"use client";

import Header from "@/app/components/header";
import Promobanner from "@/app/components/promobanner";
import DoctorList from "@/app/components/DoctorList";
import FaskesList from "@/app/components/faskesList";
import ScheduleMeet from "@/app/components/Schedulelist";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export default function Beranda() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
      // Cek status sesi setelah komponen terpasang (mounted)
      if (status === "loading") {
          setIsLoading(true);
          return;
      } else {
          setIsLoading(false);
          // Jika sesi tidak terautentikasi, alihkan ke halaman login
          if (status === "unauthenticated") {
              router.push("/login");
          }
      }
  }, [status, router]);

  // Tampilkan pesan loading jika sedang dalam proses
  if (isLoading) {
      return (
          <div className="flex justify-center items-center h-screen">
              <p className="text-xl">Memuat...</p>
          </div>
      );
  }

  if (session) {
    return (
      <div className="flex flex-row w-full">
      {/* Kolom utama */}
      <div className="flex-1 flex flex-col">
        <Header />
        {/* Konten utama */}
        <main className="flex-1 mt-4 space-y-8 px-6">
          <section className="items-center">
            <Promobanner/>
          </section>  
          <section>
            <div className="block lg:hidden w-full">
                <ScheduleMeet/>
            </div>
          </section>
          <section>
            <h2 className="text-[14px] mb-4 text-lg">
              Fasilitas Kesehatan Terdekat
            </h2>
            <ScrollArea className="flex w-full max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-[1000px] whitespace-nowrap pb-3">
              <FaskesList />
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </section>
          <section>
            <div>
              <h2 className="text-[14px] mb-4 text-lg"> 
                Dokter Pilihan Pasien
              </h2>
              <ScrollArea className="flex w-full max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-[1000px]whitespace-nowrap pb-3">
                <DoctorList />
              <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </div>
            
          </section>
        </main>
      </div>

      {/* Kolom kanan (optional) */}
      <div className="flex-1 hidden lg:flex">
          <ScheduleMeet/>
      </div>
    </div>
    );
  }
 
}
