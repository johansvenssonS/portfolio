export interface Project {
  name: string;
  image: string;
  description: string;
  link?: string;
  github?: string;
  detailedDescription: string;
  technologies: string[];
  features: string[];
  challenges: string;
  learnings: string;
}

// URL-friendly slug from project name
export const getProjectSlug = (name: string): string => {
  return name
    .toLowerCase()
    .replace(/å/g, 'a')
    .replace(/ä/g, 'a')
    .replace(/ö/g, 'o')
    .replace(/\s+/g, '-');
};
