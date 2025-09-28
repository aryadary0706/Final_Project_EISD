// Lokasi: lib/data.ts

export type Faskes = {
  id: number;
  type: 'Rumah Sakit' | 'Klinik' | 'Puskesmas';
  name: string;
  city: string;
  // Tambahkan properti imageUrl
  imageUrl: string; 
};

// Perbarui data faskes dengan imageUrl
export const faskesData: Faskes[] = [
  // Rumah Sakit
  { id: 1, type: 'Rumah Sakit', name: 'RS Medic Center', city: 'Bandung', imageUrl: '/faskes/rs1.png' },
  { id: 2, type: 'Rumah Sakit', name: 'RS Citra Medika', city: 'Bandung', imageUrl: '/faskes/rs2.png' },
  { id: 3, type: 'Rumah Sakit', name: 'RS Kasih Ibu', city: 'Bandung', imageUrl: '/faskes/rs3.png' },
  { id: 4, type: 'Rumah Sakit', name: 'RS Bina Sejahtera', city: 'Bandung', imageUrl: '/faskes/rs4.png' },
  { id: 5, type: 'Rumah Sakit', name: 'RS Mitra Keluarga', city: 'Bandung', imageUrl: '/faskes/rs5.png' },
  { id: 6, type: 'Rumah Sakit', name: 'RS Persada Bhakti', city: 'Bandung', imageUrl: '/faskes/rs6.png' },

  // Klinik
  { id: 7, type: 'Klinik', name: 'Harmony Dental', city: 'Bandung', imageUrl: '/faskes/klinik1.png' },
  { id: 8, type: 'Klinik', name: 'Harmoni Medika', city: 'Bandung', imageUrl: '/faskes/klinik2.png' },
  { id: 9, type: 'Klinik', name: 'Cahaya Kasih', city: 'Bandung', imageUrl: '/faskes/klinik3.png' },
  { id: 10, type: 'Klinik', name: 'Citra Husada', city: 'Bandung', imageUrl: '/faskes/klinik4.png' },
  
  // Puskesmas
  { id: 11, type: 'Puskesmas', name: 'Sukamaju', city: 'Bandung', imageUrl: '/faskes/puskesmas1.png' },
  { id: 12, type: 'Puskesmas', name: 'Melati Indah', city: 'Bandung', imageUrl: '/faskes/puskesmas2.png' },
  { id: 13, type: 'Puskesmas', name: 'Suka Damai', city: 'Bandung', imageUrl: '/faskes/puskesmas3.png' },
  { id: 14, type: 'Puskesmas', name: 'Sentosa Raya', city: 'Bandung', imageUrl: '/faskes/puskesmas4.png' },
  { id: 15, type: 'Puskesmas', name: 'Bina Karya', city: 'Bandung', imageUrl: '/faskes/puskesmas5.png' },
];

// ... Sisa data Anda yang lain
