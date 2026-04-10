import { Button } from "@/shared";
import { Filter } from "lucide-react";
import { useDisplayFilterStore } from "../model/use-display-filter-store";

export const ToggleFilterBtn = () => {
  const { actions } = useDisplayFilterStore();
  return (
    <Button
      className="font-medium text-base cursor-pointer hidden max-[930px]:block"
      size="default"
      variant={"outline"}
      onClick={actions.toggle}
    >
      <Filter />
    </Button>
  );
};
