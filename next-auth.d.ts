// next-auth.d.ts
import { DefaultSession, DefaultJWT } from "next-auth";

declare module "next-auth" {
  interface User {
    id: number;
  }

  interface Session {
    user: {
      id: number;
    } & DefaultSession["user"];
  }

  interface JWT {
    id: number;
  }
}