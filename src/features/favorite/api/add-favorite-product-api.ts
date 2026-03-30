import axios from "axios";
import { apiClient } from "@/shared";
import { API_ROUTES } from "@/../routes";

export async function addFavoriteProductApi(productId: number) {
  const FAVORITES_URL = `${API_ROUTES.FAVORITES}`;
  try {
    const res = await apiClient.post(FAVORITES_URL, {
      data: productId,
    });
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.error || "Server error occurred");
    }

    throw new Error("Unknown error");
  }
}
