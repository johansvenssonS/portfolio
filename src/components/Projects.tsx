import { useProjects } from '@/hooks/useProjects';
import ProjectCard from './ProjectCard';
import { Loader2 } from 'lucide-react';

const Projects = () => {
  // Using the hook that preserves the original async fetch logic
  const { projects, loading, error } = useProjects();

  return (
    <section id="projects" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Mina Projekt
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Här är några av de projekt jag har arbetat med. Klicka på ett projekt för att se det live.
          </p>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 text-primary animate-spin" />
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="text-center py-20">
            <p className="text-destructive">{error}</p>
          </div>
        )}

        {/* Projects Grid - Responsive: 1 col mobile, 2 col tablet, 3 col desktop */}
        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Mapping over projects array - preserving original logic */}
            {projects.map((project, index) => (
              <ProjectCard key={project.name} project={project} index={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
