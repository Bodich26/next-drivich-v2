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
        removeCart: (productId) =>
          set((state) => ({
            items: state.items.filter((item) => item.id !== productId),
          })),
        updateQuantity: (productId, quantity) =>
          set((state) => ({
            items: state.items.map((item) =>
              item.id === productId ? { ...item, quantity } : item,
            ),
          })),
        clearCart: () => set({ items: [] }),
        setStatus: (status) => set({ status }),
        setError: (error) => set({ error }),
        setMessage: (message) => set({ message }),
      },
    }),
    { name: "CartStore" },
  ),
);
