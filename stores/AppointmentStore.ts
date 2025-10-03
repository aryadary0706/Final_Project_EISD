// stores/appointmentStore.ts
import { create } from "zustand";

export type Appointment = {
  id: number;
  doctor: {
    name: string;
    specialty: string;
    image?: string;
  };
  date: string;
  time: string;
  status: string;
  facility: string;
  patient: {
    name: string;
    symptom: string;
    allergy?: string;
  };
  diagnosis: {
    physicalExam: string[];
    temporary?: string;
    plan?: string;
  };
};

type AppointmentState = {
  appointments: Appointment[];
  selectedAppointment: Appointment | null;
  source: "schedule" | "riwayat" | null;

  addAppointment: (appointment: Appointment) => void;
  updateAppointment: (id: number, partial: Partial<Appointment>) => void;
  removeAppointment: (id: number) => void;
  clearAppointments: () => void;

  openDetailAppointment: (appointment: Appointment, source: "schedule" | "riwayat") => void;
  closeDetailAppointment: () => void;
};

export const useAppointmentStore = create<AppointmentState>((set) => ({
  appointments: [],
  selectedAppointment: null,
  source: null,

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

  openDetailAppointment: (appointment, source) =>
    set(() => ({
      selectedAppointment: appointment,
      source,
    })),
  closeDetailAppointment: () =>
    set(() => ({
      selectedAppointment: null,
      source: null,
    })),
}));
