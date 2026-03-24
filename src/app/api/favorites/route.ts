import { sessionUserId } from "@/shared";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/../prisma/prisma-client";

//--get
export async function GET() {
  try {
    const userId = await sessionUserId();

    if (!userId) {
      return NextResponse.json(
        { error: "LogIn to the site", success: false },
        { status: 401 },
      );
    }

    const userFavorites = await prisma.favorites.findFirst({
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

    if (!userFavorites) {
      return NextResponse.json({
        success: true,
        data: [],
        message: "Favorites is empty",
      });
    }

    const products = userFavorites?.products.map((p) => p.product) ?? [];

    return NextResponse.json({
      success: true,
      data: products,
      message: "Favorite list received successfully",
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal server error", success: false },
      { status: 500 },
    );
  }
}

//--create
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

    const productExists = await prisma.product.findUnique({
      where: { id: productId },
    });

    if (!productExists) {
      return NextResponse.json(
        { error: "Product not found", success: false },
        { status: 404 },
      );
    }

    let userFavorites = await prisma.favorites.findUnique({
      where: { userId },
    });

    if (!userFavorites) {
      userFavorites = await prisma.favorites.create({
        data: { userId },
      });
    }

    await prisma.favoritesOnProducts.create({
      data: {
        favoritesId: userFavorites.id,
        productId,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Product added to favorites",
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal server error", success: false },
      { status: 500 },
    );
  }
}

//--delete
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

    const productExists = await prisma.product.findUnique({
      where: { id: productId },
    });

    if (!productExists) {
      return NextResponse.json(
        { error: "Product not found", success: false },
        { status: 404 },
      );
    }

    await prisma.favoritesOnProducts.deleteMany({
      where: {
        productId,
        favorites: { userId },
      },
    });

    return NextResponse.json({
      success: true,
      message: "Product removed from favorites",
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal server error", success: false },
      { status: 500 },
    );
  }
}
