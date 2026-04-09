import { Button } from "./button";
import { Container } from "./container";

export const ShowErrors = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  return (
    <section className=" absolute inset-0">
      <div className="fixed inset-0 z-50 flex items-center justify-center main-gradient-90-deg overflow-hidden">
        <Container className="flex flex-col items-center justify-center text-center relative z-10">
          <div className="p-12  max-md:p-8 max-sm:p-6 max-w-[700px] w-full animate-fade-in">
            <h3 className="font-bold text-[42px] uppercase max-sm:text-4xl max-[425]:text-3xl!">
              Error
            </h3>
            <p className="mb-5">
              {error.message || "An unknown error occurred"}
            </p>
            <Button
              type="reset"
              variant={"default"}
              onClick={() => reset()}
              className="py-2 px-3 bg-primary rounded-md text-white"
            >
              Home Page
            </Button>
          </div>
        </Container>
      </div>
    </section>
  );
};
