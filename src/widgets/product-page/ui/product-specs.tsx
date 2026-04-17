import { Product } from "@prisma/client";
import { Gauge, TrendingUp, Zap } from "lucide-react";

type Props = Pick<Product, "speed" | "acceleration" | "power">;

export const ProductSpecs = ({ speed, acceleration, power }: Props) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t">
      <div className="text-center group">
        <div className="mx-auto w-16 h-16 flex items-center justify-center bg-primary/10 rounded-2xl mb-4 group-hover:bg-primary/20 transition-colors">
          <Gauge className="w-9 h-9 text-primary" />
        </div>
        <dt className="text-sm font-medium text-muted-foreground tracking-widest">
          TOP SPEED
        </dt>
        <dd className="text-5xl font-semibold mt-2">
          {speed} <span className="text-2xl">km/h</span>
        </dd>
      </div>

      <div className="text-center group">
        <div className="mx-auto w-16 h-16 flex items-center justify-center bg-primary/10 rounded-2xl mb-4 group-hover:bg-primary/20 transition-colors">
          <Zap className="w-9 h-9 text-primary" />
        </div>
        <dt className="text-sm font-medium text-muted-foreground tracking-widest">
          0–100 KM/H
        </dt>
        <dd className="text-5xl font-semibold mt-2">{acceleration}s</dd>
      </div>

      <div className="text-center group">
        <div className="mx-auto w-16 h-16 flex items-center justify-center bg-primary/10 rounded-2xl mb-4 group-hover:bg-primary/20 transition-colors">
          <TrendingUp className="w-9 h-9 text-primary" />
        </div>
        <dt className="text-sm font-medium text-muted-foreground tracking-widest">
          POWER
        </dt>
        <dd className="text-5xl font-semibold mt-2">
          {power} <span className="text-2xl">hp</span>
        </dd>
      </div>
    </div>
  );
};
