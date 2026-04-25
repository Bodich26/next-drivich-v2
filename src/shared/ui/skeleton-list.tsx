type SkeletonListProps = {
  count?: number;
  renderItem: (index: number) => React.ReactNode;
  className?: string;
};

export const SkeletonList = ({
  count = 3,
  renderItem,
  className,
}: SkeletonListProps) => {
  return (
    <div className={className}>
      {Array.from({ length: count }).map((_, i) => renderItem(i))}
    </div>
  );
};
