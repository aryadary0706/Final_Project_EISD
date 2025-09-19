import type { Metadata } from "next";
import { Poppins } from "next/font/google"; // Import Poppins
import "./globals.css";
import { Providers } from "./providers";


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
          <Providers>
            {children}
          </Providers>
      </body>
    </html>
  );
}