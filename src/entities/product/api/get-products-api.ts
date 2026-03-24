import { apiClientQs } from "@/shared";
import { API_ROUTES } from "@/../routes";
import { GetProductsFilters } from "../model/products-type";

export async function getProductsApi(filters: GetProductsFilters = {}) {
  const PRODUCTS_URL = `${API_ROUTES.PRODUCTS}`;
  const res = await apiClientQs.get(PRODUCTS_URL, {
    params: {
      price: {
        gte: filters.priceMin,
        lte: filters.priceMax,
      },
      engine: filters.engine ? "true" : undefined,
      electro: filters.electro ? "true" : undefined,
      model: filters.model,
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
  });
  return res.data;
}
