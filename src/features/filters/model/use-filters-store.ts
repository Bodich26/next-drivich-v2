import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { FiltersStore } from "./filters-type";
import { ProductFilters, SortProducts } from "@/shared";
const defaultFilters: ProductFilters = {
  searchModel: "",
  priceMin: undefined,
  priceMax: undefined,
  engine: undefined,
  electro: undefined,
  powerRanges: [],
  sort: "expensive",
};

export const useFiltersStore = create<FiltersStore>()(
  devtools(
    (set) => ({
      ...defaultFilters,
      hasChanges: false,

      actions: {
        setSearchModel: (value) =>
          set({ searchModel: value, hasChanges: true }),
        setPriceRange: (min, max) =>
          set({ priceMin: min, priceMax: max, hasChanges: true }),
        setEngine: (value: boolean | undefined) =>
          set({ engine: value, hasChanges: true }),
        setElectro: (value: boolean | undefined) =>
          set({ electro: value, hasChanges: true }),
        setPowerRanges: (ranges: string[]) =>
          set({ powerRanges: ranges, hasChanges: true }),
        setSortByPrice: (sort: SortProducts) => set({ sort, hasChanges: true }),
        resetFilters: () =>
          set({
            ...defaultFilters,
            hasChanges: false,
          }),
      },
    }),
    { name: "FilterStore" },
  ),
);
