import { NextRequest, NextResponse } from "next/server";
import { EngineType, Prisma } from "@prisma/client";
import { prisma } from "@/../prisma/prisma-client";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    console.log("=== Полученные параметры ===");
    console.log("Все searchParams:", Object.fromEntries(searchParams));

    const priceMin = searchParams.get("price[gte]");
    const priceMax = searchParams.get("price[lte]");
    const engine = searchParams.get("engine");
    const electro = searchParams.get("electro");
    const model = searchParams.get("model");
    const powerRangesStr = searchParams.get("powerRanges");
    const sort = searchParams.get("sort");

    const filters: Prisma.ProductWhereInput = {};

    if (priceMin || priceMax) {
      filters.price = {
        ...(priceMin ? { gte: Number(priceMin) } : {}),
        ...(priceMax ? { lte: Number(priceMax) } : {}),
      };
    }

    if (engine === "true" && electro === "true") {
      filters.engineType = {
        in: [EngineType.ENGINE, EngineType.ELECTRO],
      };
    } else if (engine === "true") {
      filters.engineType = EngineType.ENGINE;
    } else if (electro === "true") {
      filters.engineType = EngineType.ELECTRO;
    }

    if (model) {
      filters.model = {
        contains: model,
      };
    }

    if (powerRangesStr) {
      try {
        const powerRanges: { min: number; max: number }[] =
          JSON.parse(powerRangesStr);

        if (powerRanges.length > 0) {
          filters.OR = powerRanges.map((range) => ({
            power: {
              gte: range.min,
              lte: range.max,
            },
          }));
        }
      } catch (error) {
        console.error(error);

        return NextResponse.json(
          { error: "Error while parsing power ranges", success: false },
          { status: 404 },
        );
      }
    }

    const productsList = await prisma.product.findMany({
      where: filters,
      orderBy: {
        price: sort === "asc" ? "asc" : "desc",
      },
    });

    if (!productsList || productsList.length === 0) {
      return NextResponse.json(
        { error: "Products not found", success: false },
        { status: 404 },
      );
    }

    return NextResponse.json({
      success: true,
      data: productsList,
      message: "Product list received successfully",
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal server error", success: false },
      { status: 500 },
    );
  }
}
