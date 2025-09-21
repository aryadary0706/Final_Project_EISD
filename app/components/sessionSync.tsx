// app/components/SessionToZustandSync.tsx
"use client";

import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useUserStore } from "@/stores/userStore";

export function SessionToZustandSync() {
  const { data: session, status } = useSession();
  const { setUser, clearUser } = useUserStore();

  useEffect(() => {
    if (status === "authenticated" && session?.user) {
      // Sesuaikan struktur user dengan tipe Zustand
      const user = {
        id: session.user.id as number, // pastikan tipenya sesuai
        name: session.user.name || "",
        email: session.user.email || "",
        umur: session.user.umur,
        beratBadan: session.user.beratBadan,
        tinggiBadan: session.user.tinggiBadan,
        gender: session.user.gender,
        golonganDarah: session.user.golonganDarah,
        alergi: session.user.alergi,
        alamat: session.user.alamat,
      };

      setUser(user); // 👉 Simpan ke Zustand
    } else if (status === "unauthenticated") {
      clearUser(); // 👉 Hapus dari Zustand saat logout
    }
  }, [session, status, setUser, clearUser]);

  return null; // Komponen ini tidak merender apa-apa
}