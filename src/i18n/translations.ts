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
    title: 'UX  · UI ·  RESEARCH ·  GRAPHIC DESIGN',
    subtitle: 'UX Designer & Researcher from munich, crafting research-driven digital experiences that resonate and scale.',
    cta: 'View My Work',
  },
  about: {
    sectionTitle: 'About Me',
    description: [
      'I believe good technology needs no explanation. It just works, for everyone, not only for the people who build it.',
      'I come from the customer side. I spent years in retail management understanding what people actually need, trained my visual thinking as a graphic designer and spent time in two international corporations doing UX research and design from scratch. That combination is what shapes my work as a UX designer.',
    ],
  },
  skills: {
    sectionTitle: 'What I Do',
    sectionSubtitle: 'Services Overview',
    sectionIntro: 'I create focused digital service experiences with clean visuals, strong hierarchy and polished delivery. These offerings are built to shape a coherent brand presence across screens and interactions.',
    items: [
      {
        title: 'UI / UX Design',
        description: 'I deliver intuitive interface systems with strong visual structure, clear user flows and polished digital presentation.',
        icon: '🎨',
      },
      {
        title: 'User Research',
        description: 'I apply UX research methods, from interviews and analytics to usability testing, to inform design decisions.',
        icon: '🔍',
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
    title: 'UX  · UI ·  RESEARCH ·  GRAPHIC DESIGN',
    subtitle: 'Als UX Designerin & Researcherin aus München, schaffe ich nutzerzentrierte intuitive Produkte mit großer Wirkung.',
    cta: 'Meine Arbeiten ansehen',
  },
  about: {
    sectionTitle: 'Über Mich',
    description: [
      'Ich glaube, dass gute Technologie keine lange Erklärung brauchen sollte. Sie funktioniert einfach, für jeden und nicht nur für die, die sie bauen.',
      'Als Shopleitung & E-Commerce hab ich jahrelang gelernt, was Nutzer*innen kommunizieren, als Grafikerin gelernt visuell zu denken und in zwei internationalen Konzernen Research und Design von Grund auf gemacht. Das macht den Unterschied in meiner Arbeit als UX Designerin.',
    ],
  },
  skills: {
    sectionTitle: 'Was ich mache',
    sectionSubtitle: 'Dienstleistungsübersicht',
    sectionIntro: '',
    items: [
      {
        title: 'UX Design',
        description: 'Informationsarchitektur, klare Nutzerflüsse und nachvollziehbare Interaktionskonzepte bilden die Grundlage meiner Arbeit.',
        icon: '🔍',
      },
      {
        title: 'UI Design',
        description: 'Reduzierte, konsistente Oberflächen mit Fokus auf visuelle Klarheit, umgesetzt primär in Figma.',
        icon: '🎨',
      },
      {
        title: 'Component Libraries Aufbau',
        description: 'Zur Wiederverwendung von Komponenten innerhalb der Power Platform baue ich Component Libraries in Einhaltung der Corporate Identity.',
        icon: '🧩',
      },
      {
        title: 'Business Process Flow Design',
        description: 'Ich übersetze definierte Business-Prozesse in klare, intuitive Interfaces für Business Process Automation.',
        icon: '⚙️',
      },
      {
        title: 'Mobile App Design',
        description: 'Ich gestalte mobile Anwendungen mit Fokus auf Usability, klare Navigation und effiziente Interaktionen.',
        icon: '📱',
      },
      {
        title: 'Graphic Design',
        description: 'Von digitalen Assets bis hin zu Kampagnenvisuals: Ich erstelle konsistente Grafikprodukte, die Marken stärken.',
        icon: '🖼️',
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
