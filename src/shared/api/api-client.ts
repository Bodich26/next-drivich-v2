import axios from "axios";
import { API_ROUTES } from "@/../routes";

export const apiClient = axios.create({
  baseURL: `${API_ROUTES.BASE_API}`,
  withCredentials: true,
  timeout: 10000,
});

apiClient.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    console.error("API Client Response Error:", error);
    return Promise.reject(error);
  },
);

apiClient.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    console.error("API Client Request Error:", error);
    return Promise.reject(error);
  },
);
