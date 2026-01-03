import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";

export type Language = "sv" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  sv: {
    "nav.home": "Hem",
    "nav.about": "Om",
    "nav.projects": "Projekt",
    "nav.contact": "Kontakt",
    "hero.badge": "Fullstackutvecklare Webb",
    "hero.name": "Johan Svensson",
    "hero.subtitle":
      "Skapar moderna och användarvänliga webbapplikationer med passion för ren kod och design.",
    "hero.cta": "Se mina projekt",
    "hero.about": "Om mig",
    "hero.scroll": "Scrolla ner",
    "about.title": "Om Mig",
    "about.subtitle":
      "Passionerad webbutvecklare med fokus på att skapa moderna och effektiva lösningar.",
    "about.webdev": "Webbutveckling",
    "about.webdev.desc":
      "React, TypeScript, Python, och moderna webbteknologier.",
    "about.design": "Design",
    "about.design.desc":
      "Skapar användarvänliga och estetiskt tilltalande gränssnitt.",
    "about.api": "API Integration",
    "about.api.desc":
      "Erfarenhet av att arbeta med externa API:er och datahämtning.",
    "projects.title": "Mina Projekt",
    "projects.subtitle":
      "Här är några av de projekt jag har arbetat med. Klicka på ett projekt för att läsa mer.",
    "projects.viewProject": "Läs mer",
    "projects.liveDemo": "Live Demo",
    "projects.github": "GitHub Repo",
    "projects.back": "Tillbaka",
    "projects.technologies": "Teknologier",
    "projects.aboutProject": "Om projektet",
    "projects.features": "Nyckelfunktioner",
    "projects.challenges": "Utmaningar",
    "projects.learnings": "Vad jag lärde mig",
    "projects.notFound": "Projektet hittades inte",
    "projects.backToPortfolio": "Tillbaka till portfolio",
    "contact.title": "Kontakt",
    "contact.subtitle":
      "Vill du komma i kontakt? Skicka ett mail eller hitta mig på sociala medier.",
    "contact.email": "E-post",
    "footer.copyright": "Johan Svensson Portfolio",
  },
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "hero.badge": "Web Developer & Designer",
    "hero.name": "Johan Svensson",
    "hero.subtitle":
      "Creating modern and user-friendly web applications with a passion for clean code and design.",
    "hero.cta": "See my projects",
    "hero.about": "About me",
    "hero.scroll": "Scroll down",
    "about.title": "About Me",
    "about.subtitle":
      "Passionate web developer focused on creating modern and efficient solutions.",
    "about.webdev": "Web Development",
    "about.webdev.desc":
      "React, TypeScript, Python, and modern web technologies.",
    "about.design": "Design",
    "about.design.desc":
      "Creating user-friendly and aesthetically pleasing interfaces.",
    "about.api": "API Integration",
    "about.api.desc":
      "Experience working with external APIs and data fetching.",
    "projects.title": "My Projects",
    "projects.subtitle":
      "Here are some of the projects I have worked on. Click on a project to read more.",
    "projects.viewProject": "Read more",
    "projects.liveDemo": "Live Demo",
    "projects.github": "GitHub Repo",
    "projects.back": "Back",
    "projects.technologies": "Technologies",
    "projects.aboutProject": "About the project",
    "projects.features": "Key Features",
    "projects.challenges": "Challenges",
    "projects.learnings": "What I learned",
    "projects.notFound": "Project not found",
    "projects.backToPortfolio": "Back to portfolio",
    "contact.title": "Contact",
    "contact.subtitle":
      "Want to get in touch? Send an email or find me on social media.",
    "contact.email": "Email",
    "footer.copyright": "Johan Svensson Portfolio",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem("language");
    return (saved as Language) || "sv";
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.sv] || key;
  };

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
