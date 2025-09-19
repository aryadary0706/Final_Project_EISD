// stores/useUserStore.ts
import { create } from "zustand";

type User = {
  id: number;
  name: string;
  email: string;
  umur?: number;
  beratBadan?: number;
  tinggiBadan?: number;
  gender?: string;
  golonganDarah?: string;
  alergi?: string;
  alamat?: {
    negara?: string;
    kota?: string;
    kodePos?: string;
  };
};

type UserState = {
  user: User | null;
  setUser: (user: User) => void;
  updateUser: (partialUser: Partial<User>) => void;
  clearUser: () => void;
};

export const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  updateUser: (partialUser) =>
    set((state) =>
      state.user ? { user: { ...state.user, ...partialUser } } : state
    ),
  clearUser: () => set({ user: null })
}));
