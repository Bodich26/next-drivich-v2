// types/next-auth.d.ts

import { DefaultSession, DefaultUser } from "next-auth";
import { Role } from "@prisma/client";

// Расширяем базовый User (возвращаемый из authorize и adapter)
interface CustomUser extends DefaultUser {
  id: string;
  role: Role;
  firstName: string;
}

// Расширяем JWT
declare module "next-auth/jwt" {
  interface JWT {
    id?: string;
    role?: Role;
    firstName?: string;
  }
}

// Расширяем Session (то, что получает клиент)
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: Role;
      firstName: string;
    } & DefaultSession["user"];
  }
}
