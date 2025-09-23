// app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// ✅ Simpan mockUsers di luar — agar bisa diubah dan bertahan
export let mockUsers = [
  { id: 1, nama: "Nasywa Gyna", email: "Nasywa@example.com", password: "goodpassword" },
  { id: 2, nama: "Jane Smith", email: "jane.smith@example.com", password: "securepassword" },
  { id: 3, nama: "Peter Jones", email: "peter.jones@example.com", password: "strongpassword" },
  { id: 4, nama: "Kemas kemas", email: "kms@example.com", password: "password2" },
];

// ✅ Tambahkan fungsi helper untuk menambah user (dipanggil dari halaman register)
export const addUser = (user: { id: number; nama: string; email: string; password: string }) => {
  mockUsers.push(user);
};

interface CustomUser {
  id: number;
  name: string;
  email: string;
}

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // ✅ Sekarang mockUsers tidak di-reset tiap authorize dipanggil
        const user = mockUsers.find(
          (u) => u.email === credentials?.email && u.password === credentials?.password
        );

        if (user) {
          return {
            id: user.id,
            name: user.nama,
            email: user.email,
          } as CustomUser;
        } else {
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user && token.id) {
        session.user.id = token.id as number;
      }
      return session;
    },
  },
});

export { handler as GET, handler as POST };