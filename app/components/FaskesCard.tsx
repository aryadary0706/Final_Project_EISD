// Lokasi: components/app-components/FaskesCard.tsx

import Link from 'next/link';
import Image from 'next/image';
// Mengimpor style dari halaman Telusuri agar konsisten
import styles from '@/app/styles/telusuri.module.css';
import { Faskes } from '@/lib/data';
import { ArrowRight } from 'lucide-react'
const FaskesCard = ({ id, name, city, imageUrl }: Faskes) => {
  return (
    <Link href={`/search/faskes/${id}`} className={styles.faskesCardNew}>
      <div className={styles.faskesImageWrapper}>
        <div className={styles.imageFaskes}>
          <Image
            src={imageUrl}
            alt={name}
            fill
            style={{ objectFit: 'cover' }}
            className={styles.faskesImage}
          />
        </div>
        <div className={styles.arrowButton}>
          <ArrowRight size={20} />
        </div>
      </div>
      <div className={styles.faskesInfo}>
        <h4 className={styles.faskesName}>{name}</h4>
        <p className={styles.faskesCity}>{city}</p>
      </div>
    </Link>
  );
};

export default FaskesCard;
