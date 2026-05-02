import { NextResponse } from "next/server";
import { prisma } from "@/../prisma/prisma-client";
import { sessionUserId } from "@/shared";

export async function GET() {
  try {
    const userId = await sessionUserId();
    if (!userId) {
      return NextResponse.json(
        { error: "LogIn to the site", success: false },
        { status: 401 },
      );
    }

    const orderList = await prisma.order.findMany({
      where: { userId },
      include: {
        orderItems: {
          include: {
            product: true,
          },
        },
      },
    });

    if (!orderList) {
      return NextResponse.json({
        success: true,
        message: "You have no orders",
        data: [],
      });
    }

    return NextResponse.json({
      success: true,
      data: orderList,
      message: "Orders list received successfully",
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal server error", success: false },
      { status: 500 },
    );
  }
}
