"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/stores/userStore";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Rumahsakit from "@/public/image_login.png";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Eye, EyeOff } from "lucide-react";
import { Globe, Facebook } from "lucide-react";
import mediQ from "@/public/mediQ.png";
import { mockUsers } from "@/data/mockUsers.json";

export default function LoginPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const router = useRouter();

  const { registerUser } = useUserStore();

  let mockUsersList = mockUsers

  const isPasswordValid = password.length >= 8 && /\d/.test(password);
  const isFormValid =
    fullName.trim() !== "" &&
    email.trim() !== "" &&
    isPasswordValid &&
    password === confirmPass;

  // Handler untuk mendaftarkan pengguna
  const handleRegister = () => {
      // Periksa kembali validitas form sebelum mendaftarkan
      if (isFormValid) {
        const lastId = mockUsersList.length > 0 ? mockUsers[mockUsers.length - 1].id : 0;
        const newUser = {
          // ID sementara, idealnya dihasilkan dari backend
          id: lastId + 1,
          name: fullName,
          email: email,
        };
        // Panggil fungsi registerUser dari store
        registerUser(newUser);
        // Tampilkan notifikasi atau navigasi ke halaman lain setelah berhasil
        console.log("Pengguna berhasil didaftarkan:", newUser);
        // Reset form setelah pendaftaran
        setFullName("");
        setEmail("");
        setPassword("");
        setConfirmPass("");
      } else {
        console.error("Form tidak valid");
      }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side (Image) */}
      <div className="hidden md:flex w-5/8 items-center justify-center bg-gray-100">
        <Image
          src={Rumahsakit}
          alt="Logo"
          width={500}
          height={700}
        />
      </div>

      {/* Right Side (Form) */}
      <div className="flex flex-col w-full md:w-3/8 items-start gap-[32px] p-[44px_64px_32px_64px]">
        {/* Logo */}
        <div>
          <h1 className="flex flex-row font-poppins text-2xl font-semibold leading-tight bg-gradient-to-r from-blue-400 via-blue-200 to-blue-400 bg-clip-text text-transparent">
            medi
            <Image
              src={mediQ}
              alt="Q"
              width={26}
              height={32}
              className="ml-1"
            />
          </h1>
        </div>
        <div className="flex flex-col items-start self-stretch gap-[32px] max-w-xl">
          {/* Header */}
          <div className="space-y-2">
            <h1 className="text-2xl font-semibold pb-3">
              Mulai Perjalanan Sehatmu Bersama mediQ
            </h1>
            <p className="text-sm text-muted-foreground">
              Daftarkan diri Anda dan nikmati kemudahan akses layanan kesehatan tanpa antre.
            </p>
            <p className="text-sm">
              Sudah memiliki akun?{" "}
              <a href="/login" className="text-sky-600 hover:underline">
                Sign in
              </a>
            </p>
          </div>

          {/* Full Name */}
          <div className="space-y-1 w-full">
            <label className="text-md font-[600px] text-gray-700"> Nama</label>
            <Input
              placeholder="John Doe"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="pl-5 w-full py-5"
            />
          </div>

          {/* Email */}
          <div className="space-y-1 w-full">
            <label className="text-md font-[600px] text-gray-700"> Email</label>
            <Input
              type="email"
              placeholder="mediQ@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-5 w-full py-5"
            />
          </div>

          {/* Password */}
          <div className="space-y-1 w-full">
            <label className="text-md font-[600px] text-gray-700"> Kata Sandi</label>
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Buat kata sandi"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-5 w-full py-5"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-3 text-muted-foreground"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
              <div className="mt-2 space-y-1 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Checkbox checked={password.length >= 8} disabled />
                  <span>Kata sandi minimal 8 karakter</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox checked={/\d/.test(password)} disabled />
                  <span>Kata sandi harus mengandung angka (0-9)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Confirm Password */}
          <div className="w-full">
            <label className="text-md font-[600px] text-gray-700">Konfirmasi Kata Sandi</label>
            <div className="relative">
              <Input
                type={showConfirm ? "text" : "password"}
                placeholder="Masukkan kata sandi"
                value={confirmPass}
                onChange={(e) => setConfirmPass(e.target.value)}
                className="pl-5 w-full py-5"
              />
              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute right-2 top-3 text-muted-foreground"
              >
                {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <Button
            variant="secondary"
            className="w-full p-6 mt-1"
            disabled={!isFormValid}
            onClick={handleRegister}
          >
            Buat Akun
          </Button>

          {/* Divider */}
          <div className="flex flex-col w-full items-center">
            <div className="flex items-center pt-1 pb-3">
              <Separator className="flex-1" />
              <span className="text-md text-gray-600">Atau lanjutkan dengan</span>
              <Separator className="flex-1" />
            </div>

            {/* Social Login */}
            <div className="flex gap-2 w-full">
              <Button variant="outline" className="flex-1 flex items-center gap-2">
                <Globe className="h-5 w-5" />
                Google
              </Button>
              <Button variant="outline" className="flex-1 flex items-center gap-2">
                <Facebook className="h-5 w-5 text-blue-600" />
                Facebook
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}