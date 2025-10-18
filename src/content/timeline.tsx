import { CareerTimeline } from "@/interfaces/interfaces";
import { technologies } from "./technologies";

export const timeline: CareerTimeline[] = [
  {
    company: "Svante Inc.",
    date: "January 2024 - Current",
    description: (
      <>
        <p>
          At Svante, I work as the sole developer on full-stack projects,
          gaining experience across the entire software lifecycle. One of my
          main projects is a simulation platform that supports cutting-edge
          carbon capture research.
        </p>
        <br />
        <p>
          I built a responsive web interface using React, which I later
          modernized with Next.js, TypeScript, and Tailwind. On the backend, I
          designed a PostgreSQL database to store simulation inputs and results,
          implemented a job manager to run multiple MATLAB simulations
          simultaneously, and used Node.js child processes to spawn MATLAB
          executables.
        </p>
        <br />
        <p>
          This strengthened my backend skills and improved my problem-solving
          and system design thinking. Moreover, having to implement secure
          authentication with MSAL and use Baserow APIs to access company data,
          I expanded my end-to-end development skills. Through these
          experiences, I was able to learn how to scale and modernize technology
          stacks, optimize projects, and, most importantly, deliver tools that
          put the users first.
        </p>
      </>
    ),
    achievements: [],
    technology: [
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "CSS",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Baserow",
    ],
  },
  {
    company: "Ensemble Systems - Co-op",
    date: "January 2022 – August 2022",
    description: (
      <p>
        I had the opportunity to improve my skills during my internship at
        Ensemble Systems, where I worked with mobile and web development. On the
        frontend, I developed my skills using technologies like React,
        JavaScript, TypeScript, and Tailwind CSS and gained valuable insights
        into developing user-friendly software solutions. On the backend, I
        leveraged technologies such as Node.js, GraphQL, NestJS, and Prisma to
        build a full-stack internal platform that now serves over 200 employees.
        Moreover, by working with Flutter, I enhanced my mobile development
        abilities and worked with cross-platform support by writing native
        Android (Kotlin) and iOS (Swift) code.
      </p>
    ),
    achievements: ["wooow", "wiii", "wiii", "aaaaaaa"],
    technology: [
      "JavaScript",
      "React",
      "TypeScript",
      "CSS",
      "GraphQL",
      "Node.js",
      "Redux",
      "Flutter",
      "SCSS",
      "Prisma",
      "NestJS",
      "Tailwind CSS",
    ],
  },
  {
    company: "Ansys - Co-op",
    date: "May 2021 – December 2021",
    description: (
      <p>
        My role as an R&D verification engineer at Ansys provided me with
        software testing skills and I further increased my programming
        abilities, particularly in Python. My primary responsibility was
        developing and maintaining automated tests in Python to ensure the
        reliability and quality of their Lumerical simulation software. In
        addition to automation, I delved into regression testing using the
        Squish testing tool and performed manual testing on release candidate
        software builds. I was able to improve my teamwork skills as I
        frequently engaged with cross-functional engineering teams to replicate
        and troubleshoot customer issues.
      </p>
    ),
    technology: [
      "Python",
      "Squish",
      "Test Automation",
      "Quality Assurance",
      "Ansys Products",
    ],
  },
  {
    company: "UBC Integrated Renewal Program (IRP) - Co-op",
    date: "June 2020 – December 2020",
    description: (
      <p>
        During my internship at UBC Integrated Renewal Program, I acquired data
        management and Python skills by creating Python scripts for Airtable,
        updating the UBC employee database. Using this data, I crafted Excel
        graphs to effectively communicate key information to stakeholders.
        Additionally, I led a team of 4 Co-op students to assist UBC staff in
        using Workday, overseeing task assignments, offering constructive
        feedback, and addressing issues, which increased my leadership skills.
      </p>
    ),
    technology: ["Python", "Airtable"],
  },
];
