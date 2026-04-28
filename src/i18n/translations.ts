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
      'I believe technology should not leave anyone behind, regardless of age or prior knowledge.',
      'Especially now that AI and automation are reshaping so much, interfaces need to guide people instead of overwhelming them. That perspective is grounded in my experience: as a retail manager, I learned what users really communicate; as a graphic designer, I learned to think visually; and through my UX design studies and work in two international corporations, I built a strong foundation in research and design. That is the combination I bring to every project.',
    ],
  },
  skills: {
    sectionTitle: 'What I Do',
    sectionSubtitle: 'Services Overview',
    sectionIntro: '',
    items: [
      {
        title: 'UX Design',
        description: 'Information architecture, clear user flows, and understandable interaction concepts form the foundation of my work.',
        icon: '🔍',
      },
      {
        title: 'UI Design',
        description: 'Reduced, consistent interfaces with a focus on visual clarity, created primarily in Figma.',
        icon: '🎨',
      },
      {
        title: 'Component Library Development',
        description: 'For reusable components within the Power Platform, I build component libraries in line with the corporate identity.',
        icon: '🧩',
      },
      {
        title: 'Business Process Flow Design',
        description: 'I translate defined business processes into clear, intuitive interfaces for business process automation.',
        icon: '⚙️',
      },
      {
        title: 'Mobile App Design',
        description: 'I design mobile applications with a focus on usability, clear navigation, and efficient interactions.',
        icon: '📱',
      },
      {
        title: 'Graphic Design',
        description: 'From digital assets to campaign visuals, I create consistent graphic materials that strengthen brands.',
        icon: '🖼️',
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
      'Ich glaube Technologie sollte niemanden zurücklassen, egal welches Alter und egal mit welchem Vorwissen.',
      'Gerade weil KI und Automatisierung so vieles auf den Kopf stellen, braucht es eine Benutzeroberfläche, die Menschen mitnimmt statt sie zu überfordern. Dafür bringe ich einiges mit: Als Shopleitung habe ich gelernt, was Nutzer*innen wirklich kommunizieren. Als Grafikerin, visuell zu denken und während meinem Studium in UX-Design und in zwei internationalen Konzernen habe ich Research und Design von Grund auf gemacht. Das ist die Kombination, die ich in jedes Projekt mitbringe.',
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
