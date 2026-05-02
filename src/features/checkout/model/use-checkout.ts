"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { PUBLIC_ROUTES } from "@/../routes";
import { CheckoutFormData, CheckoutSchema } from "./checkout-schema";
import { createOrder } from "../api/action";
import { useCart } from "@/features/cart";

export const useCheckout = () => {
  const [errorForm, setErrorForm] = React.useState<string | undefined>("");
  const [successForm, setSuccessForm] = React.useState<string | undefined>("");
  const [loadingForm, setLoadingForm] = React.useState<boolean>(false);

  const { clearCart } = useCart();
  const route = useRouter();

  const formCheckout = useForm<CheckoutFormData>({
    resolver: zodResolver(CheckoutSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      country: "",
      city: "",
      address: "",
      payment: "Cash",
    },
  });
  const handleCheckout = async (values: CheckoutFormData) => {
    setErrorForm("");
    setSuccessForm("");
    setLoadingForm(true);
    try {
      const res = await createOrder(values);
      if (!res.success) {
        setErrorForm(res.error || "Order creation failed");
        setLoadingForm(false);
        return;
      }
      setSuccessForm(res.message);

      setTimeout(() => {
        route.push(PUBLIC_ROUTES.PROFILE);
        clearCart();
      }, 1800);
    } catch (error) {
      setLoadingForm(false);
      setErrorForm(
        error instanceof Error ? error.message : "Internal server error",
      );
      setLoadingForm(false);
    }
  };
  return {
    formCheckout,
    handleCheckout,
    errorForm,
    loadingForm,
    successForm,
    setErrorForm,
  };
};
