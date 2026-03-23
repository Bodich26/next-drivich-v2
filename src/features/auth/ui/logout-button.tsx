"use client";
import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";
import { PUBLIC_ROUTES } from "@/../routes";

export const LogoutButton = () => {
  return (
    <button
      className="flex items-center gap-2"
      onClick={() => signOut({ callbackUrl: `${PUBLIC_ROUTES.AUTH}` })}
    >
      <LogOut width={18} height={18} />
      Logout
    </button>
  );
};
