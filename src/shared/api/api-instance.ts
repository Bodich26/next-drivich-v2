import axios, { AxiosError } from "axios";
import { API_ROUTES } from "@/../routes";
import { ApiError } from "../types";

export const apiInstance = axios.create({
  baseURL: `${API_ROUTES.BASE_URL}${API_ROUTES.BASE_API}`,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

apiInstance.interceptors.response.use(
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
