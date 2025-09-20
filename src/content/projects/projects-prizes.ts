import { ProjectPrizes } from "@/interfaces/projects";
import { CAREERCUE, RENEW, SHARITY } from "../string";

const imageSrc = "/images/projects";
const logoFolder = "prize-logo";

export const projectPrizes: Record<string, ProjectPrizes> = {
  [CAREERCUE]: {
    prizes: [
      {
        prize: "3rd Place at cmd-f Hackathon 2023",
        description: "",
        logo: "",
      },
    ],

    label: "#4849B8",
  },
  [SHARITY]: {
    prizes: [
      {
        prize: "Pinnacle Prize - Top Project",
        description: `"Each winning team member will receive tickets to Pinnacle, which invites the world's top 50 collegiate hackathons for an epic finale event in fall 2021."`,
        logo: `${imageSrc}/sharity/${logoFolder}/pinnacle-logo.png`,
      },
      {
        prize: "Telus - Women's Health Award",
        description: `"Design and develop an innovative solution that addresses the concerns and issues of women’s* well-being in the 21st century."`,
        logo: `${imageSrc}/sharity/${logoFolder}/telus-logo.svg`,
      },
      {
        prize: "Hootsuite - #SocialForGood Award",
        description: `"Your project must make a positive social impact on how we communicate in today’s connected world."`,
        logo: `${imageSrc}/sharity/${logoFolder}/hootsuite-logo.png`,
      },
    ],

    label: "#D38796",
  },
  [RENEW]: {
    prizes: [
      {
        prize: "3rd Place at cmd-f Hackathon 2022",
        description: "",
        logo: "",
      },
      {
        prize: "UBC Project Incubation Prize",
        description: `"If you are interested in further developing your project idea, UBC's CS department will be selecting a team they think will benefit from mentorship to continue working on their project."`,
        logo: "",
      },
      {
        prize:
          "SAP: Most Coherent UX/UI Design Using the UI5 SDK and/or Web Components",
        description: `"Build the web application with the most coherent UX/UI design using the UI5 SDK and/or web components."`,
        logo: "",
      },
    ],

    //renew: true,
    label: "#4A6FA5",
  },
};
