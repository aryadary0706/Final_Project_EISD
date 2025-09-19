import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import styles from "@/app/styles/sidebar.module.css";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-blue-300">
      {/* Header */}
      <header className="flex h-18 py-8 px-10 gap-2 justify-between items-center shadow-sm bg-white">
        <div className="flex items-center gap-1">
          <h1 className={styles.titleTypography}>medi</h1>
          <img
            src="/mediQ.png"
            alt="Logo"
            width={30}
            height={30}
          />
        </div>

        <div className="space-x-5">
          <Button variant="default" className="px-6 bg-blue-500 text-white">
            <Link href="/login">Login</Link>
          </Button>
          <Button variant="default" className="px-6 bg-blue-500 text-white">
            <Link href="/daftar">Daftar</Link>
          </Button>
        </div>
      </header>

      {/* Isi konten halaman */}
      <main className="p-10">
        <h2 className="text-xl font-semibold">Tentang Kami</h2>
        <p className="mt-4 max-w-xl">
          Ini adalah halaman tentang kami. Kamu bisa menambahkan isi deskripsi
          di sini sesuai kebutuhan.
        </p>
      </main>
    </div>
  );
};

export default AboutUs;
