import { ExternalLink } from 'lucide-react';
import type { Project } from '@/types/project';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  // Preserving the original click handler logic from project.js
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const url = project.link; // Using data-link equivalent
    window.open(url);
  };

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

        {/* Project Link - preserving data-link pattern as href */}
        <a
          href="#"
          data-link={project.link}
          onClick={handleClick}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-accent transition-all duration-300 hover:glow-primary mt-auto"
        >
          <span>Gå till projekt</span>
          <ExternalLink size={16} />
        </a>
      </div>
    </article>
  );
};

export default ProjectCard;
