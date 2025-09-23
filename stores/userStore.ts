// stores/useUserStore.ts
import { create } from "zustand";

export type User = {
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
  registerUser: (user: User) => void;
};

export const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  updateUser: (partialUser) =>
  set((state) => {
    if (!state.user) return state;

    return {
      user: {
        ...state.user,
        ...partialUser,
        alamat: partialUser.alamat
          ? { ...state.user.alamat, ...partialUser.alamat }
          : state.user.alamat,
      },
    };
  }),
  clearUser: () => set({ user: null }),
  registerUser: (user) => set({ user }),
}));
