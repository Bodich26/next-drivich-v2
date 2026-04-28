export type SidebarType = "filters" | "cart" | "account" | null;

export type SidebarStore = {
  active: SidebarType;
  open: (type: SidebarType) => void;
  close: () => void;
  toggle: (type: SidebarType) => void;
};
