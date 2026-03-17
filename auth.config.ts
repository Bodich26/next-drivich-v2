// auth.config.ts
import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { prisma } from "@/../prisma/prisma-client";
import { LoginSchema } from "@/features/auth/model/auth-schema";
import { Role } from "@prisma/client";
import { PUBLIC_ROUTES } from "./routes";

export default {
  providers: [
    Credentials({
      async authorize(credentials) {
        const validatedFields = LoginSchema.safeParse(credentials);

        if (!validatedFields.success) return null;

        const { email, password } = validatedFields.data;

        const user = await prisma.user.findUnique({
          where: { email },
        });

        if (!user || !user.password) return null;

        const passwordsMatch = await bcrypt.compare(password, user.password);

        if (!passwordsMatch) return null;

        // Важно: возвращаем объект с id, role, firstName
        return {
          id: user.id,
          email: user.email,
          name: user.firstName, // для session.name
          role: user.role,
          firstName: user.firstName,
        };
      },
    }),
  ],

  callbacks: {
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as string;
        session.user.role = token.role as Role;
        session.user.firstName = token.firstName as string;
      }
      return session;
    },

    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;

        const existingUser = await prisma.user.findUnique({
          where: { id: user.id },
        });
        if (existingUser) {
          token.role = existingUser.role;
          token.firstName = existingUser.firstName;
        }
      }
      return token;
    },
  },

  pages: {
    signIn: `${PUBLIC_ROUTES.AUTH}`,
  },
} satisfies NextAuthConfig;
