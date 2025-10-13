export type ProjectInspiration = {
  inspo: string;
  img: string;
  backgroundcolor: string;
  textcolor: string;
  githubLink?: string;
  devpostLink?: string;
};

type descriptionImage = {
  description: string;
  img: string[];
};

export type ProjectDescription = {
  descriptionArray: descriptionImage[];
  backgroundcolor: string;
};

export type ProjecTechnology = {
  frontend: string[];
  backend: string[];
  tools: string[];
  languages: string[];
  backgroundcolor: string;
  textcolor: string;
  badge: string;
  badgeTextColor: string;
};

export type ProjectPrizes = {
  prizes: {
    prize: string;
    description: string;
    logo: string;
  }[];
  label: string;
};

export type Project = {
  inspiration: ProjectInspiration;
  description: ProjectDescription;
  technology: ProjecTechnology;
  prizes?: ProjectPrizes;
};
