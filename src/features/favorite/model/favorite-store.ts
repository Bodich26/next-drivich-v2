import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { FavoritesStore } from "./favorite-type";

export const favoriteStore = create<FavoritesStore>()(
  devtools(
    (set) => ({
      items: [],
      isLoading: false,
      error: null,
      message: null,

      setFavorites: (items) => set({ items, error: null }),
      addFavorite: (product) =>
        set((state) => ({ items: [...state.items, product] })),
      removeFavorite: (productId) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== productId),
        })),
      clearFavorites: () => set({ items: [] }),
      setLoading: (isLoading) => set({ isLoading }),
      setError: (error) => set({ error }),
      setMessage: (message) => set({ message }),
    }),
    { name: "FavoritesStore" },
  ),
);
