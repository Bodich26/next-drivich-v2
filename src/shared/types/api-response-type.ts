export type ApiSuccess<T> = {
  success: true;
  message: string;
  data: T;
};

export type ApiError = {
  success: false;
  error: string;
  status: number;
};

export type ApiResponse<T> = ApiSuccess<T> | ApiError;

export type ActionResult =
  | { success: true; message: string }
  | { success: false; error: string };
