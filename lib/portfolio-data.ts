export interface WhyStat {
  value: string;
  label: string;
}

export interface TeamMember {
  src: string;
  alt?: string;
  name: string;
  title: string;
  linkedIn?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ContactLink {
  label: string;
  href: string;
}

export const portfolioData = {
  hero: {
    name: "BoostHer",
    tagline: "ENCOURAGING WOMEN TO ENTREPRENEURSHIP",
    ctaText: "Explore more",
    ctaHref: "https://www.instagram.com/boostherturku/",
  },
  about: {
    bio: "BoostHer is a concept under Boost Turku, promoting the participation of women and minorities in the startup ecosystem trough events, workshops and networking opportunities. We provide practical tools for entrepreneurship and lower the treshold for joining the startup community.",
  },
  mission: {
    text: "Our mission is to increase the representation of women and minorities in entrepreneurship and startup ecosystem."
  },
  vision: {
    text: "A diverse and inclusive startup ecosystem where everyone has opportunity to innovate and succeed.",
  },
  whyStats: [
    {
      value: "11%",
      label: "of startups operating in Finland are founded by women (Startup Genome 2021)",
    },
    {
      value: "81%",
      label: "of founding teams have every member as a man (Danske Bank, 2022)",
    },
    {
      value: "103%",
      label: "more likely to be impact companies when there's at least one female founder (Danske Bank, 2023)",
    },
    {
      value: "35%",
      label: "more likely to outperform when leadership is gender-diverse (McKinsey)",
    },
  ],
  team: [
    { src: "/team/Wilma.png", alt: "Wilma", name: "Wilma", title: "Team Lead", linkedIn: "https://linkedin.com/in/wilma-tiainen/" },
    { src: "/team/India.png", alt: "India", name: "India", title: "KM & Mentoring Program Lead", linkedIn: "https://www.linkedin.com/in/india-claudino/" },
    { src: "/team/Uruj.png", alt: "Uruj", name: "Uruj", title: "Tech Lead", linkedIn: "https://www.linkedin.com/in/uruj-sarwar/" },
    { src: "/team/Kia.png", alt: "Kia", name: "Kia", title: "Volunteer Lead", linkedIn: "https://www.linkedin.com/in/kiakauppila/" },
    { src: "/team/Eeva.png", alt: "Eeva", name: "Eeva", title: "Marketing Lead", linkedIn: "https://www.linkedin.com/in/eeva-timonen/" },
    { src: "/team/Suvi.png", alt: "Suvi", name: "Suvi", title: "Wellbeing Lead", linkedIn: "https://www.linkedin.com/in/suvi-pajunen-b68006374/" },
  ],
  faq: [
    { question: "What is BoostHer?", answer: "BoostHer is a concept under Boost Turku that promotes the participation of women and minorities in the startup ecosystem through events, workshops, and networking opportunities." },
    { question: "Who can join BoostHer events?", answer: "Anyone interested in entrepreneurship and supporting diversity in startups is welcome. Our events are especially designed to encourage women and underrepresented groups to get involved in the startup community." },
    { question: "What kind of events do you organise?", answer: "We organise workshops, networking events and excursionsthat provide practical tools for entrepreneurship. Our goal is to lower the threshold for joining the startup community." },
    { question: "How can I get involved?", answer: "Follow us on Instagram and attend our events. We're always happy to collaborate with new partners and participants." },
    { question: "Where are BoostHer events held?", answer: "We operate in Turku, Finland. Follow our social media for the latest event announcements and locations." },
  ],
  contact: {
    email: "wilma@boostturku.com",
    links: [
      { label: "Instagram", href: "https://www.instagram.com/boostherturku/" },
      { label: "LinkedIn", href: "https://www.linkedin.com/company/boostherturku/" },
      { label: "Never give up!", href: "https://www.youtube.com/watch?v=Aq5WXmQQooo&list=RDAq5WXmQQooo&start_radio=1" },
    ] as ContactLink[],
  },
};
