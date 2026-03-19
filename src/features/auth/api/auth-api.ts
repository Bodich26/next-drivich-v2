import { API_ROUTES } from "@/../routes";
import { loginFormData } from "../model/auth-schema";
import { AuthDto } from "../model/auth-type";
import { apiInstance, ApiResponse } from "@/shared";

export async function loginUserApi(formdata: loginFormData) {
  const LOGIN_URL = `${API_ROUTES.AUTH}${API_ROUTES.AUTH_LOGIN}`;
  const res = await apiInstance.post<ApiResponse<AuthDto>>(LOGIN_URL, formdata);
  return res.data;
}
