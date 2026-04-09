import { ProductsWithFilters } from "@/entities/product";

export type FiltersStore = ProductsWithFilters & {
  toggle: boolean;
  setFilters: (value: boolean) => void;
  toggleFilters: () => void;
  setSearchModel: (value: string) => void;
  setPriceRange: (min?: number, max?: number) => void;
  resetFilters: () => void;
};
