import { Button, SheetTrigger } from "@/shared";
import { Heart } from "lucide-react";
import { ClipLoader } from "react-spinners";
import { useFavorites } from "../model/use-favorite";

export const OpenFavoriteBtn = () => {
  const { status, error, countFavorites } = useFavorites();
  return (
    <SheetTrigger asChild>
      <Button className="font-medium text-base cursor-pointer" size="lg">
        <Heart className="fill-white" />
        {status === "idle" || status === "loading" ? (
          <ClipLoader color="hsb(210 40% 98%)" size="17px" />
        ) : error ? (
          ""
        ) : (
          countFavorites
        )}
      </Button>
    </SheetTrigger>
  );
};
