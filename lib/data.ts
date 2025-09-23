// Lokasi: lib/data.ts

// Tipe data untuk Fasilitas Kesehatan
export type Faskes = {
  id: number;
  type: 'Rumah Sakit' | 'Klinik' | 'Puskesmas';
  name: string;
  city: string;
  // Ganti path ikon sesuai dengan lokasi ikon di folder `public` Anda
  icon: string; 
};

// Data Faskes
export const faskesData: Faskes[] = [
  { id: 1, type: 'Rumah Sakit', name: 'RS Medic Center', city: 'Bandung', icon: '/icons/hospital.svg' },
  { id: 2, type: 'Rumah Sakit', name: 'RS Citra Medika', city: 'Bandung', icon: '/icons/hospital.svg' },
  { id: 3, type: 'Rumah Sakit', name: 'RS Kasih Ibu', city: 'Bandung', icon: '/icons/hospital.svg' },
  { id: 4, type: 'Rumah Sakit', name: 'RS Bina Sejahtera', city: 'Bandung', icon: '/icons/hospital.svg' },
  { id: 5, type: 'Rumah Sakit', name: 'RS Mitra Keluarga', city: 'Bandung', icon: '/icons/hospital.svg' },
  { id: 6, type: 'Rumah Sakit', name: 'RS Persada Bhakti', city: 'Bandung', icon: '/icons/hospital.svg' },
  { id: 7, type: 'Klinik', name: 'Harmony Dental', city: 'Bandung', icon: '/icons/clinic.svg' },
  { id: 8, type: 'Klinik', name: 'Harmoni Medika', city: 'Bandung', icon: '/icons/clinic.svg' },
  { id: 9, type: 'Klinik', name: 'Cahaya Kasih', city: 'Bandung', icon: '/icons/clinic.svg' },
  { id: 10, type: 'Klinik', name: 'Citra Husada', city: 'Bandung', icon: '/icons/clinic.svg' },
];