"use client";
import React from "react";
import { ShowErrors } from "@/shared";
import "./globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function GlobalError({
  error,
  reset,
}: Readonly<{
  error: Error & { digest?: string };
  reset: () => void;
}>) {
  React.useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${roboto.variable} antialiased overflow-hidden`}>
        <ShowErrors error={error} reset={reset} />
      </body>
    </html>
  );
}
