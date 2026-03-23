export type GetProductsFilters = {
  priceMin?: number;
  priceMax?: number;
  engine?: boolean;
  electro?: boolean;
  model?: string;
  powerRanges?: { min: number; max: number }[];
  sort?: "cheap" | "expensive" | "newest";
};
