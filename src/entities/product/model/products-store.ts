import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { ProductsStore } from "./products-type";

export const productsStore = create<ProductsStore>()(
  devtools(
    (set) => ({
      items: [],
      isLoading: false,
      error: null,
      message: null,

      setProducts: (items) => set({ items, error: null }),
      setLoading: (isLoading) => set({ isLoading }),
      setError: (error) => set({ error }),
      setMessage: (message) => set({ message }),
    }),
    { name: "ProductsStore" },
  ),
);
