'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { Mars, Venus } from 'lucide-react';
import Link from 'next/link';
import { Edit, MapPin, Plus, User } from 'lucide-react';
import React, { useState } from 'react';
import SettingsAccount from '@/app/components/settingsaccount';
import { useUserStore } from "@/stores/userStore";


export default function ProfilePage() {
  const [selectedGender, setSelectedGender] = useState('perempuan');
  const [selectedBloodtype, setSelectedBloodtype] = useState('A');
  const [hasAllergies, setHasAllergies] = useState(true);
  const user = useUserStore((state) => state.user);
  const updateUser = useUserStore((state) => state.updateUser);

  const handleGenderChange = (gender: string) => {
    setSelectedGender(gender);
    updateUser({ gender });
  };

  const handleBloodtypeChange = (bloodtype: string) => {
    setSelectedBloodtype(bloodtype);
    updateUser({ golonganDarah: bloodtype });
  };

  const handleAllergiesChange = (value: string) => {
    updateUser({ alergi: value });
  };

  const genderOptions = [
    { value: 'perempuan', label: 'Perempuan', icon: Venus },
    { value: 'pria', label: 'Pria', icon: Mars },
  ];

  const bloodTypeOptions = [
    { value: 'A', label: 'A' },
    { value: 'B', label: 'B' },
    { value: 'O', label: 'O' },
    { value: 'AB', label: 'AB' },
  ];

  return (
    <div className='flex flex-row'>
      <main className="flex flex-col items-start px-6 pt-11 pb-8 gap-4">
        {/* Header Profil */}
        <div className="flex items-center mb-8 gap-10">
          <Link href="/">
            <Avatar className="flex h-36 w-36">
              <AvatarImage src="/placeholder-avatar.jpg" alt="Naswa Gyna Sahira" />
              <AvatarFallback>NS</AvatarFallback>
            </Avatar>
          </Link>
          <div className="flex flex-col items-start gap-2">
            <h1 className="text-2xl font-medium">{user?.nama || "User"}</h1>
            <div className="flex items-center text-md text-gray-500 ">
              <MapPin className="h-4 w-4 mr-1" />
              <span>Bergabung Mei 2025</span>
              <span className="mx-6">·</span>
              <span>Bandung, Indonesia</span>
            </div>
          </div>
        </div>

        {/* Bagian Informasi Pribadi */}
        <Card className="mb-6 w-full outline-0 shadow-md">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-2xl font-semibold">Informasi Pribadi</CardTitle>
            <Button variant="outline" size="lg">
              <Edit className="h-4 w-4 mr-2" />
              Edit
            </Button>
          </CardHeader>
          <CardContent className="grid gap-6">
            <div className="grid grid-cols-2 gap-15 items-center self-stretch">
              <div>
                <Label className="mb-3 font-semibold text-[16px]" htmlFor="nama-lengkap">Nama Lengkap</Label>
                <Input className="p-6" id="nama-lengkap" value={user?.nama   || ""} readOnly />
              </div>
              <div>
                <Label className="block mb-3 font-semibold text-[16px]" htmlFor="umur-pasien">Umur Pasien</Label>
                <div className="flex items-center">
                  <Input id="umur-pasien" value={user?.umur || ""}  className="p-6 w-[100px]" readOnly />
                  <span className="ml-2">Tahun</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-15 items-center self-stretch">
              <div>
                <Label className="block mb-3 font-semibold text-[16px]" htmlFor="berat-badan">Berat Badan</Label>
                <div className="flex items-center">
                  <Input id="berat-badan" value={user?.beratBadan || ""} className="w-[100px] p-6" readOnly />
                  <span className="ml-2">kg</span>
                </div>
              </div>
              <div>
                <Label className="block mb-3 font-semibold text-[16px]" htmlFor="tinggi-badan">Tinggi Badan</Label>
                <div className="flex items-center">
                  <Input id="tinggi-badan" value={user?.tinggiBadan || ""}className="w-[100px] p-6" readOnly />
                  <span className="ml-2">cm</span>
                </div>
              </div>
            </div>
            {/* Gender */}
            <div>
              <Label className="block mb-3 font-semibold text-[16px]">Jenis Kelamin</Label>
              <div className="grid grid-cols-2 gap-4 mt-2">
                {genderOptions.map((option) => (
                  <label
                    key={option.value}
                    htmlFor={`gender-${option.value}`}
                    className={`
                      relative flex flex-col items-start justify-center p-4 rounded-lg cursor-pointer
                      border-2
                      ${selectedGender === option.value ? 'border-blue-500 text-blue-500' : 'border-gray-300 text-gray-400'}
                    `}
                  >
                    <input
                      type="checkbox"
                      id={`gender-${option.value}`}
                      name="jenisKelamin"
                      value={option.value}
                      checked={selectedGender === option.value}
                      onChange={() => handleGenderChange(option.value)}
                      className="sr-only"
                    />
                    <option.icon className="w-8 h-8 mb-1" />
                    <span className="text-base font-medium">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>
            {/* Golongan Darah */}
            <div>
              <Label className='font-bold text-[16px]'>Golongan Darah</Label>
              <RadioGroup
                value={selectedBloodtype}
                onValueChange={handleBloodtypeChange}
                className="flex mt-2 space-x-4"
              >
                {bloodTypeOptions.map((option) => (
                  <div key={option.value} className="flex items-center space-x-2">
                    <RadioGroupItem value={option.value} id={`blood-${option.value}`} />
                    <Label className="text-lg" htmlFor={`blood-${option.value}`}>{option.label}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
            {/* Riwayat Alergi */}
            <div className="mt-4">
              <Label className='font-bold text-[16px]' htmlFor="riwayat-alergi">Riwayat Alergi Obat</Label>
              <p className="text-sm text-muted-foreground mt-1 mb-2">
                Beritahu dokter riwayat alergi anda
              </p>
              <Textarea
                id="riwayat-alergi"
                disabled={!hasAllergies}
                value={!hasAllergies ? "" : undefined}
                className={`
                  relative flex h-25 rounded-md border-2 focus:border-blue-500
                  `}
              />
            </div>
            <div className="flex items-center space-x-2 mb-2">
                <input
                  type="checkbox"
                  id="no-allergies"
                  placeholder='Tulis disini riwayat untuk alergi'
                  checked={!hasAllergies}
                  onChange={() => setHasAllergies(!hasAllergies)}
                  className='h-5 w-5'
                />
                <Label htmlFor="no-allergies">Tidak ada</Label>
            </div>
          </CardContent>
        </Card>

        {/* Bagian Alamat */}
        <Card className="w-full">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-xl font-semibold">Alamat</CardTitle>
            <Button variant="outline" size="lg">
              <Edit className="h-4 w-4 mr-2" />
              Edit
            </Button>
          </CardHeader>
          <CardContent className="grid gap-4 text-gray-500 font-light">
            <div className="grid grid-cols-2 gap-4">
              <div className='gap-4'>
                <Label className="block mb-1 text-[16px]" htmlFor="negara">Negara</Label>
                <Input className="p-6" id="negara" value={user?.alamat?.negara || "Indonesia"} readOnly />
              </div>
              <div>
                <Label className="block mb-1 text-[16px]" htmlFor="kota">Kota</Label>
                <Input className="p-6" id="kota" value={user?.alamat?.kota || "Bandung"} readOnly />
              </div>
            </div>
            <div>
              <Label className="block mb-1 text-[16px]" htmlFor="kode-pos">Kode POS</Label>
              <Input className="p-6" id="kode-pos" value={user?.alamat?.kodePos || "40111"} readOnly />
            </div>
          </CardContent>
        </Card>

        {/* Teks Kebijakan Privasi */}
        <footer className="mt-6 text-sm items-center text-muted-foreground">
          Setiap informasi pribadi yang Anda berikan akan terlindungi. Kami menjaga kerahasiaan data pribadi Anda dan tidak akan menyebarluaskan kepada pihak yang tidak berkepentingan. Informasi pribadi dipergunakan semata-mata untuk keperluan administrasi, penjadwalan, serta kelancaran komunikasi antara pasien dan tenaga medis.
        </footer>
      </main>
      <div className='flex ml-4'>
          <SettingsAccount/>
      </div>
    </div>
    
  );
}