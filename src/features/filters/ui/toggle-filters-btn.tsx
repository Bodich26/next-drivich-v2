import { Button } from "@/shared";
import { Filter } from "lucide-react";
import { useFilters } from "../model/use-filters";

export const ToggleFilterBtn = () => {
  const { toggleFilters } = useFilters();
  return (
    <Button
      className="font-medium text-base cursor-pointer hidden max-[930px]:block"
      size="default"
      variant={"outline"}
      onClick={toggleFilters}
    >
      <Filter />
    </Button>
  );
};
