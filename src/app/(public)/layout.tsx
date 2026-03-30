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

      <main className="pb-[100px] pt-[130px] max-md:pb-[80px] max-md:pt-[90px] overflow-y-auto h-screen">
        {children}
      </main>
      <Footer />
    </>
  );
}
