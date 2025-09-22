import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import styles from "@/app/styles/sidebar.module.css";
import { CircleArrowRight } from 'lucide-react';
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="flex h-18 py-8 px-10 gap-2 justify-between items-center border border-b-2 shadow-lg bg-white">
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
          <Button variant="link" className="px-3 font-light text-black border-0">
            <Link href="/login">Sign In</Link>
          </Button>
          <Button variant="default" className="px-6 bg-blue-400 text-white w-40 justify-between">
            <Link href="/daftar">Daftar Gratis</Link><CircleArrowRight/>
          </Button>
        </div>
      </header>

      {/* Isi konten halaman */}
      <main className="flex flex-col items-center justify-center text-center">
        <div className="mt-30 flex flex-col items-center">
          <h1 className="text-4xl font-medium">Jembatan menuju</h1>
          <h1 className="mt-5 text-3xl font-medium bg-gradient-to-r from-blue-400 via-blue-300 to-blue-400 bg-clip-text text-transparent">
            Layanan Kesehatan Terbaik
          </h1>
          <p className="mt-5 text-gray-400 text-sm">Sahabat akses kesehatan</p>

          <div className="mt-7 flex flex-row gap-6 justify-center">
            <Button variant="default" className="bg-gradient-to-r from-blue-300 via-blue-200 to-blue-300 p-6 rounded-4xl w-47 justify-between text-black shadow-md">
              Hubungi Kami<CircleArrowRight />
            </Button>
            <Button variant="outline" className="bg-gray-50 rounded-4xl w-47 justify-between p-6 shadow-md">
              Sign Up<CircleArrowRight />
            </Button>
          </div>

          <div className="mt-15 mx-15">
            <Image src="/about/Pict_top_about.png" alt="Top" width={1200} height={1200} />
          </div>

          <div className="mt-20 flex flex-row justify-center gap-16">
            <h1 className="text-4xl font-semibold">
              <span className="bg-gradient-to-r mr-4 from-blue-500 to-blue-800 bg-clip-text text-transparent">
                Tentang
              </span>
              <span className="inline-flex items-center gap-0.5 bg-gradient-to-r from-blue-400 via-blue-300 to-blue-400 bg-clip-text text-transparent">
                medi
                <img
                  src="/mediQ.png"
                  alt="Logo"
                  className="inline-block align-middle"
                  width={30}
                  height={30}
                  loading="lazy"
                />
              </span>
            </h1>
          </div>
          <div className="mt-10 max-w-4xl text-center">
            <p className="text-gray-400">
              MediQ hadir sebagai solusi layanan kesehatan digital yang memudahkan pasien untuk terhubung dengan dokter, rumah sakit, dan fasilitas kesehatan terpercaya. Kami berkomitmen untuk memberikan pengalaman konsultasi dan layanan kesehatan yang mudah, cepat, dan aman.
            </p>
          </div>
          <div className="mt-30">
            <div className="w-full max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 text-center divide-y md:divide-y-0 md:divide-x divide-gray-200">
            <div className="p-6">
              <h3 className="text-3xl font-bold text-blue-800">50.000+</h3>
              <p className="text-gray-600 mt-2">Pengguna Terdaftar</p>
            </div>
            <div className="p-6">
              <h3 className="text-3xl font-bold text-blue-800">500+</h3>
              <p className="text-gray-600 mt-2">Dokter Mitra dari<br/>Berbagai Spesialis</p>
            </div>
            <div className="p-6">
              <h3 className="text-3xl font-bold text-blue-800">120+</h3>
              <p className="text-gray-600 mt-2">Fasilitas Kesehatan<br/>Terpercaya</p>
            </div>
            <div className="p-6">
              <h3 className="text-3xl font-bold text-blue-800">98%</h3>
              <p className="text-gray-600 mt-2">Tingkat Kepuasan Pasien</p>
            </div>
        </div>
        </div>
        <div className="flex min-h-[500px] items-center justify-center gap-12 px-8">
          {/* Kiri: Teks */}
          <div className="w-1/3 flex flex-col items-start">
            <h2 className="text-3xl font-medium text-start">
              Layanan <br/> <span className="text-blue-400">Terpopuler</span> Kami
            </h2>
            <button className="inline-flex w-auto mt-6 px-6 py-3 rounded-lg gap-7 bg-blue-400 text-white hover:bg-blue-500">
              <span>Telusuri </span> <CircleArrowRight/>
            </button>
          </div>

          {/* Kanan: Gambar/Card */}
          <div className="w-2/3">
            <img
              src="/about/Pict_mid.png"
              alt="Layanan Terpopuler"
              className="w-full h-auto rounded-xl shadow-md"
            />
          </div>
        </div>
        <div className="mt-15 mb-15 space-y-2 text-2xl font-medium">
          <h1 >Dokter Unggulan</h1>
          <h1 className="text-blue-400">Siap Membantu Anda</h1>
          <div className="mt-20">
            <Image
              src="/about/Pict_down_about.png"
              alt="List Dokter"
              width={1000}
              height={1000}
            />
          </div>
        </div>
        </div>
      </main>
    </div>
  );
};

export default AboutUs;
