export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header>Public Header</header>
      <main>Public Main {children}</main>
      <footer>Public Footer</footer>
    </>
  );
}
