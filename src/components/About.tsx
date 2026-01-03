import { Code, Palette, Zap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  const skills = [
    {
      icon: Code,
      titleKey: 'about.webdev',
      descKey: 'about.webdev.desc',
    },
    {
      icon: Palette,
      titleKey: 'about.design',
      descKey: 'about.design.desc',
    },
    {
      icon: Zap,
      titleKey: 'about.api',
      descKey: 'about.api.desc',
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              {t('about.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('about.subtitle')}
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {skills.map((skill, index) => (
              <div
                key={skill.titleKey}
                className="p-6 bg-card rounded-xl border border-border shadow-card hover:shadow-card-hover transition-all duration-300 text-center opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 text-primary rounded-xl mb-4">
                  <skill.icon size={28} />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground mb-2">
                  {t(skill.titleKey)}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t(skill.descKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
