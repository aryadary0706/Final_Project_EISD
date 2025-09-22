// stores/doctorStore.ts
import { create } from "zustand";

export type Doctors = {
  id: string;
  name: string;
  speciality: string;
  hospital: string;
  experience: string;
  patients: string;
};

type DoctorState = {
  doctors: Doctors[];
  addDoctor: (doctor: Doctors) => void;
  getDoctorById: (id: string) => Doctors | undefined;
  updateDoctor: (id: string, partial: Partial<Doctors>) => void;
  removeDoctor: (id: string) => void;
  clearDoctors: () => void;
};

export const useDoctorStore = create<DoctorState>((set, get) => ({
  doctors: [],

  addDoctor: (doctor) =>
    set((state) => ({
      doctors: [...state.doctors, doctor],
    })),

  getDoctorById: (id) => {
    return get().doctors.find((d) => d.id === id);
  },

  updateDoctor: (id, partial) =>
    set((state) => ({
      doctors: state.doctors.map((d) =>
        d.id === id ? { ...d, ...partial } : d
      ),
    })),

  removeDoctor: (id) =>
    set((state) => ({
      doctors: state.doctors.filter((d) => d.id !== id),
    })),

  clearDoctors: () => set({ doctors: [] }),
}));
