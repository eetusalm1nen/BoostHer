import Link from "next/link";
import Image from "next/image";
import { portfolioData } from "@/lib/portfolio-data";
import { images } from "@/lib/images";

interface HeroProps {
  data: (typeof portfolioData)["hero"];
}

export function Hero({ data }: HeroProps) {
  return (
    <section className="relative flex min-h-[50vh] flex-col items-center justify-center px-6 text-center md:min-h-[45vh] lg:min-h-[40vh]">
      <div className="absolute inset-0 -z-10">
        <Image
          src={images.heroBanner}
          alt=""
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-white/80 dark:bg-zinc-950/80" aria-hidden />
      </div>
      <p className="relative mb-8 max-w-xl text-lg font-bold text-white sm:text-xl">
        {data.tagline}
      </p>
      <Link
        href={data.ctaHref}
        target="_blank"
        rel="noopener noreferrer"
        className="relative rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
      >
        {data.ctaText}
      </Link>
    </section>
  );
}
