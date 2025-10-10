// file: middleware.ts

import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()

  // Buat Supabase client di dalam middleware.
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return req.cookies.get(name)?.value
        },
        set(name: string, value: string, options) {
          req.cookies.set({ name, value, ...options }) // Set cookie di request untuk penggunaan selanjutnya
          res.cookies.set({ name, value, ...options }) // Set cookie di response untuk dikirim ke browser
        },
        remove(name: string, options) {
          req.cookies.set({ name, value: '', ...options }) // Hapus cookie di request
          res.cookies.set({ name, value: '', ...options }) // Hapus cookie di response
        },
      },
    }
  )

  // Fungsi penting: refresh session jika sudah expired.
  // Ini akan memastikan data user tersedia di Server Component.
  await supabase.auth.getUser()

  return res
}

// Pastikan matcher-nya sudah benar sesuai dengan route yang ingin dilindungi.
export const config = {
  matcher: ['/beranda/:path*', '/jadwal/:path*', '/profil/:path*'],
}