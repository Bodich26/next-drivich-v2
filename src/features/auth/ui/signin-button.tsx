"use client";
import { Button } from "@/shared";
import { LucideUser } from "lucide-react";
import { signIn } from "next-auth/react";

export const SigninButton = () => {
  return (
    <Button
      className="font-medium text-base cursor-pointer"
      type="submit"
      size="lg"
      onClick={() => signIn()}
    >
      <LucideUser />
      Login
    </Button>
  );
};
