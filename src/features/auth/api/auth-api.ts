import { API_ROUTES } from "@/../routes";
import { loginFormData, registerFormData } from "../model/auth-schema";
import { AuthDto } from "../model/auth-type";
import { apiClient, ApiResponse } from "@/shared";

export async function loginUserApi(formdata: loginFormData) {
  const LOGIN_URL = `${API_ROUTES.AUTH}${API_ROUTES.AUTH_LOGIN}`;
  const res = await apiClient.post<ApiResponse<AuthDto>>(LOGIN_URL, formdata);
  return res.data;
}

export async function registerUserApi(formdata: registerFormData) {
  const REGISTER_URL = `${API_ROUTES.AUTH}${API_ROUTES.AUTH_REGISTER}`;
  const res = await apiClient.post<ApiResponse<AuthDto>>(
    REGISTER_URL,
    formdata,
  );
  return res.data;
}
