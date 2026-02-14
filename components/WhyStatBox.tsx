import type { WhyStat } from "@/lib/portfolio-data";

interface WhyStatBoxProps {
  stat: WhyStat;
}

export function WhyStatBox({ stat }: WhyStatBoxProps) {
  return (
    <div className="relative rounded-xl border border-zinc-200/50 bg-white/95 p-6 text-center shadow-md transition-all duration-200 hover:z-10 hover:scale-105 hover:shadow-2xl dark:border-zinc-600/40 dark:bg-white/90">
      <div className="mb-2 text-3xl font-bold text-zinc-900 dark:text-zinc-50 sm:text-4xl">
        {stat.value}
      </div>
      <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
        {stat.label}
      </p>
    </div>
  );
}
