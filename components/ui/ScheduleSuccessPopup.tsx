"use client";

import styles from '@/app/styles/dokter.module.css'; // Sesuaikan path jika perlu
import SuccessTickIcon from '@/components/icons/SuccessTickIcon'; 

// Tentukan tipe untuk props
interface PopupProps {
    onClose: () => void;
    onNavigate: () => void;
}

export default function ScheduleSuccessPopup({ onClose, onNavigate }: PopupProps) {
    return (
        // Latar belakang gelap
        <div className={styles.popupBackdrop} onClick={onClose}>
            
            {/* Konten pop-up */}
            <div className={styles.popupContent} onClick={(e) => e.stopPropagation()}>
                
                {/* Ikon Kustom Anda */}
                <div className={styles.popupIconWrapper}>
                    <SuccessTickIcon />
                </div>

                {/* Teks utama */}
                <h2 className={styles.popupTitle}>Jadwal temu berhasil dibuat!</h2>

                {/* Tombol navigasi */}
                <button className={styles.popupButton} onClick={onNavigate}>
                    Lihat rincian
                </button>
            </div>
        </div>
    );
}