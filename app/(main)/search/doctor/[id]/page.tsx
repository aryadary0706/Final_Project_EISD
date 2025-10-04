import Link from "next/link";
import allDoctors from '@/data/mockDoctors.json';
import DokterDetailClient from '@/app/(main)/search/doctor/DokterDetailClient'; // Impor komponen klien yang baru
import styles from '@/app/styles/dokter.module.css'; 
import { ChevronLeft } from "lucide-react";

// Halaman ini sekarang menjadi async Server Component yang bersih
export default async function DokterDetailPage({ params }: { params: { id: string } }) {
    
    // 1. Cari dokter di server
    const doctorData = allDoctors.find(doc => doc.id.toString() === params.id);

    // 2. Handle jika dokter tidak ditemukan
    if (!doctorData) {
        return (
            <div className={styles.mainContent}>
                <header className={styles.header}>
                    <Link href="/telusuri" className={styles.backButton}>
                        <ChevronLeft size={24} />
                    </Link>
                    <h2>Dokter Tidak Ditemukan</h2>
                </header>
                <p>Maaf, dokter yang Anda cari tidak ada dalam data kami.</p>
            </div>
        );
    }

    // 3. Render Komponen Klien dan kirim data dokter sebagai prop
    return (
        <DokterDetailClient doctorData={doctorData} />
    );
}

