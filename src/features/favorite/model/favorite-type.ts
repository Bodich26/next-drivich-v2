import { Product } from "@prisma/client";

export type FavoriteProduct = Pick<
  Product,
  "id" | "brand" | "model" | "imageSrc" | "price" | "discount"
>;

export type FavoritesState = {
  items: FavoriteProduct[];
  isLoading: boolean;
  error: string | null;
  message: string | null;
};

export type FavoritesStore = FavoritesState & {
  setFavorites: (items: FavoriteProduct[]) => void;
  addFavorite: (product: FavoriteProduct) => void;
  removeFavorite: (productId: number) => void;
  clearFavorites: () => void;
  setLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;
  setMessage: (message: string | null) => void;
};
