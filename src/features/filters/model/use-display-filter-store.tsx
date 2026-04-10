import { create } from "zustand";
import { DisplayFilterState, DisplayFilterStore } from "./filters-type";

const defaultDisplayFilter: DisplayFilterState = {
  isOpen: false,
};

export const useDisplayFilterStore = create<DisplayFilterStore>((set) => ({
  ...defaultDisplayFilter,

  actions: {
    open: () => set({ isOpen: true }),
    close: () => set({ isOpen: false }),
    toggle: () => set((state) => ({ isOpen: !state.isOpen })),
  },
}));
