"use client";

import styles from '@/app/styles/dokter.module.css'; // Menggunakan style dari halaman dokter
import { CheckCircle } from 'lucide-react';
import SuccessTickIcon from './SuccessTickIcon';

// Tentukan tipe untuk props agar lebih aman dengan TypeScript
interface PopupProps {
    onClose: () => void;
    onNavigate: () => void;
}

export default function ScheduleSuccessPopup({ onClose, onNavigate }: PopupProps) {

    return (
        // Latar belakang gelap yang menutupi seluruh layar
        <div className={styles.popupBackdrop} onClick={onClose}>
            
            {/* Konten pop-up di tengah. onClick-nya untuk mencegah pop-up tertutup saat diklik di dalam area ini */}
            <div className={styles.popupContent} onClick={(e) => e.stopPropagation()}>
                
                {/* Ikon centang besar */}
                <div className={styles.popupIconWrapper}>
                    <SuccessTickIcon />
                </div>

                {/* Teks utama */}
                <h2 className={styles.popupTitle}>Jadwal temu berhasil dibuat!</h2>

                {/* Tombol untuk navigasi */}
                <button className={styles.popupButton} onClick={onNavigate}>
                    Lihat rincian
                </button>
            </div>
        </div>
    );
}