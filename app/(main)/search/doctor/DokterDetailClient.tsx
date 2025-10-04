"use client"; // Menandakan ini adalah Client Component

import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import Image from "next/image";
import Link from "next/link";
import styles from '@/app/styles/dokter.module.css'; // Sesuaikan path jika perlu
import { ChevronLeft, Upload, Venus, Mars } from 'lucide-react';
import ReviewList from "@/app/components/ReviewList"; // Sesuaikan path jika perlu
import ScheduleSuccessPopup from "@/app/components/ScheduleSuccessPopup";

// 1. Definisikan Tipe untuk objek Dokter
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

// Data dummy untuk jadwal, karena ini bagian dari interaksi klien
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

// 2. Terapkan Tipe pada props komponen
export default function DokterDetailClient({ doctorData }: { doctorData: Doctor }) {
    const [selectedDate, setSelectedDate] = useState(26);
    const [selectedTime, setSelectedTime] = useState('08:00');
    const [selectedGender, setSelectedGender] = useState<string | null>(null);
    const [gejalaText, setGejalaText] = useState('');
    const [showPopup, setShowPopup] = useState(false); // State baru untuk pop-up
    const router = useRouter(); // Hook untuk navigasi
    const [noAllergy, setNoAllergy] = useState(false);

    const doctorFirstName = doctorData.name.split(',')[0].replace('dr. ', '');

    const handleBuatJadwal = () => {
        // Di sini nantinya bisa ditambahkan logika untuk mengirim data form
        console.log("Tombol Buat Jadwal diklik!");
        setShowPopup(true); // Tampilkan pop-up
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    const handleLihatRincian = () => {
        // Navigasi ke halaman riwayat
        router.push('/riwayat'); 
    };

    return (
        <div className={styles.pageWrapper}>
            <main className={styles.mainContent}>
                <header className={styles.header}>
                    <Link href="/telusuri" className={styles.backButton}>
                        <ChevronLeft size={24} />
                    </Link>
                    <div>
                        <h2>{doctorData.specialty}</h2>
                        <p>{doctorData.lokasi}</p>
                    </div>
                </header>

                {/* <section className={styles.doctorBanner}>
                    <div className={styles.bannerText}><h1>{doctorFirstName.toUpperCase()}</h1></div>
                    <div className={styles.bannerImage}><Image src={doctorData.image} alt={doctorData.name} fill style={{ objectFit: 'contain', objectPosition: 'bottom' }} /></div>
                    <div className={styles.bannerStats}>
                        <div className={styles.statItem}><span>10+</span><p>Tahun Pengalaman</p></div>
                        <div className={styles.statItem}><span>{doctorData.totalPatients}</span><p>Pasien Terlayani</p></div>
                    </div>
                </section> */}

                {/* Banner Dokter (KODE BARU) */}
                <section className={styles.doctorBanner}>
                    {/* Teks Nama Besar di Latar Belakang */}
                    <div className={styles.bannerTextBackground}>
                        <h1>CLARA</h1>
                        <h1>WULANDA</h1>
                    </div>

                    {/* Gambar Dokter */}
                    <div className={styles.bannerImage}>
                        <Image 
                            src={doctorData.image} 
                            alt={doctorData.name} 
                            fill 
                            style={{ objectFit: 'contain', objectPosition: 'bottom center' }} 
                        />
                    </div>

                    {/* Statistik Dokter */}
                    <div className={styles.bannerStats}>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>10+</span>
                            <p className={styles.statLabel}>Tahun<br/>Pengalaman</p>
                        </div>
                        <div className={styles.statSeparator}></div>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>450+</span>
                            <p className={styles.statLabel}>Pasien<br/>Terlayani</p>
                        </div>
                    </div>

                    {/* Logo mediQ */}
                    <div className={styles.bannerLogo}>
                        <p>mediQ</p>
                    </div>
                </section>
                
                {/* Bagian Jadwal & Waktu */}
                <section className={styles.scheduleSection}>
                    <div className={styles.scheduleJudul}>
                        <h4 className={styles.jadwalBefore}>Jadwal Tersedia</h4>
                        <p className={styles.scheduleRange}>{scheduleData.range}</p>
                    </div>
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
                        {scheduleData.times.map((time, index) => (
                            <button
                                key={`${time}-${index}`} // GANTI DI SINI
                                className={`${styles.timeButton} ${selectedTime === time ? styles.selected : ''}`}
                                onClick={() => setSelectedTime(time)}
                            >
                                {time}
                            </button>
                        ))}
                    </div>
                </section>

                {/* Bagian Form */}
                <section className={styles.formSection}>
                    {/* ... (Salin dan tempel kode form lengkap di sini) ... */}
                    <h4>Informasi Pasien</h4>
                  <p className={styles.formSubtitle}>Daftarkan saya sebagai pasien</p>
                    
                    <div className={styles.formGrid}>
                        <div className={styles.formGroup}>
                            <label htmlFor="nama">Nama Pasien</label>
                            <input type="text" id="nama" placeholder="John Doe" className={styles.formInput} />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="umur">Umur Pasien</label>
                            <input type="text" id="umur" placeholder="Tahun" className={styles.formInput} />
                        </div>

                        <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                            <label>Jenis Kelamin</label>
                            <div className={styles.genderSelector}>
                                {/* Opsi Perempuan */}
                                <label 
                                    className={`${styles.genderOption} ${selectedGender === 'perempuan' ? styles.selected : ''}`}
                                    onClick={() => setSelectedGender('perempuan')}
                                >
                                    <input type="radio" name="gender" value="perempuan" className={styles.hiddenRadio} />
                                    <Venus size={24} className={styles.genderIcon} />
                                    <span>Perempuan</span>
                                </label>

                                {/* Opsi Pria */}
                                <label 
                                    className={`${styles.genderOption} ${selectedGender === 'pria' ? styles.selected : ''}`}
                                    onClick={() => setSelectedGender('pria')}
                                >
                                    <input type="radio" name="gender" value="pria" className={styles.hiddenRadio} />
                                    <Mars size={24} className={styles.genderIcon} />
                                    <span>Pria</span>
                                </label>
                            </div>
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="berat">Berat Badan</label>
                            <input type="text" id="berat" placeholder="kg" className={styles.formInput} />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="tinggi">Tinggi Badan</label>
                            <input type="text" id="tinggi" placeholder="cm" className={styles.formInput} />
                        </div>

                        <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                            <label>Golongan Darah</label>
                            <div className={styles.radioGroup}>
                                <label className={styles.radioLabel}><input type="radio" name="bloodtype" value="A" /> A</label>
                                <label className={styles.radioLabel}><input type="radio" name="bloodtype" value="B" /> B</label>
                                <label className={styles.radioLabel}><input type="radio" name="bloodtype" value="AB" /> AB</label>
                                <label className={styles.radioLabel}><input type="radio" name="bloodtype" value="O" /> O</label>
                            </div>
                        </div>
                        
                        <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                            <label>Riwayat Alergi Obat</label>
                            <textarea
                                id="alergi"
                                placeholder={noAllergy ? "Tidak ada riwayat alergi" : "Beritahu dokter riwayat alergi anda"}
                                rows={4}
                                className={styles.formInput}
                                disabled={noAllergy} // <-- Textarea dinonaktifkan jika noAllergy true
                            />
                            <div className={styles.checkboxWrapper}>
                                <label className={styles.checkboxLabel}>
                                    <input 
                                        type="checkbox" 
                                        checked={noAllergy} 
                                        onChange={(e) => setNoAllergy(e.target.checked)} 
                                    />
                                    <span>Tidak ada</span>
                                </label>
                            </div>
                        </div>
                        
                        <div className={`${styles.sideBySideContainer} ${styles.fullWidth}`}>
                            {/* Kolom Gejala */}
                            <div className={styles.formGroup}>
                                <div className={styles.fieldHeader}>
                                    <label htmlFor="gejala">Gejala</label>
                                    <span className={styles.charCount}>({gejalaText.length}/100)</span>
                                </div>
                                <textarea 
                                    id="gejala" 
                                    placeholder="Apa yang kamu rasakan?" 
                                    rows={6} 
                                    maxLength={100}
                                    className={styles.formInput}
                                    value={gejalaText}
                                    onChange={(e) => setGejalaText(e.target.value)}
                                />
                            </div>
                            
                            {/* Kolom Dokumen Medis */}
                            <div className={styles.formGroup}>
                                <div className={styles.fieldHeader}>
                                    <label>Dokumen Medis</label>
                                    <span className={styles.optionalText}>(opsional)</span>
                                </div>
                                <div className={styles.uploadBox}>
                                    <Upload size={24} className={styles.uploadIcon} />
                                    <p>
                                        <span className={styles.uploadLink}>Klik untuk mengunggah</span> atau seret dan lepas
                                    </p>
                                    <span className={styles.uploadHint}>(Maks. ukuran file 25 MB)</span>
                                </div>
                                <p className={styles.fileFormatHint}>
                                    Format file yang didukung: PDF, PNG, JPG/JPEG, DOCX
                                </p>
                            </div>

                        </div>
                    </div>

                    <div className={styles.reminder}>
                        <div>
                            <p>Tambah Pengingat</p>
                            <span className={styles.reminderHint}>mediQ akan mengirimkan pengingat melalui email anda. Pastikan alamat email yang Anda gunakan benar dan aktif, karena mediQ akan mengirimkan pengingat jadwal janji temu melalui email ini.</span>
                        </div>
                        <label className={styles.switch}>
                            <input type="checkbox" defaultChecked />
                            <span className={styles.slider}></span>
                        </label>
                    </div>

                    <button className={styles.submitButton} onClick={handleBuatJadwal}>
                        Buat Jadwal Baru
                    </button>
                </section>

            </main>
            <aside className={styles.rightSidebar}>
                <ReviewList />
            </aside>

            {showPopup && (
                <ScheduleSuccessPopup 
                    onClose={handleClosePopup} 
                    onNavigate={handleLihatRincian} 
                />
            )}
        </div>
    );
}

