import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Project } from '@/types/project';
import { getProjectSlug } from '@/types/project';
import { useLanguage } from '@/contexts/LanguageContext';
import { projectsSV } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const { t } = useLanguage();
  
  // Use Swedish project name for consistent slug routing
  const svProject = projectsSV[index];
  const projectSlug = svProject ? getProjectSlug(svProject.name) : getProjectSlug(project.name);

  return (
    <article
      className="group gradient-card rounded-xl border border-border shadow-card hover:shadow-card-hover hover:-translate-y-2 transition-all duration-300 overflow-hidden opacity-0 animate-fade-in-up"
      style={{ animationDelay: `${0.1 * index}s` }}
    >
      {/* Project Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Project Info */}
      <div className="p-6 flex flex-col gap-4">
        <h3 className="text-xl font-semibold text-card-foreground group-hover:text-primary transition-colors">
          {project.name}
        </h3>
        
        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Tech preview badges */}
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 3).map((tech, idx) => (
            <span 
              key={idx}
              className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        {/* Navigate to detail page */}
        <Link
          to={`/project/${projectSlug}`}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-accent transition-all duration-300 hover:glow-primary mt-auto"
        >
          <span>{t('projects.viewProject')}</span>
          <ArrowRight size={16} />
        </Link>
      </div>
    </article>
  );
};

export default ProjectCard;
