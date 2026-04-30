"use client";
import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";
import { PUBLIC_ROUTES } from "@/../routes";
import { Button } from "@/shared";

type Variant = "icon" | "ghost";

type Props = {
  variant: Variant;
};

export const LogoutButton = ({ variant }: Props) => {
  const handleLogout = () => {
    signOut({ callbackUrl: PUBLIC_ROUTES.AUTH });
  };

  const variants: Record<Variant, React.ReactNode> = {
    icon: (
      <button
        className="flex items-center gap-2 cursor-pointer"
        onClick={handleLogout}
      >
        <LogOut width={18} height={18} />
        Logout
      </button>
    ),
    ghost: (
      <Button
        className="w-full cursor-pointer"
        size={"lg"}
        variant={"outline"}
        onClick={handleLogout}
      >
        Logout
      </Button>
    ),
  };
  return variants[variant];
};
