export interface CardProps {
  title: string;
  description: string;
  imageSrc: string;
  alt?: string;
  page: string;
  technologies: string[];
}

export interface Project {
  title: string;
  description: string;
  imageSrc: string;
  alt?: string;
  page: string;
}
export interface CareerTimeline {
  company: string;
  date: string;
  description: string;
  achievements?: string[];
  technology?: string[];
}
