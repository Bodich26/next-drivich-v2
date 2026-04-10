import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { ProductsState, ProductsStore } from "./products-store-type";

const defaultProducts: ProductsState = {
  items: [],
  error: null,
  message: null,
  status: "idle",
};

export const productsStore = create<ProductsStore>()(
  devtools(
    (set) => ({
      ...defaultProducts,

      actions: {
        setProducts: (items) => set({ items }),
        setStatus: (status) => set({ status }),
        setError: (error) => set({ error }),
        setMessage: (message) => set({ message }),
      },
    }),
    { name: "ProductsStore" },
  ),
);
