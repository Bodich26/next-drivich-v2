import { Button } from "@/shared";
import { CircleX } from "lucide-react";
import { useControlFilters } from "../model/use-control-filter";

export const ResetFiltersBtn = () => {
  const { resetFilters } = useControlFilters();
  return (
    <Button
      className="font-medium text-base cursor-pointer block"
      size="default"
      variant={"default"}
      onClick={resetFilters}
    >
      <CircleX />
    </Button>
  );
};
