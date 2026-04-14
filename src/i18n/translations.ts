export type Language = 'en' | 'de';

export interface Translations {
  nav: {
    home: string;
    projects: string;
    about: string;
    contact: string;
  };
  hero: {
    greeting: string;
    name: string;
    title: string;
    subtitle: string;
    cta: string;
  };
  about: {
    sectionTitle: string;
    description: string[];
  };
  skills: {
    sectionTitle: string;
    sectionSubtitle: string;
    sectionIntro: string;
    items: { title: string; description: string; icon: string }[];
  };
  projects: {
    sectionTitle: string;
    sectionSubtitle: string;
    viewProject: string;
    backToProjects: string;
    overview: string;
    role: string;
    duration: string;
    tools: string;
    challenge: string;
    solution: string;
    results: string;
  };
  contact: {
    sectionTitle: string;
    description: string;
    email: string;
    linkedin: string;
  };
  footer: {
    copyright: string;
    madeWith: string;
  };
}

const en: Translations = {
  nav: {
    home: 'Home',
    projects: 'Projects',
    about: 'About',
    contact: 'Contact',
  },
  hero: {
    greeting: 'Hello, I\'m',
    name: 'Kathrin Möckl',
    title: 'UX Designer',
    subtitle: 'I specialize in user-centered research and prototyping, from user interviews and card sorting to tree testing and usability testing. With a background in graphic design and team leadership, I bring a strong sense for visual design, communication, and user behavior. I enjoy structured work, solution-oriented thinking, and collaboration in interdisciplinary teams.',
    cta: 'View My Work',
  },
  about: {
    sectionTitle: 'About Me',
    description: [
      'I\'m a passionate UX Designer with a keen eye for detail and a deep understanding of user behavior. My design philosophy centers around empathy, research, and iterative thinking.',
      'With experience across various industries, I bring a versatile skill set that combines strategic thinking with hands-on design execution. I believe great design is invisible — it just works.',
      'the quick brown fox jumps over the lazy dog',
    ],
  },
  skills: {
    sectionTitle: 'What I Do',
    sectionSubtitle: 'Services Overview',
    sectionIntro: 'I create focused digital service experiences with clean visuals, strong hierarchy and polished delivery. These offerings are built to shape a coherent brand presence across screens and interactions.',
    items: [
      {
        title: 'Branding',
        description: 'From naming and visual systems to brand guidelines, I develop identities that feel modern, confident and memorable.',
        icon: '🧭',
      },
      {
        title: 'UI / UX Design',
        description: 'I deliver intuitive interface systems with strong visual structure, clear user flows and polished digital presentation.',
        icon: '🎨',
      },
      {
        title: 'Asset Production',
        description: 'From digital assets to campaign visuals, I create consistent graphic output that supports the brand language.',
        icon: '🖼️',
      },
      {
        title: 'Web & App Design',
        description: 'I design responsive web and product experiences with clarity, speed and a strong focus on the end user.',
        icon: '💻',
      },
      {
        title: 'Interaction Design',
        description: 'I craft motion, transitions and micro-interactions that make interfaces feel intuitive and alive.',
        icon: '✨',
      },
      {
        title: 'Webflow',
        description: 'I build production-ready Webflow experiences that look refined and are easy to manage.',
        icon: '🌐',
      },
    ],
  },
  projects: {
    sectionTitle: 'Featured Projects',
    sectionSubtitle: 'A selection of recent work that showcases my design process and problem-solving approach.',
    viewProject: 'View Case Study',
    backToProjects: '← Back to Projects',
    overview: 'Overview',
    role: 'Role',
    duration: 'Duration',
    tools: 'Tools',
    challenge: 'The Challenge',
    solution: 'The Solution',
    results: 'Results & Impact',
  },
  contact: {
    sectionTitle: 'Let\'s Connect',
    description: 'I\'m always open to discussing new opportunities, creative ideas, or ways to bring your vision to life. Let\'s create something amazing together.',
    email: 'Send an Email',
    linkedin: 'Connect on LinkedIn',
  },
  footer: {
    copyright: '© 2026 Kathrin Möckl. All rights reserved.',
    madeWith: 'Designed with passion',
  },
};

