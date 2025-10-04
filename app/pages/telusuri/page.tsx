// Lokasi: app/pages/telusuri/page.tsx
"use client";

import styles from './telusuri.module.css';
import { faskesData } from '@/lib/data';
<<<<<<< Updated upstream:app/pages/telusuri/page.tsx
import FaskesCard from '@/components/app-components/FaskesCard';
import DoctorList from '@/components/app-components/DoctorList'; // Komponen dari teman Anda
import Header from '@/components/app-components/header';
import FaskesList from '@/components/app-components/faskesList';
import image4 from "@/public/doctor4.png"
=======
import DoctorList from '@/app/components/DoctorList'; // Komponen dari teman Anda
import Header from '@/app/components/header';
import FaskesList from '@/app/components/faskesList';
import FaskesCategory from '@/app/components/FaskesCategory';
import { Hospital, Stethoscope, Home } from 'lucide-react';
import image4 from "@/public/beranda/doctor4.png"
>>>>>>> Stashed changes:app/(main)/search/page.tsx
import Image from 'next/image';
import Link from 'next/link';

// Data untuk dokter unggulan (featured doctor), bisa dipindah ke lib/data.ts jika perlu
const featuredDoctor = {
    id: 4,
    name: 'dr. Clara Wulandari, M.Ked',
    specialty: 'Dokter Umum',
    imageUrl: image4, // Pastikan gambar ada di folder public
    rating: 4.9,
    totalPatients: '450+'
};

// Data baru untuk testimoni pasien
const testimonialsData = [
    { id: 1, patient: 'Roni', rating: 5.0, text: 'Dokter Clara sangat telaten dan sabar menjelaskan kondisi anak saya. Saya jadi lebih tenang setelah konsultasi.' },
    { id: 2, patient: 'Dedi', rating: 5.0, text: 'Anak saya biasanya takut kalau ke dokter, tapi dengan dr. Clara jadi lebih nyaman karena cara komunikasinya hangat sekali.' },
    { id: 3, patient: 'Fitri', rating: 5.0, text: 'Pelayanannya cepat, ramah, dan profesional. Saya percaya penuh sama dr. Clara untuk kesehatan anak saya.' },
    { id: 4, patient: 'Sinta', rating: 5.0, text: 'Penjelasannya jelas dan mudah dipahami, resep obatnya juga manjur. Terima kasih dr. Clara.' }
];

export default function TelusuriPage() {
  return (
    <div className={styles.container}>
      <Header />
      {/* === BAGIAN FASILITAS KESEHATAN === */}
      <section>
        <div className={styles.header}>
          <h2>Fasilitas Kesehatan</h2>
          <div className={styles.filters}>
            <button className={styles.active}>Semua</button>
            <button>Rumah Sakit</button>
            <button>Klinik</button>
            <button>Puskesmas</button>
          </div>
        </div>
        <div className={styles.grid}>
          {faskesData.map((faskes) => (
            <FaskesCard 
              key={faskes.id} 
              id={faskes.id} 
              name={faskes.name} 
              city={faskes.city} 
              icon={faskes.icon}
            />
          ))}
        </div>
      </section>

      {/* === BAGIAN KATA PASIEN TENTANG DOKTER (KODE BARU) === */}
      <section className={styles.section}>
        <h2 className="font-[500] self-stretch mb-4 text-lg">Kata Pasien tentang Dokter Ini</h2>
        <div className={styles.featuredCardNew}>
          {/* Kolom Kiri: Gambar Dokter */}
          <div className={styles.featuredImageContainerNew}>
            <Image 
              src={featuredDoctor.imageUrl} 
              alt={featuredDoctor.name} 
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>

          {/* Kolom Kanan: Info & Testimoni */}
          <div className={styles.featuredInfoNew}>
            <div className={styles.featuredHeader}>
              <div>
                <h2 className={styles.doctorName}>{featuredDoctor.name}</h2>
                <p className={styles.doctorSpecialty}>{featuredDoctor.specialty}</p>
                <div className={styles.doctorStats}>
                  <span>⭐ {featuredDoctor.rating}</span>
                  <span>•</span>
                  <span>{featuredDoctor.totalPatients} Total Pasien Terlayani</span>
                </div>
              </div>
              <Link href={`/pages/dokter/${featuredDoctor.id}`} className={styles.detailButton}>
                Lihat Detail <span>→</span>
              </Link>
            </div>

            <div className={styles.testimonialsGrid}>
              {testimonialsData.map((testimonial) => (
                <div key={testimonial.id} className={styles.testimonialCard}>
                  <p className={styles.testimonialText}>“{testimonial.text}”</p>
                  <p className={styles.testimonialPatient}>- {testimonial.patient} ⭐ {testimonial.rating}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* === BAGIAN DOKTER PILIHAN PASIEN === */}
      <section className={styles.section}>
        <h2 className="font-[500] self-stretch mb-4 text-lg">Dokter Pilihan Pasien</h2>
        {/* Langsung panggil komponen dari teman Anda di sini */}
        <DoctorList />
      </section>
      <section className={styles.section}>
        <h2 className="font-[500] self-stretch mb-4 text-lg">Fasilitas Kesehatan Terdekat</h2>
        <FaskesList />
      </section>
    </div>
  );
}
