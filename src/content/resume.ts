export interface Education {
  heading: string;
  wheredate: string;
  description: string;
}

export interface Skills {
  heading: string;
  skills: string[];
}

export interface Work {
  heading: string;
  wheredate: string;
  description: string[];
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
    skills: ["JavaScript", "TypeScript", "CSS", "HTML", "Python, Java, C, C++"],
  },

  {
    heading: "Backend",
    skills: [
      "Node.js",
      "Flask",
      "SQL",
      "GraphQL",
      "Prisma",
      "Firebase",
      "MongoDB",
      "Express.js",
      "NestJS",
    ],
  },

  {
    heading: "Frontend",
    skills: [
      "React",
      "React Native",
      "Flutter",
      "Material UI",
      "Tailwind CSS",
      "SCSS",
      "Redux",
    ],
  },

  {
    heading: "Tools",
    skills: ["Git", "Figma", "Jira", "Jest", "Cypress", "Squish", "Airtable"],
  },
];

export const work: Work[] = [
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
      "ReactJS",
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
