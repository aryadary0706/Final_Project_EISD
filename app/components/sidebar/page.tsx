import React from 'react'

export default function Sidebar() {
    return (
        <aside className="w-60 bg-white shadow-md flex flex-col p-6 space-y-8">
        <div className="flex items-center space-x-1 mb-10">
            <span className="text-2xl font-bold text-blue-400">medi</span>
        </div>

        <nav className="flex flex-col space-y-6 text-sm font-medium text-gray-600">
            <a href="#" className="flex items-center space-x-2 text-blue-500 font-semibold">
            <span>Beranda</span>
            </a>
            <a href="#" className="flex items-center space-x-2 hover:text-blue-500">
            <span>Telusuri</span>
            </a>
            <a href="#" className="flex items-center space-x-2 hover:text-blue-500">
            <span>Riwayat</span>
            </a>
            <a href="#" className="flex items-center space-x-2 hover:text-blue-500">
            <span>Profil</span>
            </a>
        </nav>

        <button className="mt-auto flex items-center justify-center space-x-2 py-2 px-4 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-100">
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
        </button>
        </aside>
    )
}
