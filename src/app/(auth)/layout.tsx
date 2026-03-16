export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header>Auth Header</header>
      <main>Main Admin {children}</main>
      <footer>Auth Footer</footer>
    </>
  );
}
