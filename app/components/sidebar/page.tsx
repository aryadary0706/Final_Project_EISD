import React from 'react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuItem,
} from '@/components/ui/navigation-menu';

const navItems = [
  { name: 'Beranda', href: '#' },
  { name: 'Telusuri', href: '#' },
  { name: 'Riwayat', href: '#' },
  { name: 'Profil', href: '#' },
];

export default function Sidebar() {
  return (
    <aside className="w-[280px] bg-white shadow-md flex flex-col p-8 space-y-8">
      {/* Logo */}
      <div className="flex justify-center p-3">
        <span className="text-4xl font-bold text-blue-400">mediQ</span>
      </div>

      {/* Menu */}
      <div className="mt-2">
        <p className="text-xl font-semibold text-gray-600 mb-6">Menu</p>
        <NavigationMenu>
          <NavigationMenuList className="flex flex-col space-y-1 items-start w-full">
            {navItems.map((item) => (
              <NavigationMenuItem key={item.name} className='w-full'>
                <NavigationMenuLink href={item.href} className="flex items-center justify-between w-full p-3">
                  <span className="text-lg font-normal text-gray-600">{item.name}</span>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Tombol Keluar */}
      <Button variant="outline" className="mt-auto flex items-center justify-center space-x-2 py-2 px-4 rounded-md text-gray-600 hover:bg-gray-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7" />
        </svg>
        <span>Keluar</span>
      </Button>
    </aside>
  );
}