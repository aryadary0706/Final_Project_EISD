// app/(main)/layout.tsx
import Sidebar from "@/app/components/sidebar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar kiri (global) */}
      <Sidebar />

      {/* Area kanan (dinamis per page) */}
      <div className="flex flex-1 pl-2">
        {children}
    </div>
    </div>
  );
}
