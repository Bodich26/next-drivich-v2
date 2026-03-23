"use client";
import React from "react";
import { signIn } from "next-auth/react";
import { loginFormData, loginSchema } from "./auth-schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { PUBLIC_ROUTES } from "@/../routes";

export const useLoginForm = () => {
  const [errorForm, setErrorForm] = React.useState<string | undefined>("");
  const [successForm, setSuccessForm] = React.useState<string | undefined>("");
  const [loadingForm, setLoadingForm] = React.useState<boolean>(false);
  const route = useRouter();

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
      const result = await signIn("credentials", {
        email: values.email,
        password: values.password,
        isRegister: "false",
        redirect: false,
      });

      if (result?.error) {
        if (result.error === "CredentialsSignin") {
          setLoadingForm(false);
          setErrorForm("Credentials error");
        }
      } else {
        route.push(`${PUBLIC_ROUTES.HOME}`);
      }
    } catch (error) {
      console.log(error);

      setLoadingForm(false);
      setErrorForm("Internal server error");
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
