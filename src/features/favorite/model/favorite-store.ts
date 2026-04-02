import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { FavoritesStore } from "./favorite-type";

export const favoriteStore = create<FavoritesStore>()(
  devtools(
    (set) => ({
      items: [],
      error: null,
      message: null,
      status: "idle",

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
    }),
    { name: "FavoritesStore" },
  ),
);
