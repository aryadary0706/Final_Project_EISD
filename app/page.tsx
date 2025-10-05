import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import styles from "@/app/styles/sidebar.module.css";
import { CircleArrowRight } from 'lucide-react';
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-blue-50">
      {/* Header */}
      <header className="flex h-18 py-8 px-10 gap-2 justify-between items-center border-b-2 shadow-2xs">
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
          <Button variant="default" className="px-6 bg-blue-400 hover:bg-blue-300 text-white w-40 justify-between">
            <Link href="/daftar">Daftar Gratis</Link><CircleArrowRight/>
          </Button>
        </div>
      </header>

      {/* Isi konten halaman */}
      
      <main className="flex flex-col items-center justify-center text-center px-4 sm:px-8">

        <div className="mt-20 flex flex-col items-center max-w-screen w-full">
          <h1 className="text-4xl font-medium">Jembatan menuju</h1>
          <h1 className="mt-5 text-3xl font-medium bg-gradient-to-r from-blue-400 via-blue-300 to-blue-400 bg-clip-text text-transparent">
            Layanan Kesehatan Terbaik
          </h1>
          <p className="mt-5 text-gray-400 text-sm">Sahabat akses kesehatan</p>

          {/* CTA Button */}
          <div className="mt-7 flex flex-col md:flex-row gap-4 sm:gap-6 justify-center w-full sm:w-auto">
            <Button variant="default" className="bg-gradient-to-r from-blue-300 via-blue-200 to-blue-300 p-6 rounded-2xl shadow-md text-black">
              Hubungi Kami<CircleArrowRight />
            </Button>
            <Button variant="outline" className="bg-gray-50 rounded-2xl p-6 shadow-md">
              Sign Up<CircleArrowRight />
            </Button>
          </div>

          {/* Top Image */}
          <div className="mt-16 w-full max-w-5xl">
            <Image 
            src="/about/Pict_top_about.png" 
            alt="Top" 
            width={1000} 
            height={700}
            className="w-full h-auto object-contain"
            priority
            />
          </div>
        </div>
        {/* Tentang mediQ */}
        <div className="mt-20 flex flex-row justify-center gap-16">
          <h1 className="text-4xl font-medium">
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

        {/* Layanan Terpopuler */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-screen-xl w-full">
          {/* Kiri: Teks */}
          <div className="flex flex-col items-start text-left px-4 md:px-0">
            <h2 className="text-3xl font-medium">
              Layanan <br/> <span className="text-blue-400">Terpopuler</span> Kami
            </h2>
            <button className="inline-flex mt-6 px-6 py-3 rounded-lg gap-3 bg-blue-400 text-white hover:bg-blue-500">
              <span>Telusuri </span> <CircleArrowRight/>
            </button>
          </div>

          {/* Kanan: Gambar/Card */}
          <div className="w-full">
            <Image
              src="/about/Pict_mid.png"
              alt="Layanan Terpopuler"
              width={600}
              height={800}
              className="w-full h-auto rounded-xl shadow-md object-cover"
            />
          </div>
        </div>

        {/* Dokter Unggulan */}
        <div className="mt-25 max-w-screen-xl w-full">
          <h1 className="text-2xl sm:text-3xl font-medium">Dokter Unggulan</h1>
          <h1 className="text-blue-400 text-xl sm:text-2xl">Siap Membantu Anda</h1>
          <div className="mt-20 w-full">
            <Image
              src="/about/Pict_down_about.png"
              alt="List Dokter"
              width={1000}
              height={1000}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
          <div className="my-20 flex flex-row justify-between gap-20">
            <div className="flex gap-1 flex-col items-start">
              <div className="flex flex-row gap-1">
                <h1 className={styles.titleTypography}>medi</h1>
                <img
                  src="/mediQ.png"
                  alt="Logo"
                  width={30}
                  height={30}
                />
              </div>
              <div>
                <p className="text-sm text-gray-600">Jembatan menuju layanan kesehatan</p>
              </div>
            </div>
            <div className="mx-30">
            </div>
            <div className="flex flex-col gap-4 items-start text-sm">
              <span className="font-bold">Navigasi</span>
              <p>Home</p>
              <p>Tentang Kami</p>
              <p>Kontak</p>
            </div>
            <div className="flex flex-col gap-4 items-start text-sm">
              <span className="font-bold">Informasi</span>
              <p>Instagram</p>
              <p>Twitter</p>
              <p>Facebook</p>
            </div>
            <div className="flex flex-col gap-4 items-start text-sm">
              <span className="font-bold">Mitra Kerja</span>
              <p>Kemenkes</p>
              <p>BPJS</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutUs;
