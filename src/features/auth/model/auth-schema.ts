import { z } from "zod";

export const loginSchema = z.object({
  email: z.email({
    error: "A valid email address is required.",
  }),
  password: z.string().min(6, {
    error: "Password must be at least 6 characters long.",
  }),
});

export const registerSchema = z.object({
  email: z.email({
    error: "A valid email address is required.",
  }),
  firstName: z.string().min(3, {
    error: "Name must be at least 3 characters long.",
  }),
  password: z.string().min(6, {
    error: "Password must be at least 6 characters long.",
  }),
});

export type loginFormData = z.infer<typeof loginSchema>;
export type registerFormData = z.infer<typeof registerSchema>;
