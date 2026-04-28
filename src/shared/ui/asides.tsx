"use client";
import { useSidebar } from "../hooks";
import { cn } from "../lib";
import { SidebarType } from "../types/sidebar-type";

type Props = {
  id: SidebarType;
  children: React.ReactNode;
};

export const Asides = ({ children, id }: Props) => {
  const active = useSidebar((s) => s.active);
  const toggle = useSidebar((s) => s.toggle);

  return (
    <>
      {active && (
        <div
          className="fixed inset-0 z-50 bg-black/10 duration-100 supports-backdrop-filter:backdrop-blur-xs data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0"
          onClick={() => toggle(id)}
        />
      )}
      <aside
        className={cn(
          "sticky top-8 bg-card border border-border rounded-md p-8 shadow-sm",

          // DESKTOP
          "w-75 sticky top-0 self-start",
          "max-[930px]:static",

          // MOBILE
          "max-[930px]:fixed max-[930px]:top-0 max-[930px]:left-0 max-[930px]:bottom-0 max-[930px]:h-full max-[930px]:overflow-auto",
          "max-[930px]:max-h-full",
          "max-[930px]:z-50 max-[930px]:rounded-l-none",

          // АНИМАЦИЯ
          "transition-transform duration-300",
          active
            ? "max-[930px]:translate-x-0"
            : "max-[930px]:-translate-x-full",
        )}
      >
        {children}
      </aside>
    </>
  );
};
