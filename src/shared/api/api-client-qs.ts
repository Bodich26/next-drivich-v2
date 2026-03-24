import axios, { AxiosError } from "axios";
import qs from "qs";
import { API_ROUTES } from "@/../routes";
import { ApiError } from "../types";

export const apiClientQs = axios.create({
  baseURL: `${API_ROUTES.BASE_URL}${API_ROUTES.BASE_API}`,
  withCredentials: true,
  timeout: 10000,
  paramsSerializer: (params) =>
    qs.stringify(params, {
      arrayFormat: "brackets",
      encode: true,
      skipNulls: true,
      filter: (prefix, value) => {
        if (value === null || value === undefined) return;
        if (value instanceof Date) return value.toISOString();
        return value;
      },
    }),
});

apiClientQs.interceptors.response.use(
  (res) => res,
  (error: AxiosError<ApiError>) => {
    return Promise.reject(
      error.response?.data ?? {
        success: false,
        error: "Network error",
        status: 500,
      },
    );
  },
);
