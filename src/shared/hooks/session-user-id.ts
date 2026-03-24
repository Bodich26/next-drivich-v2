"use server";
import { auth } from "@/../auth";

export const sessionUserId = async () => {
  const session = await auth();
  return session?.user.id;
};
