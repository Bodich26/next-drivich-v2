import { Header } from "@/widgets/header";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* <Header /> */}
      <main>Public Main {children}</main>
      <footer>Public Footer</footer>
    </>
  );
}
