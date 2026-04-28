import { create } from "zustand";
import { SidebarStore } from "../types/sidebar-type";

export const useSidebar = create<SidebarStore>((set) => ({
  active: null,

  open: (type) => set({ active: type }),

  close: () => set({ active: null }),

  toggle: (type) =>
    set((state) => ({
      active: state.active === type ? null : type,
    })),
}));
