import { useState, useEffect } from 'react';
import type { Project } from '@/types/project';

export const useProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getProjects = async () => {
      try {
        // Preserving the original async fetch logic from project.js
        const response = await fetch('/src/data/projects.json');
        const result = await response.json();
        setProjects(result);
      } catch (err) {
        // Fallback to import if fetch fails (for Vite compatibility)
        try {
          const data = await import('@/data/projects.json');
          setProjects(data.default);
        } catch {
          setError('Failed to load projects');
        }
      } finally {
        setLoading(false);
      }
    };

    getProjects();
  }, []);

  return { projects, loading, error };
};
