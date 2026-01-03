import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, CheckCircle, Lightbulb, AlertTriangle, BookOpen } from 'lucide-react';
import { projectsSV, projectsEN } from '@/data/projects';
import { getProjectSlug } from '@/types/project';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ProjectPage = () => {
  const { projectSlug } = useParams<{ projectSlug: string }>();
  const { language, t } = useLanguage();
  
  const projects = language === 'en' ? projectsEN : projectsSV;
  const project = projects.find(p => getProjectSlug(p.name) === projectSlug);

  // Also check in both languages for slug matching
  const projectSV = projectsSV.find(p => getProjectSlug(p.name) === projectSlug);
  const projectEN = projectsEN.find(p => getProjectSlug(p.name) === projectSlug);
  
  // Use the current language version if available, otherwise fall back
  const displayProject = project || (language === 'en' ? projectEN : projectSV) || projectSV || projectEN;

  if (!displayProject) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center pt-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">{t('projects.notFound')}</h1>
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors"
            >
              <ArrowLeft size={20} />
              <span>{t('projects.backToPortfolio')}</span>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-16 md:pt-20">
        {/* Hero Section with Project Image */}
        <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
          <img
            src={displayProject.image}
            alt={displayProject.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          
          {/* Back Button */}
          <Link 
            to="/#projects"
            className="absolute top-6 left-6 inline-flex items-center gap-2 px-4 py-2 bg-background/80 backdrop-blur-sm rounded-lg text-foreground hover:bg-background transition-colors"
          >
            <ArrowLeft size={20} />
            <span>{t('projects.back')}</span>
          </Link>

          {/* Project Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <div className="container mx-auto max-w-5xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
                {displayProject.name}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                {displayProject.description}
              </p>
            </div>
          </div>
        </section>

        {/* Project Content */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto max-w-5xl px-6">
            
            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href={displayProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-accent transition-all duration-300 hover:glow-primary"
              >
                <ExternalLink size={20} />
                <span>{t('projects.liveDemo')}</span>
              </a>
              <a
                href={displayProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-muted transition-all duration-300"
              >
                <Github size={20} />
                <span>{t('projects.github')}</span>
              </a>
            </div>

            {/* Technologies */}
            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary text-sm">💻</span>
                </span>
                {t('projects.technologies')}
              </h2>
              <div className="flex flex-wrap gap-2">
                {displayProject.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Detailed Description */}
            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <BookOpen size={16} className="text-primary" />
                </span>
                {t('projects.aboutProject')}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {displayProject.detailedDescription}
              </p>
            </div>

            {/* Features */}
            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <CheckCircle size={16} className="text-primary" />
                </span>
                {t('projects.features')}
              </h2>
              <ul className="grid md:grid-cols-2 gap-3">
                {displayProject.features.map((feature, index) => (
                  <li 
                    key={index}
                    className="flex items-start gap-3 p-4 bg-card rounded-lg border border-border"
                  >
                    <CheckCircle size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-card-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Challenges & Learnings Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Challenges */}
              <div className="p-6 bg-card rounded-xl border border-border">
                <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center">
                    <AlertTriangle size={16} className="text-orange-500" />
                  </span>
                  {t('projects.challenges')}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {displayProject.challenges}
                </p>
              </div>

              {/* Learnings */}
              <div className="p-6 bg-card rounded-xl border border-border">
                <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <Lightbulb size={16} className="text-blue-500" />
                  </span>
                  {t('projects.learnings')}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {displayProject.learnings}
                </p>
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectPage;
