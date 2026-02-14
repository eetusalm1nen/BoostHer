interface SectionProps {
  id?: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
  compact?: boolean;
  largeTitle?: boolean;
}

export function Section({ id, title, children, className = "", compact = false, largeTitle = false }: SectionProps) {
  return (
    <section
      id={id}
      className={`${compact ? "py-8 md:py-12" : "py-16 md:py-24"} ${className}`}
    >
      <div className="mx-auto max-w-4xl px-6">
        {title && (
          <h2 className={`${compact ? "mb-4" : "mb-10"} ${largeTitle ? "text-3xl md:text-4xl" : "text-2xl"} font-semibold tracking-tight text-zinc-900 dark:text-zinc-50`}>
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
}
