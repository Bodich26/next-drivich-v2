import { ProductEntities, ProductWithQuantity } from "@/entities/product";
import { loadingStatus } from "@/shared";

export type CartState = {
  items: ProductWithQuantity[];
  error: string | null;
  message: string | null;
  status: loadingStatus;
};

export interface CartActions {
  setCart: (items: ProductWithQuantity[]) => void;
  clearCart: () => void;
  setStatus: (status: loadingStatus) => void;
  setError: (error: string | null) => void;
  setMessage: (message: string | null) => void;
}

export interface CartStore extends CartState {
  actions: CartActions;
}
