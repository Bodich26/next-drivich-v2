type ApiSuccess<T = unknown> = {
  success: true;
  data: T;
  message: string;
};

type ApiError = {
  success: false;
  error: string;
  status: number;
};

export type ApiResponse<T = unknown> = ApiSuccess<T> | ApiError;
