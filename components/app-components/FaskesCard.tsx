// Lokasi: components/app-components/FaskesCard.tsx

import Link from 'next/link';
import Image from 'next/image';
// Mengimpor style dari halaman Telusuri agar konsisten
import styles from '@/app/pages/telusuri/telusuri.module.css';

// Langkah 1: Mendefinisikan tipe data untuk props
// Ini memastikan setiap kali kita memakai FaskesCard, kita wajib memberikan id, name, city, dan icon.
interface FaskesCardProps {
  id: number;
  name: string;
  city: string;
  icon: string; // Path ke file ikon, contoh: '/icons/hospital.svg'
}

// Langkah 2: Membuat fungsi komponen
const FaskesCard = ({ id, name, city, icon }: FaskesCardProps) => {
  return (
    // Langkah 3: Seluruh kartu adalah sebuah link
    // Saat diklik, akan mengarah ke halaman detail faskes sesuai ID-nya.
    <Link href={`/pages/faskes/${id}`} className={styles.faskesCard}>
      
      {/* Langkah 4: Menggunakan komponen Image dari Next.js.
        Ini akan mengoptimalkan gambar/ikon Anda secara otomatis.
        Prop 'icon' yang diterima sekarang digunakan di sini.
      */}
      <Image 
        src={icon} 
        alt={`Ikon untuk ${name}`} 
        width={40} 
        height={40} 
      />

      {/* Langkah 5: Menampilkan nama dan kota faskes */}
      <h4 className={styles.faskesName}>{name}</h4>
      <p className={styles.faskesCity}>{city}</p>

    </Link>
  );
};

// Langkah 6: Mengekspor komponen agar bisa diimpor dan digunakan di file lain
export default FaskesCard;