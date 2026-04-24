import Link from "next/link";
import { PUBLIC_ROUTES } from "@/../routes";

type Props = {
  title: string;
  desc: string;
  icon: string;
};
export const EmptyState = ({ desc, icon, title }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center text-center bg-card rounded-md p-10 shadow-sm">
      <div className="text-5xl mb-4">{icon}</div>
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-500 mb-6 max-w-md">{desc}</p>
      <div className="flex gap-4">
        <Link
          className="bg-primary rounded-md py-1.5 px-3 text-white font-medium text-base cursor-pointer"
          href={PUBLIC_ROUTES.HOME}
        >
          Catalog Page
        </Link>
      </div>
    </div>
  );
};
