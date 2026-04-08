import { Container } from "@/shared";
import { PUBLIC_ROUTES } from "@/../routes";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className=" absolute inset-0">
      <div className="fixed inset-0 z-50 flex items-center justify-center main-gradient-90-deg overflow-hidden">
        <Container className="flex flex-col items-center justify-center text-center relative z-10">
          <div className="p-12  max-md:p-8 max-sm:p-6 max-w-[700px] w-full animate-fade-in">
            <h3 className="font-bold text-[42px] uppercase max-sm:text-4xl max-[425]:text-3xl!">
              Page not found
            </h3>
            <p className="mb-5">
              There is no such page, please return to the home page.
            </p>
            <Link
              href={PUBLIC_ROUTES.HOME}
              className="py-2 px-3 bg-primary rounded-md text-white"
            >
              Home Page
            </Link>
          </div>
        </Container>
      </div>
    </section>
  );
}
