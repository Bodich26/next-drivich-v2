import { Container, SocialsIcon } from "@/shared";

export const Footer = () => {
  return (
    <footer className="border border-border bg-card pt-4 pb-4 fixed left-0 right-0 bottom-0 z-10">
      <Container>
        <div className="flex justify-between items-center">
          <span className="opacity-70">©Copyright Bodich 2026</span>
          <SocialsIcon />
        </div>
      </Container>
    </footer>
  );
};
