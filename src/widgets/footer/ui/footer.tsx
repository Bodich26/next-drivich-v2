import { Container, SocialsIcon } from "@/shared";

export const Footer = () => {
  return (
    <footer className="border-t border-[#D2D2D9] pt-2 pb-2 fixed left-0 right-0 bottom-0">
      <Container>
        <div className="flex justify-between items-center">
          <span className="opacity-70">©Copyright Bodich 2026</span>
          <SocialsIcon />
        </div>
      </Container>
    </footer>
  );
};
