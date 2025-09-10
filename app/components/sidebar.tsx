"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from "@/app/styles/sidebar.module.css";
import { Button } from '@/components/ui/button';
import { Home, Search, Clock, User, LogOut } from 'lucide-react';
import { Separator } from '@radix-ui/react-separator';
import clsx from 'clsx';

const navItems = [
  { name: 'Beranda', href: '/beranda', icon: <Home className="w-6 h-6" /> },
  { name: 'Telusuri', href: '/search', icon: <Search className="w-6 h-6" /> },
  { name: 'Riwayat', href: '/riwayat', icon: <Clock className="w-6 h-6" /> },
  { name: 'Profil', href: '/profil', icon: <User className="w-6 h-6" /> },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className={styles.container}>
      {/* Logo */}
      <div className={styles.title}>
        <h1 className={styles.titleTypography}>mediQ</h1>
      </div>

      {/* Menu */}
      <div className={styles.navbar}>
        <h4 className={styles.menuTypography}>Menu</h4>
        <nav className="flex flex-col space-y-2 w-full">
          {navItems.map((item) => {
            // Perbaiki logika untuk menentukan halaman aktif
            const isActive = pathname === item.href || 
              (item.href === '/' && pathname === '/') ||
              (item.href !== '/' && pathname.startsWith(item.href));

            return (
              <Link
                key={item.name}
                href={item.href}
                className={clsx(styles.navItem, {
                  [styles.activeNavItem]: isActive,
                })}
              >
                {item.icon}
                <span className="text-[16px] font-normal pl-3">{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>
      
      {/* Separator */}
      <Separator className="my-4" />

      {/* Logout Button */}
      <div className={styles.logoutContainer}>
        <Button className={styles.logoutButton}>
          <LogOut className="w-5 h-5" />
          <span>Keluar</span>
        </Button>
      </div>
    </aside>
  );
}