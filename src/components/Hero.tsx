import { ArrowDown, Code2, Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center gradient-hero overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary mb-8 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <Sparkles size={16} />
            <span className="text-sm font-medium">{t("hero.badge")}</span>
          </div>

          {/* Main heading */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            {t("hero.name")}
          </h1>

          {/* Subtitle
          <p className="text-lg sm:text-xl md:text-2xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            {t('hero.subtitle')}
          </p> */}

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.8s" }}
          >
            <button
              onClick={scrollToProjects}
              className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-accent transition-all duration-300 hover:shadow-lg hover:glow-primary"
            >
              <Code2 size={20} />
              {t("hero.cta")}
            </button>
            <a
              href="#about"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary-foreground/10 text-primary-foreground border border-primary-foreground/20 rounded-lg font-medium hover:bg-primary-foreground/20 transition-all duration-300"
            >
              {t("hero.about")}
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in"
          style={{ animationDelay: "1.2s" }}
        >
          <button
            onClick={scrollToProjects}
            className="flex flex-col items-center gap-2 text-primary-foreground/60 hover:text-primary-foreground transition-colors"
            aria-label="Scroll to projects"
          >
            <span className="text-sm">{t("hero.scroll")}</span>
            <ArrowDown size={20} className="animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
