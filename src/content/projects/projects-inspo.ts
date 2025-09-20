import { ProjectInspiration } from "@/interfaces/projects";
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

export const projectInspiration: Record<string, ProjectInspiration> = {
  [CAREERCUE]: {
    inspo:
      "The inspiration behind CareerCue came from recognizing the challenges and anxiety many people face when preparing for job interviews. The interview process can be stressful, and many people don't have the resources to know how to best prepare for the questions that may be asked.\nCareerCue is made for anyone who is looking to improve their interview skills. This includes beginners entering the workforce for the first time, underprivileged demographics who have limited access to career resources, moms looking to return to their careers after a long break, and people affected by the pandemic who are trying to improve their communication skills.",
    img: "/images/projects/careercue/inspo.png",
    backgroundcolor: "#FBDFFD",
    textcolor: "black",
    githubLink: "https://github.com/sofiareis/cmdf2023",
    devpostLink: "https://devpost.com/software/careercue",
  },
  [ALACRITY]: {
    inspo:
      "Alacrity is a web app meant to help students manage their time. It provides an interface for students to enter their due dates, plan work sessions and rearrange those work sessions to spread the work out more evenly.",
    img: "/images/projects/alacrity/home.png",
    backgroundcolor: "#79F87C", //????
    textcolor: "black",
    githubLink: "https://github.com/sofiareis/Alacrity",
  },
  [CHESSMATE]: {
    inspo:
      "ChessMate is a one player chess engine where the user plays against an AI opponent. Not only can the player play a game of chess, they can save their games to replay for analysis and pause games in the middle of playing. The majority of the processing is done on the ARM chip on the DE1-SoC with rendering and move input being done on an Android phone.\nThe DE1 and the phone are supposed to communicate over Bluetooth. This project aims to attract tech savvy people who are interested in learning how to play chess or improve their existing skill. Our design takes into consideration that not everyone has a pre-existing knowledge of chess, therefore it will perform move validation and automatically prevent illegal moves from being played.",
    img: "/images/projects/chessmate/pawn.png",
    backgroundcolor: "#97B6A7",
    textcolor: "black",
    //chess: true,
    githubLink: "https://github.com/sofiareis/ChessMate",
  },
  [MOKO]: {
    inspo:
      "Inspired by local farmers markets, moko is an app that aims to promote sustainable development by minimizing CO2 emissions from food transportation and encouraging eating local and fresh produce. Moko also strives to encourage discovery and support for local businesses and foster community bonding.",
    img: "/images/projects/moko/ecology.svg",
    backgroundcolor: "#87B676",
    textcolor: "black",
    //box: true,
    githubLink: "https://github.com/sofiareis/moko",
    devpostLink: "https://devpost.com/software/moko-0lnre2",
  },
  [PATIENVIZ]: {
    inspo:
      "Triage is a crucial tool in managing long waitlists as the triage process enables more equitable care and allows patients with the greatest and most urgent needs to be seen first (Moskop & Iserson, 2004). However, the triage process can be complicated, as referrals received by specialist physicians often differ in detail and length.\nThe goal of PatientViz is to help physicians with the triage process and minimize long waiting lists.",
    img: "/images/projects/patientviz/health2.png",
    backgroundcolor: "#A96385",
    textcolor: "black",
    //box: true,
  },
  [RENEW]: {
    inspo:
      " In light of the war in Ukraine today, millions of Ukranians have fled into neighboring countries into a frightening and uncertain future. Renew is meant to help refugees in similar situations as they navigate life in a new, unfamiliar country.",
    img: "/images/projects/careercue/inspo.png",
    backgroundcolor: "#386641",
    textcolor: "black",
    //renew: true,
    githubLink: "https://github.com/sofiareis/renew",
    devpostLink: "https://devpost.com/software/renew",
  },
  [SHARITY]: {
    inspo:
      "Inspired by the words: she, share, and charity, Sharity was created: a female empowerment donation app. Sharity promotes women empowerment in the community and sustainability by encouraging users to donate their used or new items to local female’s shelters.",
    img: "/images/projects/sharity/inspo.png",
    backgroundcolor: "#739AAB",
    textcolor: "white",
    githubLink: "https://github.com/sofiareis/Sharity",
    devpostLink: "https://devpost.com/software/sharity-8dkvza",
  },
  [ONEPIECE]: {
    inspo:
      "As an avid collector of the One Piece Card Game, I searched for a tool to manage my collection. However, existing card trackers either lacked certain features I wanted or didn’t have a One Piece Card database. So, my project was born out of the desire to create a product I wished had already existed.\nOne of the key inspirations behind this project was the absence of a dedicated missing card feature in other trackers. I wanted a tool that not only helped me catalog my existing collection but also showed me exactly which cards I didn't have.",
    img: "/images/projects/onepiece/search.png",
    backgroundcolor: "#EDDFBC",
    textcolor: "black",
    githubLink: "https://github.com/sofiareis/One_Piece_Card",
  },
};
