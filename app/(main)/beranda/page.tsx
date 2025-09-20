  "use client";

  import Header from "@/app/components/header";
  import Promobanner from "@/app/components/promobanner";
  import DoctorList from "@/app/components/DoctorList";
  import FaskesList from "@/app/components/faskesList";
  import ScheduleMeet from "@/app/components/Schedulelist";
  import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

  export default function Beranda() {
      return (
        <div className="flex flex-row w-full">
        {/* Kolom utama */}
        <div className="flex-1 flex flex-col">
          <Header />
          {/* Konten utama */}
          <main className="flex-1 mt-4 space-y-4 px-6 w-full">
            <section className="items-center">
              <Promobanner/>
            </section>  
            <section>
              <div className="block lg:hidden w-full">
                  <ScheduleMeet/>
              </div>
            </section>
            <section>
              <h2 className="text-[14px] text-lg">
                Fasilitas Kesehatan Terdekat
              </h2>
              <ScrollArea className="flex w-full max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-[860px] whitespace-nowrap pb-3 mt-5">
                <FaskesList />
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </section>
            <section>
                <h2 className="text-[14px] text-lg"> 
                  Dokter Pilihan Pasien
                </h2>
                <ScrollArea className="flex w-full max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-[860px]whitespace-nowrap pb-3 mt-5">
                  <DoctorList />
                <ScrollBar orientation="horizontal" />
                </ScrollArea>   
            </section>
          </main>
        </div>

        {/* Kolom kanan (optional) */}
        <div className="hidden lg:flex w-[380px] shrink-0">
            <ScheduleMeet/>
        </div>
      </div>
      );
  }
