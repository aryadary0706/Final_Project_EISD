

import Sidebar from "@/app/components/sidebar";
// 1. Ganti import ini
import { createServerClient } from "@supabase/ssr"; 
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = cookies();

  // 2. Gunakan createServerClient di sini juga
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        async get(name: string) {
          return (await cookieStore).get(name)?.value;
        },
      },
    }
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();
console.log("👤 USER DARI MIDDLEWARE:", user);
  if (!user) {
    redirect("/login");
  }

  return (
    <div className="flex h-screen">
      <div className="sticky top-0 h-screen">
        <Sidebar />
      </div>
      <div className="flex-1 min-w-0 overflow-auto">{children}</div>
    </div>
  );
}