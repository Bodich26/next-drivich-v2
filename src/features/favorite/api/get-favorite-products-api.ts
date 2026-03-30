import { apiClient } from "@/shared";
import { API_ROUTES } from "@/../routes";
import axios from "axios";

export async function getFavoriteProductsApi() {
  const FAVORITES_URL = `${API_ROUTES.FAVORITES}`;
  try {
    const res = await apiClient.get(FAVORITES_URL);
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.error || "Server error occurred");
    }

    throw new Error("Unknown error");
  }
}
