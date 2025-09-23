"use client";

import Image from "next/image";

type Category = {
  src: string;
  alt: string;
  label: string;
};

export default function PoliCategory({
  categories,
  onCategoryClick, // ✅ tambahkan props ini
}: {
  categories: Category[];
  onCategoryClick: (label: string) => void; // ✅ definisi tipe
}) {
  return (
    <div className="flex flex-row gap-4">
      {categories.map((cat) => (
        <div key={cat.label} className="flex flex-col items-center gap-2">
            <button
              onClick={() => onCategoryClick(cat.label)} // ✅ panggil callback
              className="relative flex items-center justify-center w-18 h-18 bg-blue-400 rounded-full hover:bg-blue-300 transition"
            >
              <Image src={cat.src} alt={cat.alt} width={35} height={35} />
            </button>
            <div className="w-[80px] text-center">
              <p className="text-sm font-medium text-gray-900">{cat.label}</p>
            </div>
          </div>

        
      ))}
    </div>
  );
}
