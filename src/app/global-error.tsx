"use client";
import React from "react";
import { ShowErrors } from "@/shared";

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
      <body className={`antialiased overflow-hidden`}>
        <ShowErrors error={error} reset={reset} />
      </body>
    </html>
  );
}
