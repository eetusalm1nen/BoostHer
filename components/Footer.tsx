import Link from "next/link";
import { portfolioData } from "@/lib/portfolio-data";

interface FooterProps {
  data: (typeof portfolioData)["contact"];
}

export function Footer({ data }: FooterProps) {
  return (
    <footer className="border-t border-zinc-200 py-12 dark:border-zinc-800">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          © {new Date().getFullYear()} BoostHer.
        </p>
        <div className="flex gap-6">
          <a
            href={`mailto:${data.email}`}
            className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
          >
            {data.email}
          </a>
          {data.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
