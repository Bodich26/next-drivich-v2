"use client";
import { Button, useSidebar } from "@/shared";
import { User } from "lucide-react";

export const UserInfoBtn = () => {
  const { toggle } = useSidebar();
  return (
    <Button
      className="font-medium text-base cursor-pointer hidden max-[930px]:block"
      size="default"
      variant={"outline"}
      onClick={() => toggle("account")}
    >
      <User />
    </Button>
  );
};
