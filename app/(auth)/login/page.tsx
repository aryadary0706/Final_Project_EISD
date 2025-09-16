// app/(auth)/login/page.tsx
"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Globe, Facebook, Eye, EyeOff } from "lucide-react";
import Rumahsakit from "@/public/image_login.png";
import styles from "@/app/styles/sidebar.module.css";
import mediQ from "@/public/mediQ.png"
import { Separator } from "@/components/ui/separator"
import { useUserStore } from "@/stores/userStore";

const mockUsers = [
  { id: 1, nama: "Nasywa", email: "email", password: "goodpassword" },
  { id: 2, nama: "Jane Smith", email: "jane.smith@example.com", password: "securepassword" },
  { id: 3, nama: "Peter Jones", email: "peter.jones@example.com", password: "strongpassword" }
];


export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    const { setUser } = useUserStore.getState();

    e.preventDefault();
    setLoginError("");
    
    const user = mockUsers.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      setUser(user); 
      router.push("/beranda");
    } else {
      setLoginError("Email atau password salah");
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
      <div className="flex flex-col w-3/8 items-start gap-[50px] p-[44px_64px_32px_64px]">
      {/* Logo */}
        <div>
            <h1 className={styles.titleTypography}>medi
            <Image
                src={mediQ}
                alt="Q"
                width={26}
                height={32}
                className="ml-1"
            >
            </Image>
            </h1>
        </div>
        <div className="flex flex-col items-start self-stretch gap-[20px] max-w-xl">
          {/* Header */}
          <div>
            <h1 className="text-3xl font-mono">Selamat Datang Kembali!</h1>
          </div>

          <div>
            <p className="text-gray-600 text-sm">
              Masuk ke akun Anda untuk melanjutkan akses layanan kesehatan dengan mudah.{" "}
            </p>
          </div>

          <div className="flex space-x-1 text-sm items-center">
            <p className="text-black">Belum memiliki akun?</p>
            <a href="/register" className="text-blue-500 hover:underline">Sign up</a>
          </div>

          {/* Email */}
          <div className="space-y-1 w-full">
            <label className="text-md font-medium text-gray-700">Email</label>
            <div className="relative">
              <Input
                type="email"
                placeholder="masukkan email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-5 w-full py-6"
              />
            </div>
          </div>

          {/* Password */}
          <div className="space-y-1 w-full">
            <label className="text-md font-medium text-gray-700">Kata Sandi</label>
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Masukkan kata sandi"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-5 w-full py-6"
              />
            </div>
            <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-3 text-muted-foreground"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
          </div>

          {/* Button Login */}
          <Button onClick={handleLogin} variant="default" className="bg-blue-500 text-xl font-medium w-full p-7 mt-8">Masuk</Button>

          {/* Divider */}
          <div className="flex flex-col w-full items-center">
            <div className="flex items-center pt-3 pb-3">
            <Separator className="flex-1" />
            <span className="text-md text-gray-600">Atau lanjutkan dengan</span>
            <Separator className="flex-1" />
          </div>

          {/* Social Login */}
            <div className="flex gap-2 w-full">
              <Button onClick={handleLogin} variant="outline" className="flex-1 flex items-center gap-2">
                <Globe className="h-5 w-5" />
                Google
              </Button>
              <Button onClick={handleLogin} variant="outline" className="flex-1 flex items-center gap-2">
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
