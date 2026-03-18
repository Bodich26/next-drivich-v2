import { Container, Logo } from "@/shared";
import Image from "next/image";
import { AuthSwitch } from "@/features/auth";

export default function AuthPage() {
  return (
    <div className="h-screen flex items-center justify-center">
      <Container className="w-full">
        <section className="flex justify-between bg-section rounded-md h-[709px]">
          <div className="flex-1 flex flex-col p-3">
            <Logo />
            <div className="flex-1 flex items-center justify-center">
              <AuthSwitch />
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <Image src="/banner.png" alt="Banner" width={594} height={709} />
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4">
              <h1 className="font-bold text-7xl text-white text-center">
                Welcome Back!
              </h1>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}