const de: Translations = {
  nav: {
    home: 'Start',
    projects: 'Projekte',
    about: 'Über mich',
    contact: 'Kontakt',
  },
  hero: {
    greeting: 'Hallo, ich bin',
    name: 'Kathrin Möckl',
    title: 'UX Designerin',
    subtitle: 'Ich gestalte intuitive digitale Erlebnisse, die Nutzerbedürfnisse und Geschäftsziele verbinden. Mit einem menschzentrierten Ansatz verwandle ich komplexe Probleme in elegante, zugängliche Lösungen.',
    cta: 'Meine Arbeiten ansehen',
  },
  about: {
    sectionTitle: 'Über Mich',
    description: [
      'Ich bin eine leidenschaftliche UX Designerin mit einem Auge fürs Detail und einem tiefen Verständnis für Nutzerverhalten. Meine Designphilosophie basiert auf Empathie, Forschung und iterativem Denken.',
      'Mit Erfahrung in verschiedenen Branchen bringe ich ein vielseitiges Skillset mit, das strategisches Denken mit praktischer Designumsetzung verbindet. Ich glaube, dass großartiges Design unsichtbar ist — es funktioniert einfach.',
      'Wenn ich nicht gerade designe, entdecke ich neue Designtrends, besuche UX Meetups oder skizziere Ideen in meinem Notizbuch.',
    ],
  },
  skills: {
    sectionTitle: 'Was ich mache',
    sectionSubtitle: 'Dienstleistungsübersicht',
    sectionIntro: 'Ich gestalte digitale Service-Erlebnisse mit klarer Struktur, reduzierten Visuals und einer starken Marke. Diese Leistungen schaffen konsistente Präsenz über digitale Touchpoints hinweg.',
    items: [
      {
        title: 'Branding',
        description: 'Vom Naming über visuelle Systeme bis hin zu Brand Guidelines entwickle ich Identitäten, die modern, selbstbewusst und einprägsam sind.',
        icon: '🧭',
      },
      {
        title: 'UI / UX Design',
        description: 'Ich liefere intuitive Interfaces mit klarer Struktur, durchdachten Nutzerflüssen und einer polierten digitalen Erscheinung.',
        icon: '🎨',
      },
      {
        title: 'Asset Production',
        description: 'Von digitalen Assets bis hin zu Kampagnenvisuals: Ich erstelle konsistente Grafikprodukte, die die Marke stärken.',
        icon: '🖼️',
      },
      {
        title: 'Web & App Design',
        description: 'Ich designe responsive Web- und Produkt-Erlebnisse mit Fokus auf Klarheit, Geschwindigkeit und Nutzerfreundlichkeit.',
        icon: '💻',
      },
      {
        title: 'Interaction Design',
        description: 'Ich kreiere Motion, Übergänge und Micro-Interactions, die Interfaces intuitiv und lebendig machen.',
        icon: '✨',
      },
      {
        title: 'Webflow',
        description: 'Ich baue produktionsreife Webflow-Erlebnisse, die hochwertig aussehen und einfach zu pflegen sind.',
        icon: '🌐',
      },
    ],
  },
  projects: {
    sectionTitle: 'Ausgewählte Projekte',
    sectionSubtitle: 'Eine Auswahl aktueller Arbeiten, die meinen Designprozess und Problemlösungsansatz zeigen.',
    viewProject: 'Case Study ansehen',
    backToProjects: '← Zurück zu Projekten',
    overview: 'Überblick',
    role: 'Rolle',
    duration: 'Dauer',
    tools: 'Tools',
    challenge: 'Die Herausforderung',
    solution: 'Die Lösung',
    results: 'Ergebnisse & Impact',
  },
  contact: {
    sectionTitle: 'Kontakt aufnehmen',
    description: 'Ich freue mich immer über neue Möglichkeiten, kreative Ideen oder Wege, Ihre Vision zum Leben zu erwecken. Lassen Sie uns gemeinsam etwas Großartiges schaffen.',
    email: 'E-Mail senden',
    linkedin: 'Auf LinkedIn vernetzen',
  },
  footer: {
    copyright: '© 2026 Kathrin Möckl. Alle Rechte vorbehalten.',
    madeWith: 'Mit Leidenschaft gestaltet',
  },
};

export const translations: Record<Language, Translations> = { en, de };
