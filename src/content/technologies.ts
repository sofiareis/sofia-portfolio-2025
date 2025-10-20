export type techSquare = {
  tech: string;
  img: string;
};

export const technologies_small: techSquare[] = [
  {
    tech: "React",
    img: "/images/tech-logo/react.png",
  },
  {
    tech: "Next.js",
    img: "/images/tech-logo/nextjs.svg",
  },
  {
    tech: "Node.js",
    img: "/images/tech-logo/nodejs.svg",
  },
  {
    tech: "Tailwind",
    img: "/images/tech-logo/tailwind.svg",
  },
  {
    tech: "Express.js",
    img: "/images/tech-logo/expressjs.svg",
  },
  {
    tech: "JavaScript",
    img: "/images/tech-logo/js-logo.svg",
  },
  {
    tech: "TypeScript",
    img: "/images/tech-logo/ts-logo.png",
  },
  {
    tech: "CSS",
    img: "/images/tech-logo/css-logo.svg",
  },
  {
    tech: "Python",
    img: "/images/tech-logo/python-logo.png",
  },
  {
    tech: "PostgresSQL",
    img: "/images/tech-logo/postgres-logo.png",
  },
  {
    tech: "MongoDB",
    img: "/images/tech-logo/mongo-logo.svg",
  },
];

export const technologies = [...technologies_small, ...technologies_small];
