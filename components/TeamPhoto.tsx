import Image from "next/image";
import Link from "next/link";
import type { TeamMember } from "@/lib/portfolio-data";

interface TeamPhotoProps {
  member: TeamMember;
}

export function TeamPhoto({ member }: TeamPhotoProps) {
  return (
    <div className="flex flex-col">
      <div className="aspect-square overflow-hidden rounded-lg bg-zinc-100 dark:bg-zinc-800">
        <Image
          src={member.src}
          alt={member.alt ?? member.name}
          width={300}
          height={300}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="mt-4 space-y-1">
        <p className="font-semibold text-zinc-900 dark:text-zinc-50">{member.name}</p>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">{member.title}</p>
        {member.linkedIn && (
          <Link
            href={member.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm font-medium text-zinc-600 underline transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
          >
            LinkedIn
          </Link>
        )}
      </div>
    </div>
  );
}
