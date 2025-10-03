'use client';

import clsx from 'clsx';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { Mars, Venus } from 'lucide-react';
import Link from 'next/link';
import { Edit, MapPin } from 'lucide-react';
import React, { useState } from 'react';
import SettingsAccount from '@/app/components/settingsaccount';
import { useUserStore } from "@/stores/userStore";

export default function ProfilePage() {
  const [selectedGender, setSelectedGender] = useState('perempuan');
  const [selectedBloodtype, setSelectedBloodtype] = useState('A');
  const [hasAllergies, setHasAllergies] = useState(true);
  const user = useUserStore((state) => state.user);
  const updateUser = useUserStore((state) => state.updateUser);
  const [UpdateForm, setUpdateForm] = useState(false);
  const [UpdateBotForm, setUpdateBotForm] = useState(false);

  const handleAllergiesChange = (value: string) => {
    updateUser({ alergi: value });
  };

  const handleGenderChange = (gender: string) => {
    setSelectedGender(gender);
    updateUser({ gender });
  };

  const handleBloodtypeChange = (bloodtype: string) => {
    setSelectedBloodtype(bloodtype);
    updateUser({ golonganDarah: bloodtype });
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
          <div className="flex items-center mb-3 gap-4">
            <Link href="/">
              <Avatar className="flex h-16 w-16">
                <AvatarImage src="/placeholder-avatar.jpg" alt="Naswa Gyna Sahira"/>
                <AvatarFallback>SN</AvatarFallback>
              </Avatar>
            </Link>
            <div className="flex flex-col items-start gap-2">
              <h1 className="text-xl font-medium">{user?.name || "Tamu"}</h1>
              <div className="flex items-center text-xs text-gray-500 ">
                <MapPin className="h-4 w-4 mr-1" />
                <span>Bergabung Mei 2025</span>
                <span className="mx-1">·</span>
                <span>Bandung, Indonesia</span>
              </div>
            </div>
          </div>

          {/* Bagian Informasi Pribadi */}
          <Card className="mb-6 w-full outline-0 shadow-md">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-2xl font-semibold">Informasi Pribadi</CardTitle>
              <Button onClick={() => setUpdateForm(!UpdateForm)} variant="outline" size="sm"
                className={clsx(
                  "ring-1 ring-gray-300 transition-all duration-300",
                  UpdateForm && "ring-2 ring-blue-400"
                )}>
                <Edit className="h-4 w-4 mr-2" />
                Edit
              </Button>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid grid-cols-2 gap-15 items-center self-stretch">
                {/* Nama */}
                <div>
                  <Label className="mb-3 font-semibold text-[16px]" htmlFor="nama-lengkap">Nama Lengkap</Label>
                  <Input 
                  className={clsx("p-6", UpdateForm ? "bg-gray-100" : "bg-white")} 
                  id="nama-lengkap" 
                  placeholder='Nama Lengkap'
                  value={user?.name   || ""} 
                  readOnly={!UpdateForm} 
                  onChange={(e) => {
                    updateUser({ name: e.target.value })
                  }}
                  />
                </div>
                {/* Umur */}
                <div>
                  <Label className="block mb-3 font-semibold text-[16px]" htmlFor="umur-pasien">Umur Pasien</Label>
                  <div className="flex items-center">
                    <Input 
                    id="umur-pasien" 
                    value={user?.umur ?? ""}
                    placeholder='umur'
                    className={clsx("p-6", UpdateForm ? "bg-gray-100" : "bg-white")} 
                    readOnly = {!UpdateForm}
                    onChange={(e) => {
                      const val = e.target.value;
                      updateUser({ umur: val === "" ? undefined : parseFloat(val) })
                    }}
                    />
                    
                  </div>
                </div>
              </div>
              {/* Berat badan */}
              <div className="grid grid-cols-2 gap-15 items-center self-stretch">
                <div>
                  <Label className="block mb-3 font-semibold text-[16px]" htmlFor="berat-badan">Berat Badan</Label>
                  <div className="flex items-center">
                    <Input 
                    id="berat-badan" 
                    value={user?.beratBadan ?? ""}
                    placeholder='Berat Badan' 
                    className={clsx("w-full p-6", UpdateForm ? "bg-gray-100" : "bg-white" )}
                    readOnly ={!UpdateForm}
                    onChange={(e) => {
                      const val = e.target.value;
                      updateUser({ beratBadan: val === "" ? undefined : parseFloat(val) })
                    }}
                    />
                  </div>
                </div>
                {/* Tinggi Badan */}
                <div>
                  <Label className="block mb-3 font-semibold text-[16px]" htmlFor="tinggi-badan">Tinggi Badan</Label>
                  <div className="flex items-center">
                    <Input 
                    id="tinggi-badan" 
                    value={user?.tinggiBadan ?? ""}
                    placeholder='tinggi badan'
                    className={clsx("w-full p-6", UpdateForm ? "bg-gray-100" : "bg-white" )}
                    readOnly = {!UpdateForm}
                    onChange={(e) => {
                      const val = e.target.value;
                      updateUser({ tinggiBadan: val === "" ? undefined : parseFloat(val) });
                    }}
                    />
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
                      className={clsx("relative flex flex-col items-start justify-center p-4 rounded-lg cursor-pointer border-2", selectedGender === option.value ? 'border-blue-500 text-blue-500' : 'border-gray-100 text-gray-400', UpdateForm ? "bg-gray-100" : "bg-white" )}
                      >
                      <input
                        type="checkbox"
                        id={`gender-${option.value}`}
                        name="jenisKelamin"
                        value={option.value}
                        checked={selectedGender === option.value}
                        onChange={() => handleGenderChange(option.value)}
                        className="sr-only"
                        disabled={!UpdateForm}
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
                  disabled={!UpdateForm}
                  >
                  {bloodTypeOptions.map((option) => (
                    <div key={option.value} className="flex items-center space-x-2">
                      <RadioGroupItem value={option.value} id={`blood-${option.value}`} />
                      <Label className={"text-lg"} htmlFor={`blood-${option.value}`}>{option.label}</Label>
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
                disabled={!hasAllergies || !UpdateForm}
                value={user?.alergi || ""}
                onChange={(e) => {
                  const val = e.target.value;
                  handleAllergiesChange(val);
                }}
                className={clsx("relative flex h-25 rounded-md border-2 focus:border-blue-500", UpdateForm ? "bg-gray-100" : "bg-white")}
                />
              </div>
              <div className="flex items-center space-x-2 mb-2">
                  <input
                    type="checkbox"
                    id="no-allergies"
                    placeholder='Tulis disini riwayat untuk alergi'
                    checked={hasAllergies}
                    onChange={() => setHasAllergies(!hasAllergies)}
                    className='h-5 w-5'
                    disabled={!UpdateForm}
                    />
                  <Label htmlFor="no-allergies">Tidak ada</Label>
              </div>
            </CardContent>
          </Card>

          {/* Bagian Alamat */}
          <Card className="w-full">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-xl font-semibold">Alamat</CardTitle>
              <Button onClick={() => setUpdateBotForm(!UpdateBotForm)} variant="outline" size="sm"
                className={clsx(
                  "ring-1 ring-gray-300 transition-all duration-300",
                  UpdateBotForm && "ring-2 ring-blue-400"
                )}>
                <Edit className="h-4 w-4 mr-2"/>
                Edit
              </Button>
            </CardHeader>
            <CardContent className="grid gap-4 text-gray-500 font-light">

              {/* Negara */}
              <div className="grid grid-cols-2 gap-4">
                <div className='gap-4'>
                  <Label className="block mb-1 text-[16px]" htmlFor="negara">Negara</Label>
                  <Input
                  className={clsx("p-6", UpdateBotForm ? "bg-gray-100" : "bg-white")}
                  id="negara"
                  value={user?.alamat?.negara || ""}
                  readOnly={!UpdateBotForm}
                  onChange={(e) => {
                    updateUser({
                      alamat: { negara: e.target.value },
                    });
                  }}
                  />
                </div>
                {/* Kota */}
                <div>
                  <Label className="block mb-1 text-[16px]" htmlFor="kota">Kota</Label>
                  <Input
                  className={clsx("p-6", UpdateBotForm ? "bg-gray-100" : "bg-white")}
                  id="kota"
                  value={user?.alamat?.kota || ""}
                  readOnly={!UpdateBotForm}
                  onChange={(e) => {
                    updateUser({
                      alamat: { kota: e.target.value },
                    });
                  }}
                  />
                </div>
              </div>
              {/* Kode POS */}
              <div>
                <Label className="block mb-1 text-[16px]" htmlFor="kode-pos">Kode POS</Label>
                <Input
                className={clsx("p-6", UpdateBotForm ? "bg-gray-100" : "bg-white")}
                id="kode-pos"
                value={user?.alamat?.kodePos || ""}
                readOnly={!UpdateBotForm}
                onChange={(e) => {
                  updateUser({
                    alamat: { kodePos: e.target.value },
                  });
                }}
                />
              </div>
            </CardContent>
          </Card>

          {/* Teks Kebijakan Privasi */}
          <footer className="mt-6 text-xs items-center text-muted-foreground">
            Setiap informasi pribadi yang Anda berikan akan terlindungi. Kami menjaga kerahasiaan data pribadi Anda dan tidak akan menyebarluaskan kepada pihak yang tidak berkepentingan. Informasi pribadi dipergunakan semata-mata untuk keperluan administrasi, penjadwalan, serta kelancaran komunikasi antara pasien dan tenaga medis.
          </footer>
        </main>
        <div className='flex ml-4 sticky top-0 h-screen'>
            <SettingsAccount/>
        </div>
      </div>
      
    );
}