import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/../prisma/prisma-client";
import { AuthError } from "next-auth";
import { loginSchema } from "@/features/auth";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validationFailed = loginSchema.safeParse(body);

    if (!validationFailed.success) {
      return NextResponse.json(
        { error: "Invalid input data", success: false },
        { status: 422 },
      );
    }

    const { email, password } = validationFailed.data;
    const currentUser = await prisma.user.findUnique({
      where: { email },
    });

    if (!currentUser) {
      return NextResponse.json(
        { error: "This user does not exist", success: false },
        { status: 401 },
      );
    }

    const isPasswordValid = await bcrypt.compare(
      password,
      currentUser.password,
    );

    if (!isPasswordValid) {
      return NextResponse.json(
        { error: "Password wrong", success: false },
        { status: 401 },
      );
    }

    return NextResponse.json({
      success: true,
      data: currentUser,
      message: "Login is successful",
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

    return NextResponse.json(
      { error: "Internal server error", success: false },
      { status: 500 },
    );
  }
}
