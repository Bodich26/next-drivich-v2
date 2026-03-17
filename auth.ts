import NextAuth from "next-auth";
import authConfig from "./auth.config";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/../prisma/prisma-client";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
    maxAge: 3 * 24 * 60 * 60,
    updateAge: 24 * 60 * 60,
  },
  secret: process.env.AUTH_SECRET, // ← именно AUTH_SECRET
  ...authConfig,
});
