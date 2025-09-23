// stores/appointmentStore.ts
import { create } from "zustand";
import { User } from "./userStore";
import { Doctors } from "./DoctorStore";

export type Appointment = {
  id: string;         // ID unik appointment
  queue: string;      // nomor antrian
  user: User;         // pasien
  date: Date;         // tanggal appointment
  faskes: string;     // fasilitas kesehatan
  doctor: Doctors;    // dokter
  time: string;       // jam appointment
};

type AppointmentState = {
  appointments: Appointment[];
  addAppointment: (appointment: Appointment) => void;
  updateAppointment: (id: string, partial: Partial<Appointment>) => void;
  removeAppointment: (id: string) => void;
  clearAppointments: () => void;
};

export const useAppointmentStore = create<AppointmentState>((set) => ({
  appointments: [],

  addAppointment: (appointment) =>
    set((state) => ({
      appointments: [...state.appointments, appointment],
    })),

  updateAppointment: (id, partial) =>
    set((state) => ({
      appointments: state.appointments.map((a) =>
        a.id === id ? { ...a, ...partial } : a
      ),
    })),

  removeAppointment: (id) =>
    set((state) => ({
      appointments: state.appointments.filter((a) => a.id !== id),
    })),

  clearAppointments: () => set({ appointments: [] }),
}));
