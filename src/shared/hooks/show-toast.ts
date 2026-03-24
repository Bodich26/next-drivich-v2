import { toast } from "sonner";

type ToastType = "add" | "remove" | "error" | "auth";
type EntityType = "favorites" | "cart";

export const showToast = (
  type: ToastType,
  entity: EntityType,
  error?: unknown,
) => {
  const entityLabel = entity === "favorites" ? "favorite" : "cart item";

  if (type === "add") {
    toast.success(`Added to ${entity}`, {
      description: `Successfully added ${entityLabel} ❤️`,
    });
  }

  if (type === "remove") {
    toast.success(`Removed from ${entity}`, {
      description: `Successfully removed ${entityLabel} ❌`,
    });
  }

  if (type === "error") {
    toast.error(`Something went wrong with ${entity}`, {
      description:
        error instanceof Error
          ? error.message
          : "Oops, something went wrong. Try again later",
    });
  }

  if (type === "auth") {
    toast.warning("Authorization required", {
      description: `Please log in to manage your ${entity}`,
    });
  }
};
