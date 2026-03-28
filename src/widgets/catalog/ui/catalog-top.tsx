export const CatalogTop = ({ productsLength }: { productsLength: number }) => {
  return (
    <div className="flex justify-between mb-6 mt-2">
      <span>{productsLength} result</span>
      Сортировка
      {/* <SortedProducts setSortOrder={setSortOrder} /> */}
    </div>
  );
};
