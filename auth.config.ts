// auth.config.ts
import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { prisma } from "@/../prisma/prisma-client";
import { loginSchema, registerSchema } from "@/features/auth/model/auth-schema";
import { Role } from "@prisma/client";
import { PUBLIC_ROUTES } from "./routes";

export default {
  providers: [
    Credentials({
      id: "credentials",
      name: "Email + Password",
      credentials: {
        email: { label: "Email", type: "email" },
        firstName: { label: "FirstName", type: "text" },
        password: { label: "Password", type: "password" },
        isRegister: { label: "Is Registration", type: "hidden" },
      },
      async authorize(credentials) {
        if (credentials?.isRegister === "true") {
          const validated = registerSchema.safeParse(credentials);
          if (!validated.success) return null;

          const { email, firstName, password } = validated.data;
          const existing = await prisma.user.findUnique({ where: { email } });
          if (existing) return null;

          const hashedPassword = await bcrypt.hash(password, 10);
          const newUser = await prisma.user.create({
            data: {
              email,
              firstName,
              password: hashedPassword,
              role: "USER" as Role,
            },
          });

          return {
            id: newUser.id,
            email: newUser.email,
            name: newUser.firstName,
            role: newUser.role,
            firstName: newUser.firstName,
          };
        }

        const validatedFields = loginSchema.safeParse(credentials);
        if (!validatedFields.success) return null;

        const { email, password } = validatedFields.data;
        const user = await prisma.user.findUnique({
          where: { email },
        });

        if (!user || !user.password) return null;

        const passwordsMatch = await bcrypt.compare(password, user.password);
        if (!passwordsMatch) return null;

        return {
          id: user.id,
          email: user.email,
          name: user.firstName,
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
