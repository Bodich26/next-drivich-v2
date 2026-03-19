import { registerSchema } from "@/features/auth";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/../prisma/prisma-client";
import { AuthError } from "next-auth";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validationFailed = registerSchema.safeParse(body);

    if (!validationFailed.success) {
      return NextResponse.json(
        { error: "Invalid input data", success: false },
        { status: 422 },
      );
    }

    const { email, firstName, password } = validationFailed.data;
    const currentUser = await prisma.user.findUnique({
      where: { email },
    });

    if (currentUser) {
      return NextResponse.json(
        {
          error: "User already exists",
          success: false,
        },
        { status: 409 },
      );
    }

    const hashedPasswordUser = await bcrypt.hash(password, 10);
    const newUser = await prisma.user.create({
      data: {
        email,
        firstName,
        password: hashedPasswordUser,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Successful registration",
      data: newUser,
    });
  } catch (error) {
    console.error(error);

    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return NextResponse.json(
            {
              error: (error as Error).message || "Incorrect credentials",
              success: false,
            },
            { status: 500 },
          );
        default:
          return NextResponse.json(
            {
              error: (error as Error).message || "Internal server error",
              success: false,
            },
            { status: 500 },
          );
      }
    }
  }

  return NextResponse.json(
    { error: "Internal server error", success: false },
    { status: 500 },
  );
}
