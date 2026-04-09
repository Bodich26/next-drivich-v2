import { Button } from "@/shared";
import { Filter } from "lucide-react";
import { useControlFilters } from "../model/use-control-filter";

export const ToggleFilterBtn = () => {
  const { toggleFilters } = useControlFilters();
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
