import axios from "axios";
import { apiClient } from "@/shared";
import { API_ROUTES } from "@/../routes";

export const getCartApi = async () => {
  const CART_URL = `${API_ROUTES.CART}`;
  try {
    const res = await apiClient.get(CART_URL);
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.error || "Server error occurred");
    }

    throw new Error("Unknown error");
  }
};
