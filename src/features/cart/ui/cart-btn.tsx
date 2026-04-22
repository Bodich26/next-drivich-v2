import { Button } from "@/shared";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import { ClipLoader } from "react-spinners";
import { PUBLIC_ROUTES } from "@/../routes";
import { useCart } from "../model/use-cart";

export const CartBtn = () => {
  const { status, error, totalPrices, cartCount } = useCart();
  return (
    <Link href={PUBLIC_ROUTES.CART}>
      <Button className="font-medium text-base cursor-pointer" size={"lg"}>
        {status === "idle" || status === "loading" ? (
          <ClipLoader color="hsb(210 40% 98%)" size="17px" />
        ) : error ? (
          ""
        ) : (
          <>
            {totalPrices}
            <span className="block w-[1px] h-[20px] rounded-md bg-primary-foreground mt-1 mb-1"></span>
          </>
        )}
        <ShoppingBag />
        {status === "idle" || status === "loading" ? (
          <ClipLoader color="hsb(210 40% 98%)" size="17px" />
        ) : error ? (
          ""
        ) : (
          cartCount
        )}
      </Button>
    </Link>
  );
};
