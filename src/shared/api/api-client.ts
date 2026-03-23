import axios, { AxiosError } from "axios";
import { API_ROUTES } from "@/../routes";
import { ApiError } from "../types";

export const apiClient = axios.create({
  baseURL: `${API_ROUTES.BASE_URL}${API_ROUTES.BASE_API}`,
  withCredentials: true,
  timeout: 10000,
});

apiClient.interceptors.response.use(
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
