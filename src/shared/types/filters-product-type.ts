export type SortProducts = "expensive" | "cheap";
export interface ProductFilters {
  priceMin?: number;
  priceMax?: number;
  engine?: boolean;
  electro?: boolean;
  searchModel?: string;
  powerRanges?: string[];
  sort?: SortProducts;
}
