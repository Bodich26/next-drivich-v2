import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { SessionWrapper } from "@/features/auth";
import { auth } from "@/../auth";
import { Providers } from "@/shared";

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
      <body className={`${roboto.variable} antialiased`}>
        <SessionWrapper session={session}>
          <Providers>{children}</Providers>
        </SessionWrapper>
      </body>
    </html>
  );
}
