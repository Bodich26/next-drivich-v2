import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { SessionWrapper } from "@/features/auth";
import { auth } from "@/../auth";
import { Providers, Toaster } from "@/shared";
import Script from "next/script";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Drivich Autos",
  description: "Your auto store",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <html lang="en" suppressHydrationWarning>
      {process.env.NODE_ENV === "development" && (
        <head>
          <Script
            src="//unpkg.com/react-scan/dist/auto.global.js"
            crossOrigin="anonymous"
            strategy="beforeInteractive"
          />
        </head>
      )}
      <body className={`${roboto.variable} antialiased overflow-hidden`}>
        <SessionWrapper session={session}>
          <Providers>{children}</Providers>
        </SessionWrapper>
        <Toaster />
      </body>
    </html>
  );
}
