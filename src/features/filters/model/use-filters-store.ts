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
        setEngine: (value: boolean | undefined) => set({ engine: value }),
        setElectro: (value: boolean | undefined) => set({ electro: value }),
        setPowerRanges: (ranges: string[]) => set({ powerRanges: ranges }),
        resetFilters: () =>
          set({
            ...defaultFilters,
          }),
      },
    }),
    { name: "FilterStore" },
  ),
);
