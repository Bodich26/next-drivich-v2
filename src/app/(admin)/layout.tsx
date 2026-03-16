export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header>Header Auth</header>
      <main>Main Auth {children}</main>
      <footer>Footer Auth</footer>
    </>
  );
}
