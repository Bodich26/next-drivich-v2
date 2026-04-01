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

      setProducts: (items) => set({ items, status: "success", error: null }),
      setStatus: (status) => set({ status }),
      setError: (error) => set({ status: "error", error }),
      setMessage: (message) => set({ message }),
    }),
    { name: "ProductsStore" },
  ),
);
