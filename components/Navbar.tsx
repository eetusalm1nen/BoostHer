import Link from "next/link";
import Image from "next/image";
import { images } from "@/lib/images";

const navLinks = [
  { href: "#why", label: "Why?" },
  { href: "#about", label: "About" },
  { href: "#team", label: "Team" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-[#b76e79] bg-[var(--background)]">
      <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center">
          <Image
            src={images.logo}
            alt="BoostHer"
            width={120}
            height={48}
            className="h-10 w-auto object-contain"
          />
        </Link>
        <ul className="flex gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
