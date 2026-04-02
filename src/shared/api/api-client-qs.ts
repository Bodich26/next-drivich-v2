import axios from "axios";
import qs from "qs";
import { API_ROUTES } from "@/../routes";

export const apiClientQs = axios.create({
  baseURL: `${API_ROUTES.BASE_API}`,
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
  (res) => {
    return res;
  },
  (error) => {
    console.error("API Client Response Error:", error);
    return Promise.reject(error);
  },
);

apiClientQs.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    console.error("API Client Request Error:", error);
    return Promise.reject(error);
  },
);
