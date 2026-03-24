import { Product } from "@prisma/client";

export type GetProductsFilters = {
  priceMin?: number;
  priceMax?: number;
  engine?: boolean;
  electro?: boolean;
  model?: string;
  powerRanges?: { min: number; max: number }[];
  sort?: "cheap" | "expensive" | "newest";
};

export type ProductWithQuantity = Product & { quantity: number | 0 };

export type PriceProductView = "main" | "catalog" | "cart" | "favorites";

export type PriceProductProps = {
  price: number;
  discount?: number;
  view: PriceProductView;
};
