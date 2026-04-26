import { Product } from "@prisma/client";
export type ProductEntities = Omit<Product, "createdAt" | "updatedAt">;

export type ProductWithQuantity = ProductEntities & { quantity: number | 0 };
export type PriceProductView = "main" | "catalog" | "cart" | "favorites";
