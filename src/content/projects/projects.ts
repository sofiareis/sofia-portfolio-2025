import {
  ALACRITY,
  CAREERCUE,
  CHESSMATE,
  MOKO,
  ONEPIECE,
  PATIENVIZ,
  RENEW,
  SHARITY,
} from "../string";
import { projectInspiration } from "./projects-inspo";
import { projectPrizes } from "./projects-prizes";
import { projectTechnologies } from "./projects-tech";
import { projectDescription } from "./project-desc";

const projectIds = [
  ALACRITY,
  CAREERCUE,
  CHESSMATE,
  MOKO,
  ONEPIECE,
  PATIENVIZ,
  RENEW,
  SHARITY,
];

export const projectsMap = Object.fromEntries(
  projectIds.map((id) => [
    id,
    {
      inspiration: projectInspiration[id],
      description: projectDescription[id],
      technology: projectTechnologies[id],
      prizes: projectPrizes[id] || undefined,
    },
  ])
);
