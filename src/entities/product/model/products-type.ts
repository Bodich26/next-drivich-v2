import { Product } from "@prisma/client";

export type Products = Omit<Product, "createdAt" | "updatedAt">;

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

export type ProductsState = {
  items: Products[];
  isLoading: boolean;
  error: string | null;
  message: string | null;
};

export type ProductsStore = ProductsState & {
  setProducts: (items: Products[]) => void;
  setLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;
  setMessage: (message: string | null) => void;
};
