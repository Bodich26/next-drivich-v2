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
      select: {
        id: true,
        userId: true,
        firstName: true,
        lastName: true,
        phoneNumber: true,
        country: true,
        city: true,
        address: true,
        payment: true,
        status: true,
        totalPrice: true,
        createdAt: true,
        updatedAt: true,
        completedAt: true,
        orderItems: {
          select: {
            id: true,
            orderId: true,
            productId: true,
            quantity: true,
            price: true,
            product: {
              select: {
                id: true,
                brand: true,
                model: true,
                imageSrc: true,
                price: true,
                discount: true,
              },
            },
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
