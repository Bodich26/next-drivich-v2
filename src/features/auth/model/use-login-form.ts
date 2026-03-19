"use client";
import React from "react";
import { signIn } from "next-auth/react";
import { loginFormData, loginSchema } from "./auth-schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginUserApi } from "../api/auth-api";
import { ApiError } from "@/shared";

export const useLoginForm = () => {
  const [errorForm, setErrorForm] = React.useState<string | undefined>("");
  const [successForm, setSuccessForm] = React.useState<string | undefined>("");
  const [loadingForm, setLoadingForm] = React.useState<boolean>(false);

  const formLogin = useForm<loginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleLogin = async (values: loginFormData) => {
    setErrorForm("");
    setSuccessForm("");
    setLoadingForm(true);
    try {
      const res = await loginUserApi(values);
      if (res.success) {
        await signIn("credentials", {
          email: values.email,
          password: values.password,
          redirect: true,
        });
        setSuccessForm(res.message);
      } else {
        setLoadingForm(false);
        setErrorForm(res.error);
      }
    } catch (err) {
      const error = err as ApiError;
      setLoadingForm(false);
      setErrorForm(error.error);
    }
  };
  return {
    formLogin,
    handleLogin,
    errorForm,
    loadingForm,
    successForm,
    setErrorForm,
  };
};
