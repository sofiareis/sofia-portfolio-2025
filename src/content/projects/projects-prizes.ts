import { ProjectPrizes } from "@/interfaces/projects";
import { CAREERCUE, RENEW, SHARITY } from "../string";

const imageSrc = "/images/projects";
const logoFolder = "prize-logo";

export const projectPrizes: Record<string, ProjectPrizes> = {
  [CAREERCUE]: {
    prizes: [
      {
        prize: "cmd-f Hackathon 2023 - Podium Prize: Bronze",
        description:
          "cmd-f is an in-person hackathon focused on addressing gender inequality in technology. The top three projects get Podium Prizes.",
        logo: `${imageSrc}/careercue/${logoFolder}/cmdfLogo.svg`,
      },
    ],

    label: "#C1EBD1",
  },
  [SHARITY]: {
    prizes: [
      {
        prize: "Pinnacle Prize - cmd-f Hackathon 2021 Winner",
        description: `Each winning team member received tickets to Pinnacle, which invited the world's top 50 collegiate hackathons for an epic finale event in fall 2021.`,
        logo: `${imageSrc}/sharity/${logoFolder}/pinnacle-logo.png`,
      },
      {
        prize: "Telus - Women's Health Award",
        description: `Design and develop an innovative solution that addresses the concerns and issues of women’s well-being in the 21st century.`,
        logo: `${imageSrc}/sharity/${logoFolder}/telus-logo.svg`,
      },
      {
        prize: "Hootsuite - #SocialForGood Award",
        description: `Create a project that makes a positive social impact on how we communicate in today’s connected world.`,
        logo: `${imageSrc}/sharity/${logoFolder}/hootsuite-logo.png`,
      },
    ],
    label: "#D38796",
  },
  [RENEW]: {
    prizes: [
      {
        prize: "cmd-f Hackathon 2022 - Podium Prize: Bronze",
        description:
          "cmd-f is an in-person hackathon focused on addressing gender inequality in technology. The top three projects get Podium Prizes.",
        logo: `${imageSrc}/careercue/${logoFolder}/cmdfLogo.svg`,
      },
      {
        prize: "UBC - Project Incubation Prize",
        description: `UBC's CS department selects a team they think will benefit from mentorship to continue working on their project with the guidance of industry mentors.`,
        logo: `${imageSrc}/renew/${logoFolder}/SAPLogo.png`,
      },
      {
        prize:
          "SAP - Most Coherent UX/UI Design Using the UI5 SDK and/or Web Components",
        description: `Build the web application with the most coherent UX/UI design using the UI5 SDK and/or web components.`,
        logo: `${imageSrc}/renew/${logoFolder}/ubcLogo2.png`,
      },
    ],

    //renew: true,
    label: "#8EA7CC",
  },
};
