import { Button, useSidebar } from "@/shared";
import { ShoppingCart } from "lucide-react";

export const ToggleSummaryBtn = () => {
  const { toggle } = useSidebar();
  return (
    <Button
      className="font-medium text-base cursor-pointer hidden max-[930px]:block"
      size="default"
      variant={"outline"}
      onClick={() => toggle("cart")}
    >
      <ShoppingCart />
    </Button>
  );
};
