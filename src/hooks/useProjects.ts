import { useState, useEffect } from 'react';
import type { Project } from '@/types/project';
import { projects as projectsData } from '@/data/projects';

export const useProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulating async fetch to preserve original logic pattern
    const getProjects = async () => {
      try {
        // Small delay to simulate network request (preserving async pattern)
        await new Promise(resolve => setTimeout(resolve, 100));
        setProjects(projectsData);
      } catch (err) {
        setError('Failed to load projects');
      } finally {
        setLoading(false);
      }
    };

    getProjects();
  }, []);

  return { projects, loading, error };
};
