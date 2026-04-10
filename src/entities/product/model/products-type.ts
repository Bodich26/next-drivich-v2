import { Product } from "@prisma/client";
export type ProductEntities = Omit<Product, "createdAt" | "updatedAt">;
export interface ProductFilters {
  priceMin?: number;
  priceMax?: number;
  engine?: boolean;
  electro?: boolean;
  searchModel?: string;
  powerRanges?: { min: number; max: number }[];
  sort?: "cheap" | "expensive" | "newest";
}

export type ProductWithQuantity = ProductEntities & { quantity: number | 0 };
export type PriceProductView = "main" | "catalog" | "cart" | "favorites";
