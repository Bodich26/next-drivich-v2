import { UserDropdown } from "@/entities/user";
import { SigninButton } from "@/features/auth";
import { CartBtn } from "@/features/cart";
import { OpenFavoriteBtn } from "@/features/favorite";
import { Container, useCurrentUser } from "@/shared";
import { FavoritesDrawer } from "@/widgets/favorites";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  const user = useCurrentUser();
  return (
    <header className="border-b border-[#D2D2D9] bg-color-white mb-4">
      <Container>
        <nav className="flex items-center justify-between pt-[8px] pb-[8px]">
          <Link href="/">
            <Image src="/logo.svg" alt="logo" width={131} height={54} />
          </Link>
          <div className="flex gap-[15px] items-center">
            {user ? (
              <>
                <FavoritesDrawer>
                  <OpenFavoriteBtn />
                </FavoritesDrawer>
                <CartBtn />
                <UserDropdown />
              </>
            ) : (
              <SigninButton />
            )}
          </div>
        </nav>
      </Container>
    </header>
  );
};
