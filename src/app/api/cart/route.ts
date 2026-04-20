import { NextRequest, NextResponse } from "next/server";
import { sessionUserId } from "@/shared";
import { prisma } from "@/../prisma/prisma-client";

//--Get user Cart
export async function GET() {
  try {
    const userId = await sessionUserId();
    if (!userId) {
      return NextResponse.json(
        { error: "LogIn to the site", success: false },
        { status: 401 },
      );
    }

    const userCart = await prisma.cart.findUnique({
      where: { userId },
      include: {
        products: {
          include: {
            product: true,
          },
          orderBy: {
            createdAt: "desc",
          },
        },
      },
    });

    if (!userCart) {
      return NextResponse.json({
        success: true,
        data: [],
        message: "Cart is empty",
      });
    }

    const cartProducts = userCart.products.map((p) => ({
      ...p.product,
      quantity: p.quantity,
    }));

    return NextResponse.json({
      success: true,
      data: cartProducts,
      message: "Cart list received successfully",
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal server error", success: false },
      { status: 500 },
    );
  }
}

//---Add to Cart
export async function POST(req: NextRequest) {
  try {
    const userId = await sessionUserId();
    if (!userId) {
      return NextResponse.json(
        { error: "LogIn to the site", success: false },
        { status: 401 },
      );
    }

    const { productId } = await req.json();
    if (!productId || typeof productId !== "number") {
      return NextResponse.json(
        { error: "Invalid product ID", success: false },
        { status: 400 },
      );
    }

    let userCart = await prisma.cart.findUnique({
      where: { userId },
    });

    if (!userCart) {
      userCart = await prisma.cart.create({
        data: { userId },
      });
    }

    const existingProduct = await prisma.cartOnProducts.findFirst({
      where: {
        cartId: userCart.id,
        productId,
      },
    });

    if (existingProduct) {
      return NextResponse.json({
        message: "Product is already in the cart",
        success: true,
      });
    }

    await prisma.cartOnProducts.create({
      data: {
        cartId: userCart.id,
        productId,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Product added to cart",
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal server error", success: false },
      { status: 500 },
    );
  }
}

//--Remove product from cart
export async function DELETE(req: NextRequest) {
  try {
    const userId = await sessionUserId();
    if (!userId) {
      return NextResponse.json(
        { error: "LogIn to the site", success: false },
        { status: 401 },
      );
    }

    const { productId } = await req.json();
    if (!productId || typeof productId !== "number") {
      return NextResponse.json(
        { error: "Invalid product ID", success: false },
        { status: 400 },
      );
    }

    const userCart = await prisma.cart.findUnique({
      where: { userId },
    });

    if (!userCart) {
      return NextResponse.json(
        { error: "Cart not found", success: false },
        { status: 404 },
      );
    }

    await prisma.cartOnProducts.deleteMany({
      where: {
        productId,
        cartId: userCart.id,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Product removed from cart",
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal server error", success: false },
      { status: 500 },
    );
  }
}

//--update user cart
export async function PUT(req: NextRequest) {
  try {
    const userId = await sessionUserId();
    if (!userId) {
      return NextResponse.json(
        { error: "LogIn to the site", success: false },
        { status: 401 },
      );
    }

    const { productId, quantity } = await req.json();

    const userCart = await prisma.cart.findUnique({
      where: { userId },
    });

    if (!userCart) {
      return NextResponse.json(
        { error: "Cart not found", success: false },
        { status: 404 },
      );
    }

    const cartItem = await prisma.cartOnProducts.findFirst({
      where: {
        cartId: userCart.id,
        productId,
      },
    });

    if (!cartItem) {
      return NextResponse.json(
        { error: "Product not in cart", success: false },
        { status: 404 },
      );
    }

    if (quantity <= 0) {
      await prisma.cartOnProducts.delete({
        where: {
          productId_cartId: { productId, cartId: userCart.id },
        },
      });

      return NextResponse.json({
        success: true,
        message: "Product removed from cart",
      });
    }

    await prisma.cartOnProducts.update({
      where: {
        productId_cartId: { productId, cartId: userCart.id },
      },
      data: { quantity },
    });

    return NextResponse.json({
      success: true,
      message: " Quantity updated",
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal server error", success: false },
      { status: 500 },
    );
  }
}
