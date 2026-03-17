import { Container, SocialsIcon } from "@/shared";

export const Footer = () => {
  return (
    <footer className="border-t border-[#D2D2D9]  bg-color-white pt-2 pb-2 mt-2">
      <Container>
        <div className="flex justify-between items-center">
          <span className="opacity-70">©Copyright Bodich 2026</span>
          <SocialsIcon />
        </div>
      </Container>
    </footer>
  );
};
