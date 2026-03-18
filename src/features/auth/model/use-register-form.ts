"use client";

import React from "react";
import { signIn } from "next-auth/react";
import { registerFormData, registerSchema } from "./auth-schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export const useRegisterForm = () => {
  const [errorForm, setErrorForm] = React.useState<string | undefined>("");
  const [successForm, setSuccessForm] = React.useState<string | undefined>("");
  const [loadingForm, setLoadingForm] = React.useState<boolean>(false);
  //   const [register] = useRegisterMutation();

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
      //   const response = await register(values).unwrap();
      //   if (response.success) {
      //     await signIn("credentials", {
      //       email: values.email,
      //       password: values.password,
      //       redirect: true,
      //     });
      //     setSuccess(response.message);
      //   } else {
      //     setLoading(false);
      //     setError(response.error);
      //   }
    } catch (err: unknown | string) {
      setLoadingForm(false);
      setErrorForm(String((err as { message: string }).message));
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
