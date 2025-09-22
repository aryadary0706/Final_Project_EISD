"use client";

import Image from "next/image";
import Link from "next/link";

export default function PoliCategory({ categories }: { categories: { src: string; alt: string; label: string }[] }) {
  return (
    <div className="flex flex-row gap-0">
      {categories.map((category, index) => (
        <div key={index} className="flex flex-col items-center px-3 border-x-1 gap-2">
          <Link href="#">
            <div className="relative w-18 h-18 rounded-full bg-blue-400 flex items-center justify-center">
              <Image src={category.src} alt={category.alt} width={30} height={30} />
            </div>
          </Link>
          <div className="w-[100px] text-center">
            <p className="text-xs font-medium text-gray-900">{category.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
