import { ApiResponse } from "@/shared";

type UserDto = {
  id: string;
  email: string;
  firstName: string;
};

type AuthDto = {
  user: UserDto;
  token: string;
};

export type LoginResponse = ApiResponse<AuthDto>;
export type RegisterResponse = ApiResponse<AuthDto>;
