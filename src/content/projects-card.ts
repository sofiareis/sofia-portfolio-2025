import { CardProps } from "@/interfaces/interfaces";

export const projects: CardProps[] = [
  {
    title: "Cards Tracker",
    description: "A web app for managing your One Piece Card Game collection",
    //imageSrc: "/images/projects/onepiece_card.png",
    imageSrc: "/images/projects/CardTracker-mock.png",
    page: "onepiece",
    technologies: ["JavaScript", "React", "Node.js", "MongoDB", "Express.js"],
    backgroundcolor: "#AFA384",
  },
  {
    title: "Sharity",
    description:
      "(cmd-f Hackathon 2021) A mobile app that connects users to women's shelters",
    imageSrc: "/images/projects/Sharity-mock.png",
    page: "sharity",
    technologies: ["JavaScript", "React Native", "Node.js"],
    backgroundcolor: "#739AAB",
  },

  {
    title: "CareerCue",
    description:
      "(cmd-f Hackathon 2023) A web app that helps you practice for interviews by giving you customized feedback",
    //imageSrc: "/images/projects/careercue_card.png",
    imageSrc: "/images/projects/CareerCue-mock.png",
    page: "careercue",
    technologies: ["JavaScript", "React", "Flask"],
    backgroundcolor: "#FBDFFD",
  },

  {
    title: "Renew",
    description:
      "(cmd-f Hackathon 2022) A mobile app designed to provide support and resources for immigrants in a new country",
    imageSrc: "/images/projects/Renew-mock.png",
    page: "renew",
    technologies: ["TypeScript", "React Native", "Node.js"],
    backgroundcolor: "#839788",
  },
  {
    title: "PatientViz",
    description:
      "A desktop app to help physicians of the BC Children’s Hospital with the triage process of patients",
    imageSrc: "/images/projects/PatientViz-mock.png",
    page: "patientviz",
    technologies: ["JavaScript", "React", "Electron"],
    backgroundcolor: "#A96385",
  },
  {
    title: "Moko",
    description:
      "(Pinnacle Hackathon 2021) A mobile app that allows users to buy and sell fresh produce within their local communities",
    imageSrc: "/images/projects/Moko-mock.png",
    page: "moko",
    technologies: ["JavaScript", "React Native", "Node.js"],
    backgroundcolor: "#87B676",
  },

  {
    title: "ChessMate",
    description:
      "A chess engine that features a hardware-accelerated chess algorithm and an Android app",
    imageSrc: "/images/projects/Chessie-mock.png",
    page: "chessmate",
    technologies: ["Java", "Android Studio", "Node.js", "MySQL"],
    backgroundcolor: "#FFECFB",
  },

  {
    title: "Alacrity",
    description:
      "A web app to help students manage their time and accomplish tasks",
    imageSrc: "/images/projects/Alacrity-mock.png",
    page: "alacrity",
    technologies: ["JavaScript", "React", "Flask", "MySQL"],
    backgroundcolor: "#1EAFF8",
  },
  /*
    {
      title: 'Dancing Robot',
      description: 'A robot that moves like it is dancing...',
      imageSrc: dancingrobot,
      page: 'dancingrobot',
  
    },

    {
      title: 'Robot Dog',
      description: 'A robot that has dog life features (tail, voice control, movement)...',
      imageSrc: robotdog,
      page: 'robotdog',
  
    },

    {
      title: 'BobaBudy',
      description: 'An app to determine which is your favourite Bubble Tea flavor',
      imageSrc: boba,
      page: 'bobabuddy',
  
    },
    */
];

export const projectsSummary = projects.slice(0, 4);
