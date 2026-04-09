import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { FiltersStore } from "./filters-type";

export const filtersStore = create<FiltersStore>()(
  devtools(
    (set) => ({
      toggle: false,
      searchModel: "",
      priceMin: undefined,
      priceMax: undefined,
      engine: undefined,
      electro: undefined,
      powerRanges: [],
      sort: undefined,

      setFilters: (value) => set({ toggle: value }),
      toggleFilters: () => set((state) => ({ toggle: !state.toggle })),
      setSearchModel: (value) => set({ searchModel: value }),
      setPriceRange: (min, max) => set({ priceMin: min, priceMax: max }),
      resetFilters: () =>
        set({
          searchModel: "",
          priceMin: undefined,
          priceMax: undefined,
          engine: undefined,
          electro: undefined,
          powerRanges: [],
          sort: undefined,
        }),
    }),
    { name: "FiltersStore" },
  ),
);
