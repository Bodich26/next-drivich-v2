type LoadingProps = {
  title: string;
  subtitle: string;
  showLogo?: boolean;
};

export const LoadingPage = ({
  title,
  subtitle,
  showLogo = true,
}: LoadingProps) => {
  return (
    <section className=" absolute inset-0">
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-card overflow-hidden">
        <div className="text-center space-y-8">
          {showLogo && (
            <div className="flex justify-center mb-6">
              <div className="text-4xl font-bold tracking-tighter text-primary">
                DRIVICH
              </div>
            </div>
          )}

          <div className="flex justify-center">
            <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
          </div>

          <div className="space-y-3">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground">
              {title}
            </h2>
            <p className="text-muted-foreground text-lg max-w-md mx-auto leading-relaxed">
              {subtitle}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
