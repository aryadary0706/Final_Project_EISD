// app/api/auth/register/route.ts
import { NextRequest, NextResponse } from "next/server";
import { addUser, mockUsers } from "@/app/api/auth/[...nextauth]/route"; // ✅ Import fungsi addUser

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, password } = body;

    if (!name || !email || !password) {
      return NextResponse.json(
        { error: "Nama, email, dan password wajib diisi" },
        { status: 400 }
      );
    }

    // Cek apakah email sudah terdaftar
    const existingUser = mockUsers.find(u => u.email === email);
    if (existingUser) {
      return NextResponse.json(
        { error: "Email sudah terdaftar" },
        { status: 409 }
      );
    }

    // Generate ID unik sementara
    const newId = Date.now(); // atau mockUsers.length + 1

    // Tambahkan user baru
    addUser({
      id: newId,
      nama: name,
      email,
      password, // ⚠️ Hanya untuk mock — di produksi, hash password!
    });

    return NextResponse.json(
      { message: "Registrasi berhasil", userId: newId },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error in register:", error);
    return NextResponse.json(
      { error: "Registrasi gagal" },
      { status: 500 }
    );
  }
}