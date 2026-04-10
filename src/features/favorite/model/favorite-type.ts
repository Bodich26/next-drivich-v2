import { loadingStatus } from "@/shared";
import { Product } from "@prisma/client";

export type FavoriteProduct = Pick<
  Product,
  "id" | "brand" | "model" | "imageSrc" | "price" | "discount"
>;

export type FavoriteState = {
  items: FavoriteProduct[];
  error: string | null;
  message: string | null;
  status: loadingStatus;
};

export interface FavoriteActions {
  setFavorites: (items: FavoriteProduct[]) => void;
  addFavorite: (product: FavoriteProduct) => void;
  removeFavorite: (productId: number) => void;
  clearFavorites: () => void;
  setStatus: (status: loadingStatus) => void;
  setError: (error: string | null) => void;
  setMessage: (message: string | null) => void;
}

export interface FavoriteStore extends FavoriteState {
  actions: FavoriteActions;
}
