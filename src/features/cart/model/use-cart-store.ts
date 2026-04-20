import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { CartState, CartStore } from "./cart-type";

const defaultCart: CartState = {
  items: [],
  error: null,
  message: null,
  status: "idle",
};

export const useCartStore = create<CartStore>()(
  devtools(
    (set) => ({
      ...defaultCart,

      actions: {
        setCart: (items) => set({ items }),
        clearCart: () => set({ items: [] }),
        setStatus: (status) => set({ status }),
        setError: (error) => set({ error }),
        setMessage: (message) => set({ message }),
      },
    }),
    { name: "CartStore" },
  ),
);
