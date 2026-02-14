"use client";

import { useState } from "react";
import type { FaqItem as FaqItemType } from "@/lib/portfolio-data";

interface FaqItemProps {
  item: FaqItemType;
}

export function FaqItem({ item }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="border-b border-zinc-200 last:border-b-0 dark:border-zinc-800"
    >
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-4 text-left transition-colors hover:text-zinc-900 dark:hover:text-zinc-50"
      >
        <span className="font-medium text-zinc-900 dark:text-zinc-50">
          {item.question}
        </span>
        <span
          className={`ml-4 shrink-0 text-xl text-zinc-500 transition-transform ${isOpen ? "rotate-45" : ""}`}
        >
          +
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="pb-4 text-zinc-600 dark:text-zinc-400">
          {item.answer}
        </p>
      </div>
    </div>
  );
}
