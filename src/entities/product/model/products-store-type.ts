import { loadingStatus } from "@/shared";
import { ProductEntities } from "./products-type";

export interface ProductsState {
  items: ProductEntities[];
  error: string | null;
  message: string | null;
  status: loadingStatus;
}

export interface ProductActions {
  setProducts: (items: ProductEntities[]) => void;
  setStatus: (status: loadingStatus) => void;
  setError: (error: string | null) => void;
  setMessage: (message: string | null) => void;
}

export interface ProductsStore extends ProductsState {
  actions: ProductActions;
}
