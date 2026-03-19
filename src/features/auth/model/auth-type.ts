export type UserDto = {
  id: string;
  email: string;
  firstName: string;
  role?: string;
};

export type AuthDto = {
  user: UserDto;
  token: string;
};
