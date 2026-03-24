import { showToast, useCurrentUser } from "@/shared";
import { useFavoriteStore } from "./store";
import { getFavoriteProductsApi } from "../api/get-favorite-products-api";
import { FavoriteProduct } from "./favorite-type";

export const useFavorites = () => {
  const currentUser = useCurrentUser();
  const store = useFavoriteStore();

  const isFavorite = (productId: number) =>
    store.items.some((item) => item.id === productId);

  const toggleFavorite = async (product: FavoriteProduct) => {
    if (!currentUser) {
      showToast("auth", "favorites");
      return;
    }

    const wasFavorite = isFavorite(product.id);

    // Оптимистичное обновление
    if (wasFavorite) {
      store.removeFavorite(product.id);
    } else {
      store.addFavorite(product);
    }

    try {
      // await toggleFavoriteApi(product.id);
    } catch (err: any) {
      // Откатываем состояние при ошибке сервера
      if (wasFavorite) {
        store.addFavorite(product);
      } else {
        store.removeFavorite(product.id);
      }

      showToast(
        "error",
        "favorites",
        err.message || "Failed to change favorites",
      );
      store.setError(err.message || "Error");
    }
  };

  const loadFavorites = async () => {
    store.setLoading(true);
    store.setError(null);

    try {
      const data = await getFavoriteProductsApi();
      store.setFavorites(data);
    } catch (err: any) {
      store.setError(err.message || "Не удалось загрузить избранное");
    } finally {
      store.setLoading(false);
    }
  };

  return {
    favorites: store.items,
    isLoading: store.isLoading,
    error: store.error,
    isFavorite,
    toggleFavorite,
    loadFavorites,
  };
};
