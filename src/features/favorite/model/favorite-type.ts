import { ApiResponse } from "@/shared";

export type FavoriteProduct = {
  id: number;
  brand: string;
  model: string;
  imageSrc: string;
  price: number;
  discount?: number;
};

export type FavoritesState = {
  items: FavoriteProduct[];
  isLoading: boolean;
  error: string | null;
};

export type FavoritesStore = FavoritesState & {
  setFavorites: (items: FavoriteProduct[]) => void;
  addFavorite: (product: FavoriteProduct) => void;
  removeFavorite: (productId: number) => void;
  clearFavorites: () => void;
  setLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;
};

export type FavoritesResponse = ApiResponse<FavoriteProduct[]>;
