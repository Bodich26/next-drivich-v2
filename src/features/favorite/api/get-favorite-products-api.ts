import { apiClient } from "@/shared";
import { API_ROUTES } from "@/../routes";

export async function getFavoriteProductsApi() {
  const FAVORITES_URL = `${API_ROUTES.FAVORITES}`;
  const res = await apiClient.get(FAVORITES_URL);
  return res.data;
}
