"use client";

import React from "react";
import { signIn } from "next-auth/react";
import { loginFormData, loginSchema } from "./auth-schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// import { useLoginMutation } from "../api/auth-api";

export const useLoginForm = () => {
  const [errorForm, setErrorForm] = React.useState<string | undefined>("");
  const [successForm, setSuccessForm] = React.useState<string | undefined>("");
  const [loadingForm, setLoadingForm] = React.useState<boolean>(false);
  // const [login] = useLoginMutation();

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
      // const response = await login(values).unwrap();
      // if (response.success) {
      //   await signIn("credentials", {
      //     email: values.email,
      //     password: values.password,
      //     redirect: true,
      //   });
      //   setSuccess(response.message);
      // } else {
      //   setLoading(false);
      //   setError(response.error);
      // }
    } catch (err: unknown | string) {
      setLoadingForm(false);
      setErrorForm(String((err as { message: string }).message));
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
