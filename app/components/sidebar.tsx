"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from "@/app/styles/sidebar.module.css";
import { Button } from '@/components/ui/button';
import { Home, Hospital, ClipboardClock, UserRound, LogOut } from 'lucide-react';
import { Separator } from '@radix-ui/react-separator';
import clsx from 'clsx';
import { useUserStore } from '@/stores/userStore';

const navItems = [
  { name: 'Beranda', href: '/beranda', icon: Home },
  { name: 'Telusuri', href: '/search', icon: Hospital },
  { name: 'Riwayat', href: '/riwayat', icon: ClipboardClock },
  { name: 'Profil', href: '/profil', icon: UserRound },
];


export default function Sidebar() {
  const pathname = usePathname();
  const { clearUser } = useUserStore(); // ✅ Ambil user dari store

  const handleLogout = () => {
    clearUser();
  };

  return (
    <aside className={styles.container}>
      {/* Logo */}
      <div className={styles.title}>
        <h1 className={styles.titleTypography}>medi</h1>
        <img
          src="/mediQ.png" 
          alt="Logo" 
          width={30} 
          height={30}
          className='hidden lg:flex'
        />
        <img
          src="/mediQ.png" 
          alt="Logo" 
          width={25} 
          height={25}
          className='flex lg:hidden'
        />
      </div>

      {/* Menu */}
      <div className={styles.navbar}>
        <h4 className={styles.menuTypography}>Menu</h4>
        <nav className="flex flex-col space-y-2 w-full">
          {navItems.map((item) => {
            // Perbaiki logika active berdasarkan targetHref, bukan item.href
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
                <item.icon 
                  className={clsx(
                    "w-5 h-5", 
                    isActive ? "text-blue-400" : "text-gray-400"
                  )} 
                />
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
        <Link href="/login">
          <Button onClick={handleLogout} className={styles.logoutButton}>
            <LogOut className="w-5 h-5" />
            <span>Keluar</span>
          </Button>
        </Link>
      </div>
    </aside>
  );
}