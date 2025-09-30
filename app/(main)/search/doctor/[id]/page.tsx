"use client";

import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { MapPin, Phone, ChevronLeft, Upload, Info, CheckCircle } from "lucide-react";
import ReviewList from "@/app/components/ReviewList";
import DoctorListBySpeciality from "@/app/components/DoctorsFromCategory";
import Link from "next/link";
import allDoctors from "@/data/mockDoctors.json";
import { useState } from "react";
import Image from "next/image";
import styles from '@/app/styles/dokter.module.css';

// Data dummy untuk jadwal (bisa Anda pindahkan ke file JSON juga jika perlu)
const scheduleData = {
    range: '26 Agustus - 05 September',
    dates: [
        { day: 26, dayName: 'Sel' }, { day: 27, dayName: 'Rab' },
        { day: 28, dayName: 'Kam' }, { day: 29, dayName: 'Jum' },
        { day: 30, dayName: 'Sab' }, { day: 31, dayName: 'Sen' },
        { day: 1, dayName: 'Sel' },  { day: 2, dayName: 'Kam' },
    ],
    times: [
        '08:00', '08:15', '08:45', '09:00', '09:30', '09:30', '10:00', '10:30',
        '12:00', '12:30', '13:00', '14:00', '14:30', '15:00'
    ]
};

export default function DokterDetailPage({ params }: { params: { id: string } }) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState(26);
  const [selectedTime, setSelectedTime] = useState<string | null>('08:00');

  // 2. Cari dokter yang sesuai berdasarkan ID dari URL
  const doctorData = allDoctors.find(doc => doc.id.toString() === params.id);

  // 3. Jika dokter tidak ditemukan, tampilkan pesan
  if (!doctorData) {
      return (
          <div className={styles.mainContent}>
              <header className={styles.header}>
                  <Link href="/search" className={styles.backButton}>
                      <ChevronLeft size={24} />
                  </Link>
                  <h2>Dokter Tidak Ditemukan</h2>
              </header>
              <p>Maaf, dokter yang Anda cari tidak ada dalam data kami.</p>
          </div>
      );
  }
    
  // Nama dokter tanpa gelar untuk ditampilkan besar di banner
  const doctorFirstName = doctorData.name.split(',')[0].replace('dr. ', '');

  return (
    <div className={styles.pageWrapper}>
          {/* Bagian Tengah (Konten Utama) */}
          <main className={styles.mainContent}>
              <header className={styles.header}>
                  <Link href="/search" className={styles.backButton}>
                      <ChevronLeft size={24} />
                  </Link>
                  <div>
                      <h2>{doctorData.specialty}</h2>
                      <p>{doctorData.lokasi}</p>
                  </div>
              </header>

              {/* Banner Dokter */}
              <section className={styles.doctorBanner}>
                  <div className={styles.bannerText}>
                      <h1>{doctorFirstName.toUpperCase()}</h1>
                  </div>
                  <div className={styles.bannerImage}>
                      <Image src={doctorData.image} alt={doctorData.name} fill style={{ objectFit: 'contain', objectPosition: 'bottom' }} />
                  </div>
                  <div className={styles.bannerStats}>
                      <div className={styles.statItem}>
                          <span>10+</span> {/* Ganti dengan data asli jika ada */}
                          <p>Tahun Pengalaman</p>
                      </div>
                      <div className={styles.statItem}>
                          <span>{doctorData.totalPatients}</span>
                          <p>Pasien Terlayani</p>
                      </div>
                  </div>
              </section>

              {/* Jadwal & Waktu */}
              <section className={styles.scheduleSection}>
                  <h4>Jadwal Tersedia</h4>
                  <p className={styles.scheduleRange}>{scheduleData.range}</p>
                  <div className={styles.dateSelector}>
                      {scheduleData.dates.map(date => (
                          <button
                              key={date.day}
                              className={`${styles.dateButton} ${selectedDate === date.day ? styles.selected : ''}`}
                              onClick={() => setSelectedDate(date.day)}
                          >
                              <span>{date.dayName}</span>
                              <strong>{date.day}</strong>
                          </button>
                      ))}
                  </div>

                  <h4>Waktu Tersedia</h4>
                  <div className={styles.timeSelector}>
                      {scheduleData.times.map(time => (
                          <button
                              key={time}
                              className={`${styles.timeButton} ${selectedTime === time ? styles.selected : ''}`}
                              onClick={() => setSelectedTime(time)}
                          >
                              {time}
                          </button>
                      ))}
                  </div>
              </section>
                
              {/* Form Informasi Pasien */}
              <section className={styles.formSection}>
                  <h4>Informasi Pasien</h4>
                  {/* ... Sisa form tetap sama ... */}
              </section>
          </main>

          {/* Bagian kanan - Review / Doctor by Category */}
          <aside className="flex w-[340px] shrink-0 h-screen sticky top-0">
            <div className="w-full">
              {selectedCategory ? (
                <DoctorListBySpeciality
                  speciality={selectedCategory}
                  onClose={() => setSelectedCategory(null)} // ✅ reset ke ReviewList
                />
              ) : (
                <ReviewList />
              )}
            </div>
          </aside>
    </div>
  );
}
