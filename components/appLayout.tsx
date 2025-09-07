"use client";

import { usePathname } from "next/navigation";
import Sidebar from "@/components/app-components/sidebar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Daftar halaman yang tidak butuh sidebar
  const noSidebarRoutes = ["/login"];

  const hideSidebar = noSidebarRoutes.includes(pathname);

  return (
    <div className="flex">
      {!hideSidebar && <Sidebar />}
      <main className="flex-1">{children}</main>
    </div>
  );
}
