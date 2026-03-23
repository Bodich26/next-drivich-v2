import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/../prisma/prisma-client";

export async function GET(
  _: NextRequest,
  context: { params: Promise<{ id: string }> },
) {
  const { id } = await context.params;

  try {
    if (!id) {
      return NextResponse.json(
        { error: "Product Id not passed", success: false },
        { status: 400 },
      );
    }

    const productId = parseInt(id);
    const product = await prisma.product.findUnique({
      where: { id: productId },
    });

    if (!product) {
      return NextResponse.json(
        { error: "Product not found", success: false },
        { status: 404 },
      );
    }

    return NextResponse.json({
      success: true,
      data: product,
      message: "Product received successfully",
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal server error", success: false },
      { status: 500 },
    );
  }
}
