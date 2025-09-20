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
  type: "1" | "2" | "3" | "4";
  imageType?: "phone";
  background?: string;
};

export type ProjecTechnology = {
  frontend: string[];
  backend: string[];
  img: string;
  backgroundcolor: string;
  textcolor: string;
  label: string;
  textlabel: string;
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
