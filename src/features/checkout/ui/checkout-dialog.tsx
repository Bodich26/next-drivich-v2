"use client";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  Button,
} from "@/shared";
import { CheckoutForm } from "./checkout-form";

export const CheckoutAlertDialog = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="w-full mt-5 cursor-pointer" size={"lg"}>
          Proceed to Checkout
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent className="max-w-[700px] w-full max-h-[90vh] overflow-y-auto">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-2xl font-bold">
            Complete your order
          </AlertDialogTitle>
        </AlertDialogHeader>

        {/* Форма */}
        <CheckoutForm />

        {/* Cancel кнопка */}
        <div className="mt-4 flex justify-end w-full">
          <AlertDialogCancel className="cursor-pointer w-full" size={"lg"}>
            Cancel
          </AlertDialogCancel>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};
