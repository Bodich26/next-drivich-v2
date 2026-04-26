import { ProductWithQuantity } from "@/entities/product";
import { loadingStatus } from "@/shared";

export type ProductInCart = Omit<ProductWithQuantity, "color"> & {
  color: string;
  quantity: number;
};

export type CartState = {
  items: ProductInCart[];
  error: string | null;
  message: string | null;
  status: loadingStatus;
};

export interface CartActions {
  setCart: (items: ProductInCart[]) => void;
  removeCart: (items: number) => void;
  clearCart: () => void;
  updateQuantity: (productId: number, quantity: number) => void;
  setStatus: (status: loadingStatus) => void;
  setError: (error: string | null) => void;
  setMessage: (message: string | null) => void;
}

export interface CartStore extends CartState {
  actions: CartActions;
}

export type CartItemProps = Pick<
  ProductInCart,
  "id" | "imageSrc" | "model" | "price" | "color" | "quantity"
>;
