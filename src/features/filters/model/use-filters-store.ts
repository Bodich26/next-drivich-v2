import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { FiltersStore } from "./filters-type";
import { ProductFilters } from "@/entities/product";

const defaultFilters: ProductFilters = {
  searchModel: "",
  priceMin: undefined,
  priceMax: undefined,
  engine: undefined,
  electro: undefined,
  powerRanges: [],
  sort: "newest",
};

export const useFiltersStore = create<FiltersStore>()(
  devtools(
    (set) => ({
      ...defaultFilters,

      actions: {
        setSearchModel: (value) => set({ searchModel: value }),
        setPriceRange: (min, max) => set({ priceMin: min, priceMax: max }),
        resetFilters: () =>
          set({
            ...defaultFilters,
          }),
      },
    }),
    { name: "FilterStore" },
  ),
);
