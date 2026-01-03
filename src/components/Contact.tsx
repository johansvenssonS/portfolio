import { Mail, Linkedin, Github } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();

  const contactLinks = [
    {
      icon: Mail,
      labelKey: "contact.email",
      value: "johan.svensson0608@gmail.com",
      href: "mailto:johan.svensson0608@gmail.com",
      external: false,
    },
    {
      icon: Linkedin,
      labelKey: "LinkedIn",
      value: "Johan Svensson",
      href: "https://www.linkedin.com/in/johan-svensson-b378b8380/",
      external: true,
    },
    {
      icon: Github,
      labelKey: "GitHub",
      value: "johansvenssonS",
      href: "https://github.com/johansvenssonS",
      external: true,
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              {t("contact.title")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("contact.subtitle")}
            </p>
          </div>

          {/* Contact Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {contactLinks.map((contact, index) => (
              <a
                key={contact.labelKey}
                href={contact.href}
                target={contact.external ? "_blank" : undefined}
                rel={contact.external ? "noopener noreferrer" : undefined}
                className="group p-6 bg-card rounded-xl border border-border shadow-card hover:shadow-card-hover hover:border-primary/30 transition-all duration-300 text-center opacity-0 animate-fade-in"
                style={{
                  animationDelay: `${0.1 * index}s`,
                  animationFillMode: "forwards",
                }}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 text-primary rounded-xl mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <contact.icon size={28} />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground mb-1">
                  {contact.labelKey.startsWith("contact.")
                    ? t(contact.labelKey)
                    : contact.labelKey}
                </h3>
                <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                  {contact.value}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
