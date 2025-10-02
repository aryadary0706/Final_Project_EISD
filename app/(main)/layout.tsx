// app/(main)/layout.tsx
import Sidebar from "@/app/components/sidebar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
      {/* Sidebar kiri (global) */}
      <div className="sticky top-0 h-screen">
        <Sidebar />
      </div>

        {/* Area kanan (dinamis per page) */}
        <div className="flex-1 min-w-0 overflow-auto">
          {children}
      </div>
    </div>
  );
}
