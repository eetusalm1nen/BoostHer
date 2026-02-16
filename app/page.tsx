import { Hero } from "@/components/Hero";
import { Logo } from "@/components/Logo";
import { Section } from "@/components/Section";
import { FlashcardStack } from "@/components/FlashcardStack";
import { FaqItem } from "@/components/FaqItem";
import { TeamPhoto } from "@/components/TeamPhoto";
import { WhyStatBox } from "@/components/WhyStatBox";
import { portfolioData } from "@/lib/portfolio-data";

export default function Home() {
  return (
    <main>
      <Hero data={portfolioData.hero} />
      <Logo />

      <Section id="why" title="Why?" largeTitle className="pb-6 pt-2 md:pb-8 md:pt-4">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {portfolioData.whyStats.map((stat, index) => (
            <WhyStatBox key={index} stat={stat} />
          ))}
        </div>
      </Section>

      <FlashcardStack />

      <Section id="team" title="Team" largeTitle className="pb-6 pt-6 md:pb-8 md:pt-10">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6">
          {portfolioData.team.map((member, index) => (
            <TeamPhoto key={index} member={member} />
          ))}
        </div>
      </Section>

      <Section id="faq" title="FAQ" largeTitle className="pt-4 md:pt-6">
        <div className="max-w-2xl">
          {portfolioData.faq.map((item, index) => (
            <FaqItem key={index} item={item} />
          ))}
        </div>
      </Section>

      <Section id="contact" title="Contact" compact>
        <p className="mb-6 max-w-xl text-zinc-600 dark:text-zinc-400">
          Get in touch! Collaborations, partnerships, etc.
        </p>
        <p className="mb-6 max-w-xl text-zinc-600 dark:text-zinc-400">wilma@boostturku.com</p>
       
      </Section>
    </main>
  );
}
