export default function EmptyProductsPlaceholder() {
  return (
    <div className="flex h-96 flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
      <div className="flex flex-col items-center gap-1 text-center">
        <h3 className="text-2xl font-bold tracking-tight">
          We currently have no products available.
        </h3>
        <p className="text-sm text-muted-foreground">
          You can start shopping as soon as a product is added.
        </p>
      </div>
    </div>
  );
}
