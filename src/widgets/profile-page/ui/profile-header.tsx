"use client";
import { useCurrentUser } from "@/shared";
import Image from "next/image";

export const ProfileHeader = () => {
  const user = useCurrentUser();

  return (
    <div className="bg-card border border-border rounded-md p-6 shadow-sm flex items-center gap-4">
      <div className="relative w-12 h-12">
        <Image
          src={user?.image || "/logo-profile.png"}
          alt="user-avatar"
          fill
          className="rounded-full object-cover"
        />
      </div>
      <div>
        <div className="font-semibold text-lg">
          {user?.name ?? "Unknown user"}
        </div>
        <div className="text-sm text-gray-500">{user?.email ?? "No email"}</div>
      </div>
    </div>
  );
};
