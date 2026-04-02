import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { ProductsStore } from "./products-type";

export const productsStore = create<ProductsStore>()(
  devtools(
    (set) => ({
      items: [],
      error: null,
      message: null,
      status: "idle",

      setProducts: (items) => set({ items }),
      setStatus: (status) => set({ status }),
      setError: (error) => set({ error }),
      setMessage: (message) => set({ message }),
    }),
    { name: "ProductsStore" },
  ),
);
