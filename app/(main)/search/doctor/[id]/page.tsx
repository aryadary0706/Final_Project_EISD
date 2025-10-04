import Link from "next/link";
import allDoctors from '@/data/mockDoctors.json'; // Pastikan path ini benar
import DokterDetailClient from '@/app/(main)/search/doctor/DokterDetailClient';
import styles from '@/app/styles/dokter.module.css';
import { ChevronLeft } from "lucide-react";

// Tipe untuk data dokter, agar konsisten
type Doctor = {
    id: number;
    name: string;
    label: string;
    specialty: string;
    rating: string;
    totalPatients: string;
    image: string;
    lokasi: string;
};

// Halaman ini adalah async Server Component
export default async function DokterDetailPage({ params }: { params: { id: string } }) {
    
    // 1. Cari dokter di server
    const doctorData: Doctor | undefined = allDoctors.find(doc => doc.id.toString() === params.id);

    // 2. Handle jika dokter tidak ditemukan
    if (!doctorData) {
        return (
            <main className={styles.mainContent}>
                <header className={styles.header}>
                    <Link href="/search" className={styles.backButton}>
                        <ChevronLeft size={24} />
                    </Link>
                    <h2>Dokter Tidak Ditemukan</h2>
                </header>
                <p>Maaf, dokter yang Anda cari tidak ada dalam data kami.</p>
            </main>
        );
    }

    // 3. Render Komponen Klien dan kirim data dokter sebagai prop
    return (
        <DokterDetailClient doctorData={doctorData} />
    );
}

