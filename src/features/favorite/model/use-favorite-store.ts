import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { FavoriteState, FavoriteStore } from "./favorite-type";

const defaultFavorite: FavoriteState = {
  items: [],
  error: null,
  message: null,
  status: "idle",
};

export const useFavoriteStore = create<FavoriteStore>()(
  devtools(
    (set) => ({
      ...defaultFavorite,

      actions: {
        setFavorites: (items) => set({ items }),
        addFavorite: (product) =>
          set((state) => ({ items: [...state.items, product] })),
        removeFavorite: (productId) =>
          set((state) => ({
            items: state.items.filter((item) => item.id !== productId),
          })),
        clearFavorites: () => set({ items: [] }),
        setStatus: (status) => set({ status }),
        setError: (error) => set({ error }),
        setMessage: (message) => set({ message }),
      },
    }),
    { name: "FavoriteStore" },
  ),
);
