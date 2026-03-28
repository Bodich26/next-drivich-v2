import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main className="pb-[41px] pt-[71px]">{children}</main>
      <Footer />
    </>
  );
}
