'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Bell,
  ChevronRight,
  Shield,
  User,
  XCircle,
  Plus,
  LogOut,
  HelpCircle,
  Key,
  Globe,
  Handshake,
} from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import styles from "@/app/styles/settings.module.css"
import clsx from 'clsx';

export default function SettingsAccount() {
  return (
    <Card className="w-96">
      {/* Pengaturan Akun */}
      <CardHeader>
        <CardTitle className="text-xl font-semibold">
          Pengaturan Akun
        </CardTitle>
      </CardHeader>
      <CardContent className="px-4 py-2">
        <Link
          href="/profile/account"
          className={styles.PusatAkun}
        >
          <div className="flex items-center gap-4">
            <User className="h-5 w-5 text-gray-800" />
            <span className="text-base font-medium text-gray-800">
              Pusat Akun
              <span className="text-sm text-gray-500 font-normal ml-1 block mt-1">
                Kata sandi, keamanan, dan detail pribadi
              </span>
            </span>
          </div>
          <ChevronRight className="h-4 w-4 text-gray-800" />
        </Link>
      </CardContent>

      <div className="border-t border-gray-200 my-2"></div>

      {/* Informasi & Layanan */}
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-gray-700">
          Informasi & Layanan
        </CardTitle>
      </CardHeader>
      <CardContent className="px-4 py-2 flex flex-col gap-1">
        <Link
          href="/accessibility"
          className={styles.sidebarlink}
        >
          <Handshake className="h-5 w-5 text-gray-800" />
          <span className="text-base font-medium text-gray-800">Aksesibilitas</span>
        </Link>
        <Link
          href="/notifications"
          className={styles.sidebarlink}
        >
          <Bell className="h-5 w-5 text-gray-800" />
          <span className="text-base font-medium text-gray-800">Notifikasi</span>
        </Link>
        <Link
          href="/settings/display"
          className={styles.sidebarlink}
        >
          <Globe className="h-5 w-5 text-gray-800" />
          <span className="text-base font-medium text-gray-800">Bahasa & Tampilan</span>
        </Link>
        <Link
          href="/privacy"
          className={styles.sidebarlink}
        >
          <Shield className="h-5 w-5 text-gray-800" />
          <span className="text-base font-medium text-gray-800">Privasi</span>
        </Link>
        <Link
          href="/help"
          className={styles.sidebarlink}
        >
          <HelpCircle className="h-5 w-5 text-gray-800" />
          <span className="text-base font-medium text-gray-800">Bantuan</span>
        </Link>
        <Link
          href="/permissions"
          className={styles.sidebarlink}
        >
          <Key className="h-5 w-5 text-gray-800" />
          <span className="text-base font-medium text-gray-800">Izin aplikasi & Website</span>
        </Link>
      </CardContent>

      <div className="border-t border-gray-200 my-2"></div>

      {/* Login */}
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-gray-800">
          Login
        </CardTitle>
      </CardHeader>
      <CardContent className="px-4 flex flex-col gap-2">
        <Link
          href="/daftar"
          className={clsx(
            styles.sidebarlink,
            'text-blue-500'
          )}
        >
          <Plus className="h-5 w-5" />
          <span className="text-base font-medium">Tambah Akun</span>
        </Link>
        <Link
          href="/daftar"
          className={clsx(
            styles.sidebarlink,
            'text-red-500'
          )}
        >
          <XCircle className="h-5 w-5" />
          <span className="text-base font-medium">Hapus Akun</span>
        </Link>
        <Link
          href="/login"
          className={styles.sidebarlink}
        >
          <LogOut className="h-5 w-5" />
          <span className="text-base font-medium">Keluar</span>
        </Link>
      </CardContent>
    </Card>
  );
}