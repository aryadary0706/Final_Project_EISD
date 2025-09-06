import type { Metadata } from "next";
import { Poppins } from "next/font/google"; // Import Poppins
import "./globals.css";
import Sidebar from "@/components/app-components/sidebar";
import Header from "@/components/app-components/header";

// Definisikan Poppins dengan varian yang dibutuhkan
const poppins = Poppins({
  weight: ['400', '700'], // '400' untuk Regular, '700' untuk Bold
  style: ['normal', 'italic'],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "mediQ - Platform Kesehatan Digital",
  description: "Platform kesehatan digital untuk memudahkan akses layanan kesehatan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Terapkan variabel font ke body */}
      <body className={`${poppins.variable} font-sans antialiased`}>
        <div className="min-h-screen flex bg-white text-gray-800">
          {/* Sidebar */}
          <Sidebar />

          {/* Main Content Area - Header + Page Content */}
          <div className="flex-1 flex flex-col">
            
            {/* Page Content - This is where children (page content) goes */}
            <main className="flex-1 flex">
              <div className="flex-1 pl-5 pb-10 space-y-8 overflow-auto">
                {children}
              </div>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}