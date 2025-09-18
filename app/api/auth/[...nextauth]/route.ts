// app/api/auth/[...nextauth]/route.ts
import NextAuth, { User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// ✅ Tambahkan tipe custom ini
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
        const mockUsers = [
          { id: 1, nama: "Nasywa Gyna", email: "Nasywa@example.com", password: "goodpassword" },
          { id: 2, nama: "Jane Smith", email: "jane.smith@example.com", password: "securepassword" },
          { id: 3, nama: "Peter Jones", email: "peter.jones@example.com", password: "strongpassword" }
        ];

        const user = mockUsers.find(
          (u) => u.email === credentials?.email && u.password === credentials?.password
        );

        if (user) {
          // Mengembalikan user jika kredensial benar
          return { 
            id: user.id, 
            name: user.nama, 
            email: user.email 
        } as CustomUser;
        } else {
          // Mengembalikan null jika kredensial salah
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