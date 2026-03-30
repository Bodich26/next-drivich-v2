import axios, { AxiosError } from "axios";
import { ApiError } from "../types";

export const getErrorMessage = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    const axiosError = error as AxiosError<ApiError>;

    if (axiosError.response?.data) {
      const serverError = axiosError.response.data;
      return serverError.error || `Server error ${axiosError.response.status}`;
    } else if (axiosError.request) {
      return "No response received from server";
    } else {
      return `Request setup error: ${axiosError.message}`;
    }
  } else if (error instanceof Error) {
    return `Error: ${error.message}`;
  }

  return "An error occurred while fetching data. Please try again later.";
};
