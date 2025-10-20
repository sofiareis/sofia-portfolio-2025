export interface Education {
  heading: string;
  wheredate: string;
  description: string;
}

export interface Skills {
  heading: string;
  skills: string[];
}

type workDescription = {
  main: string;
  bullets: string[];
};

export interface Work {
  heading: string;
  wheredate: string;
  description: (string | workDescription)[];
  skills: string[];
}

export const education: Education[] = [
  {
    heading: "University of British Columbia",
    wheredate: "April 2023",
    description:
      "Bachelor of Applied Science, Computer Engineering - Graduated with Distinction",
  },
];

export const skillSet: Skills[] = [
  {
    heading: "Programming Languages",
    skills: [
      "JavaScript",
      "TypeScript",
      "CSS",
      "HTML",
      "Python",
      "Java",
      "C",
      "C++",
    ],
  },
  {
    heading: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "NestJS",
      "Flask",
      "SQL",
      "PostgreSQL",
      "MongoDB",
      "GraphQL",
      "Prisma",
      "Firebase",
    ],
  },
  {
    heading: "Frontend",
    skills: [
      "React",
      "Next.js",
      "React Native",
      "Flutter",
      "Tailwind CSS",
      "SCSS",
      "Redux",
      "Material UI",
      "DaisyUI",
    ],
  },
  {
    heading: "Tools",
    skills: [
      "Git",
      "Figma",
      "Jira",
      "Jest",
      "Cypress",
      "Squish",
      "Airtable",
      "Baserow",
    ],
  },
];

export const work: Work[] = [
  {
    heading: "Software Developer",
    wheredate: "Svante | January 2024 – Current",
    description: [
      "Sole developer responsible for end-to-end software development: gathering requirements, UX/UI design, architecture, full-stack implementation, testing, deployment, and continuous improvements",
      {
        main: "Designed and built a full-stack simulation platform (React, Next.js, Tailwind CSS, Node.js, Express.js, PostgreSQL), integrating the company’s MATLAB models to support carbon capture research with an intuitive web interface",
        bullets: [
          "Implemented MATLAB executables managed by Node.js child processes, reducing costs by eliminating the need for multiple MATLAB licenses",
          "Implemented real-time graph visualization with Socket.IO, reducing simulation validation time by hours per day by allowing users to stop unproductive runs early",
          "Streamlined setup workflows by introducing pre-filled defaults, material databases, and unit conversion tools, reducing simulation setup time by 60% compared to manual MATLAB scripting, according to user feedback",
          "Designed a PostgreSQL backend for storing results, allowing users to replot, compare, and export simulations without handling .mat files ",
          "Built a parallel job manager, allowing users to run multiple simulations simultaneously, with live comparative visualization, significantly reducing total experimentation time",
          "Integrated Microsoft Authentication Library (MSAL) for secure employee authentication with existing accounts",
          "Established APIs with Baserow, optimizing workflows across the organization",
          "Developed collaboration features such as built-in result sharing and a visualization tool for external .mat files, saving researchers hours in data preparation and presentation tasks",
        ],
      },
    ],
    skills: [
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
      "Socket.IO",
    ],
  },
  {
    heading: "Software Developer (Web and Mobile) – Co-op",
    wheredate: "Ensemble Systems | January 2022 – August 2022",
    description: [
      "Developed a full-stack internal platform that over 200 employees currently use by utilizing React (TypeScript and SCSS), Node.js, GraphQL, Prisma, and NestJS",
      "Implemented and automated the email service using NestJS reducing the time used in internal communication",
      "Leveraged the NestJS cache manager module to store user details which increased page response time by 20%",
      "Created a media player app using Flutter and learned how to enable full cross-platform support by writing native Android (Kotlin) and iOS (Swift) code",
      "Built, using React (TypeScript and Tailwind), the frontend of the new company website which is currently used",
      "Wrote unit, integration, and e2e tests using Jest and Cypress achieving >90% of code coverage",
    ],
    skills: [
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
    heading: "R&D Verification Engineer – Co-op",
    wheredate: "Ansys | May 2021 – December 2021",
    description: [
      "Developed and maintained reliable automated tests in Python for Ansys Lumerical simulation software which were successfully used before every product release",
      "Performed regression testing on Squish testing tool and manual software testing on release candidate software builds",
      "Exercised cross-functional collaboration by working with other engineering teams to reproduce and troubleshoot customer issues",
      "Identified bugs using a defect tracking system, accurately verified fixes and reported issues with JIRA",
    ],
    skills: [
      "Python",
      "Squish",
      "Test Automation",
      "Debugging",
      "Ansys Products",
    ],
  },

  {
    heading: "Learning Rover Team Lead – Co-op",
    wheredate:
      "UBC Integrated Renewal Program (IRP) | June 2020 – December 2020",
    description: [
      "Updated the UBC employee database through Airtable management by creating reliable Python API scripts and updating them weekly to match the given data",
      "Created Excel graphs based on Airtable information to clearly present data to key stakeholders",
      "Led a team of 4 Co-op students to assist UBC staff in using Workday, by assigning tasks, providing feedback, and resolving issues appropriately",
    ],
    skills: ["Python", "Airtable", "Teamwork", "Leadership"],
  },
];

export const projects = [
  {
    description: "Please check my projects section on ",
    link: "sofiareis.dev/projects",
  },
];

/*
export const projects = [
    {
        heading: 'PatientViz' ,
        wheredate: 'Capstone Project',
        description: ['Implemented an Electron desktop application to help physicians of BC Children’s Hospital with the triage process of patients, aiding the decrease of waiting lists',
                    'Built, using React, a data visualization tool and a medications and symptoms filter to allow physicians to observe correlations within the patients, improving the efficiency and accuracy of the triage',
                    ],
        skill: ['JavaScript', 'React', 'GraphQL'],
    },

    {
        heading: 'Sharity' ,
        wheredate: 'cmd-f Hackathon [1st place winner and invited to Pinnacle, the Olympics of Hackathons]',
        description: ['Implemented a React Native (JavaScript) mobile app that connects users to women’s shelters, encouraging them to donate items, fundraise for necessities, and practice sustainability',
                    'Developed, using Google Maps API, a search feature that allows users to locate nearby shelters',
                    'Built a Tinder-like swipe UI that allows organizations to accept or decline donation items, saving time and preventing charities from receiving needless products'
                    ],
        skill: ['JavaScript', 'React', 'GraphQL'],
    },

    {
        heading: 'Moko' ,
        wheredate: 'Pinnacle - the Olympics of Hackathons',
        description: ['Designed a React Native (JavaScript) mobile app that allows users to buy and sell fresh produce within their local communities, helping minimize pollution from food transportation',
                    'Used Node.js and MySQL for the backend, and Google Geocoding API to locate and connect users',
                    ],
        skill: ['JavaScript', 'React', 'GraphQL'],
    },
];
*/

export const resume = [
  {
    title: "Education",
    data: education,
  },

  {
    title: "Work Experience",
    data: work,
  },

  {
    title: "Projects",
    data: projects,
  },
];
