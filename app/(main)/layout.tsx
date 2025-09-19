// app/(main)/layout.tsx
import Sidebar from "@/app/components/sidebar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      {/* Sidebar kiri (global) */}
      <Sidebar />

        {/* Area kanan (dinamis per page) */}
        <div className="w-full">
          {children}
      </div>
    </div>
  );
}
