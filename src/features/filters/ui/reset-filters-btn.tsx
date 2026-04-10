import { Button } from "@/shared";
import { CircleX } from "lucide-react";
import { useChangeFilters } from "../model/use-change-filters";

export const ResetFiltersBtn = () => {
  const { resetFilters } = useChangeFilters();
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
