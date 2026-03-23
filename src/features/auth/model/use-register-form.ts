"use client";
import React from "react";
import { signIn } from "next-auth/react";
import { registerFormData, registerSchema } from "./auth-schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { PUBLIC_ROUTES } from "@/../routes";

export const useRegisterForm = () => {
  const [errorForm, setErrorForm] = React.useState<string | undefined>("");
  const [successForm, setSuccessForm] = React.useState<string | undefined>("");
  const [loadingForm, setLoadingForm] = React.useState<boolean>(false);
  const route = useRouter();

  const formRegister = useForm<registerFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      firstName: "",
      password: "",
    },
  });

  const handleRegister = async (values: registerFormData) => {
    setErrorForm("");
    setSuccessForm("");
    setLoadingForm(true);

    try {
      const result = await signIn("credentials", {
        email: values.email,
        firstName: values.firstName,
        password: values.password,
        isRegister: "true",
        redirect: false,
      });

      if (result.error) {
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
    formRegister,
    errorForm,
    successForm,
    loadingForm,
    handleRegister,
    setErrorForm,
  };
};
