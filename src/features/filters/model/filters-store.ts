import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { FiltersState } from "./filters-type";

export const filtersStore = create<FiltersState>()(
  devtools(
    (set) => ({
      toggle: false,

      setFilters: (value) => set({ toggle: value }),
      toggleFilters: () => set((state) => ({ toggle: !state.toggle })),
    }),
    { name: "FiltersStore" },
  ),
);
