import { JSX } from "react";

export interface CardProps {
  title: string;
  description: string;
  imageSrc: string;
  alt?: string;
  page: string;
  technologies: string[];
  backgroundcolor: string;
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
  description: JSX.Element;
  achievements?: string[];
  technology?: string[];
}
