import { apiClientQs } from "@/shared";
import { API_ROUTES } from "@/../routes";
import { ProductFilters } from "../model/products-type";
import axios from "axios";

export async function getProductsApi(
  filters: ProductFilters = {},
  signal?: AbortSignal,
) {
  const PRODUCTS_URL = `${API_ROUTES.PRODUCTS}`;
  try {
    const res = await apiClientQs.get(PRODUCTS_URL, {
      params: {
        price: {
          gte: filters.priceMin,
          lte: filters.priceMax,
        },
        engine: filters.engine ? "true" : undefined,
        electro: filters.electro ? "true" : undefined,
        searchModel: filters.searchModel,
        powerRanges: filters.powerRanges
          ? JSON.stringify(filters.powerRanges)
          : undefined,
        sort:
          filters.sort === "cheap"
            ? "asc"
            : filters.sort === "expensive"
              ? "desc"
              : undefined,
      },
      signal,
    });
    return res.data;
  } catch (error) {
    if (axios.isCancel(error)) {
      return null;
    }

    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.error || "Server error occurred");
    }

    throw new Error("Unknown error");
  }
}
