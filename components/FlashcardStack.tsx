import { portfolioData } from "@/lib/portfolio-data";

const cards = [
  { id: "about", title: "About", content: portfolioData.about.bio },
  { id: "mission", title: "Mission", content: portfolioData.mission.text },
  { id: "vision", title: "Vision", content: portfolioData.vision.text },
];

export function FlashcardStack() {
  return (
    <section className="mx-auto max-w-4xl px-6 pb-6 pt-4 md:pb-8 md:pt-6">
      <div className="relative">
        {cards.map((card, index) => (
          <div
            key={card.id}
            id={card.id}
            className="relative mb-4 cursor-default rounded-xl border border-zinc-200/50 bg-white/95 p-6 shadow-md transition-all duration-300 ease-out last:mb-0 hover:z-50 hover:-translate-y-3 hover:scale-[1.02] hover:shadow-2xl dark:border-zinc-600/40 dark:bg-white/90"
            style={{
              marginTop: index > 0 ? "-2rem" : 0,
              zIndex: cards.length - index,
            }}
          >
            <h2 className="mb-4 text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
              {card.title}
            </h2>
            <p className="max-w-2xl text-zinc-600 dark:text-zinc-400">
              {card.content}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
