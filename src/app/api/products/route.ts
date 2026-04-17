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
    const model = searchParams.get("searchModel");
    const powerRanges = searchParams.getAll("powerRanges[]");
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

    if (powerRanges.length > 0) {
      try {
        const orConditions: Prisma.ProductWhereInput[] = powerRanges
          .map((rangeStr) => {
            if (rangeStr === ">700") {
              return { power: { gte: 701 } };
            }

            const [minStr, maxStr] = rangeStr.split("-");
            const min = Number(minStr);
            const max = Number(maxStr);

            if (!isNaN(min) && !isNaN(max)) {
              return { power: { gte: min, lte: max } };
            }

            return null;
          })
          .filter(Boolean) as Prisma.ProductWhereInput[];

        if (orConditions.length > 0) {
          filters.OR = orConditions;
        }
      } catch (error) {
        console.error(error);
        return NextResponse.json(
          { error: "Error while parsing power ranges", success: false },
          { status: 404 },
        );
      }
    }

    let orderByPrice: Prisma.ProductOrderByWithRelationInput;

    if (sort === "cheap") {
      orderByPrice = { price: "asc" };
    } else if (sort === "expensive") {
      orderByPrice = { price: "desc" };
    } else {
      orderByPrice = { createdAt: "desc" };
    }

    const productsList = await prisma.product.findMany({
      where: filters,
      orderBy: orderByPrice,
    });

    if (!productsList) {
      return NextResponse.json(
        { error: "Products not found", success: false },
        { status: 401 },
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
