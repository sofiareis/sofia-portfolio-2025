import { ProjectDescription } from "@/interfaces/projects";

const imageSrc = "/images/projects";
const logoFolder = "prize-logo";

export const projectDescription: Record<string, ProjectDescription> = {
  moko: {
    descriptionArray: [
      {
        description:
          "Through Moko, users can buy and sell fresh produce within their local communities.\nThe app’s home shows local vendors who are near the user, allowing them to add items to their cart.",
        img: [`${imageSrc}/moko/desc3.png`, `${imageSrc}/moko/desc4.png`],
      },
      {
        description:
          "Moko also features a sell function where users can create their own store and sell their produce to other users.\nUsers can track their carbon footprint by using the footprint function and check how they are minimizing CO2 emissions by buying and selling locally",
        img: [
          `${imageSrc}/moko/description1.png`,
          `${imageSrc}/moko/description2.png`,
        ],
      },
    ],
    type: "1",
  },
  sharity: {
    descriptionArray: [
      {
        description:
          "On the user side:\n- Sharity allows users to connect to women shelters and donate clothing articles and period products\n- Users can take pictures of their items, upload them to the app, and donate to selected organizations\n- Users can search local shelters on the built in maps function and they can also view each shelter’s donation wishlist\n- Users also have access to the Period Positivity fundraiser, in which funds go towards purchasing period products for local Vancouver organizations. On the charities side:\n- Organizations can swipe left and right on donation items they wish accept or decline\n- They may chat with users about donation pickup/drop-off information\n- Organizations can also edit their account and donation wishlist",
        img: [
          `${imageSrc}/sharity/description/user1.png`,
          `${imageSrc}/sharity/description/user2.png`,
          `${imageSrc}/sharity/description/user3.png`,
          `${imageSrc}/sharity/description/landing.png`,
          `${imageSrc}/sharity/description/charity1.png`,
          `${imageSrc}/sharity/description/charity2.png`,
        ],
      },
    ],
    type: "1",
    imageType: "phone",
  },
  chessmate: {
    descriptionArray: [
      {
        description:
          "ChessMate has an interactive user interface with AI support for different levels of chess proficiency. It contains a chess timer that enforces users to think on their feet.",

        img: [
          `${imageSrc}/chessmate/Landing.png`,
          `${imageSrc}/chessmate/Home.png`,
        ],
      },
      {
        description:
          "The app contains an achievement section where users can see which achievements they completed and which are in progress.\nChessMate allows users to reply past games so they can analyze their strategy and improve.",

        img: [
          `${imageSrc}/chessmate/Achievements.png`,
          `${imageSrc}/chessmate/Matches.png`,
        ],
      },
    ],
    type: "1",
  },
  careercue: {
    descriptionArray: [
      {
        description:
          "CareerCue provides a database of commonly asked behavioural interview questions across various industries. You can practice your responses by recording yourself and getting instant feedback to improve your answers.",

        img: [`${imageSrc}/careercue/description1.png`],
      },
      {
        description:
          "The app provides customized feedback so users can see their strengths and weaknesses based on tone, clarity, word choice, and timing. Users can switch questions, restart the recording, try the same question again, and send a summary of their answers and feedback to their email for later review.",

        img: [`${imageSrc}/careercue/description2.png`],
      },
    ],

    type: "2",
  },
  patientviz: {
    descriptionArray: [
      {
        description:
          "PatientViz allows the clinician to import patient intake form responses into the application, and visualize this data against the clinic’s patient population. Also, users are able to filter the data to be visualized by conditional subpopulations (e.g. patients taking certain medications, patients with a certain set of symptoms, etc.). Analytical statistics such as the correlation between medications and diagnoses within the clinic’s population are also presented in a drill-down view.",

        img: [`${imageSrc}/patientviz/desc1.png`],
      },
      {
        description:
          "The application also automatically generate individual patient reports. These patient reports contain sections outlining different areas of interest for each patient’s case. Including their current medications and diagnoses information, cross examination of medications and diagnoses against the population, free-text notes, non-medical interventions, and root causes.",

        img: [`${imageSrc}/patientviz/desc2.png`],
      },
    ],
    type: "2",
  },
  alacrity: {
    descriptionArray: [
      {
        description:
          "Alacrity contains a calendar view where it displays user’s tasks and users can manually move their workload around the calendar.\nThe app automatically optimizes their personal calendar using algorithms to spread work out as evenly as possible",

        img: [`${imageSrc}/alacrity/calendar.png`],
      },
      {
        description:
          "Users can add tasks to the calendar by filling out the options which will then be presented on their calendar in the most optimized way.",

        img: [`${imageSrc}/alacrity/task.png`],
      },
    ],
    type: "2",
    background: "#F5C0E2",
  },
  renew: {
    descriptionArray: [
      {
        description:
          "Renew is an app designed to provide support and resources for immigrants in a new country. The app name was chosen to represent the fact that it helps refugees as they start a new life in a new country, hence renew.\nThe app features a community function where users are grouped into communities based on where they came from and where they have immigrated to. Within these communities, users can post and comment about any questions or resources for users to learn from each other. Additionally, there is a map feature which filters for nearby food banks, hospitals, and areas with recent criminal activity.",

        img: [
          `${imageSrc}/renew/desc1.png`,
          `${imageSrc}/renew/desc2.png`,
          `${imageSrc}/renew/desc3.png`,
        ],
      },
    ],
    type: "3",
  },
  onepiece: {
    descriptionArray: [
      {
        description:
          "The web app has a Search page that shows all the existing cards and a filter feature that users can use to find any specific cards they want. From the Search page, users can add a card to their collection or to their wishlist. If they already have that card a warning will appear letting them know.",

        img: [
          `${imageSrc}/onepiece/filter.png`,
          `${imageSrc}/onepiece/filter2.png`,
          `${imageSrc}/onepiece/wishlist1.png`,
          `${imageSrc}/onepiece/wishlist2.png`,
        ],
      },
      {
        description:
          "On the Collection page, users can see their collection, change the quantity of cards, and delete cards.\nThe Missing page has all the cards the user dont have (based on their collection). From there they can move a card to their collection (which would delete the card from the Missing page) or to their wishlist (which wont change the state of the missing cards)",
        img: [
          `${imageSrc}/onepiece/collection.png`,
          `${imageSrc}/onepiece/missing.png`,
          `${imageSrc}/onepiece/search.png`,
        ],
      },
    ],
    type: "4",
  },
};
