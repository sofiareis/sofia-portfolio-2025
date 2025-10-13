import { ProjectDescription } from "@/interfaces/projects";
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

const imageSrc = "/images/projects";
const logoFolder = "prize-logo";

export const projectDescription: Record<string, ProjectDescription> = {
  [MOKO]: {
    backgroundcolor: "#87B676",
    descriptionArray: [
      {
        description:
          "Through Moko, users can buy and sell fresh produce within their local communities.\nThe app’s home shows local vendors who are near the user, allowing them to add items to their cart. Moko also features a sell function where users can create their own store and sell their produce to other users.\nUsers can track their carbon footprint by using the footprint function and check how they are minimizing CO2 emissions by buying and selling locally.",
        img: [
          `${imageSrc}/moko/home.png`,
          `${imageSrc}/moko/buy.png`,
          `${imageSrc}/moko/empty.png`,
          `${imageSrc}/moko/cart.png`,
          `${imageSrc}/moko/sell.png`,
          `${imageSrc}/moko/register.png`,
          `${imageSrc}/moko/editStore.png`,
          `${imageSrc}/moko/profile.png`,
        ],
      },
    ],
  },
  [SHARITY]: {
    backgroundcolor: "#739AAB",
    descriptionArray: [
      {
        description:
          "On the user side, Sharity allows users to connect to women shelters and donate clothing articles and period products. They can take pictures of their items, upload them to the app, and donate to selected organizations. Users can search local shelters on the built in maps function and they can also view each shelter’s donation wishlist. They  also have access to the Period Positivity fundraiser, in which funds go towards purchasing period products for local Vancouver organizations. On the charities side, organizations can swipe left and right on donation items they wish accept or decline. They may chat with users about donation pickup/drop-off information and organizations can also edit their account and donation wishlist.",
        img: [
          `${imageSrc}/sharity/description/landing.png`,
          `${imageSrc}/sharity/description/user1.png`,
          `${imageSrc}/sharity/description/user2.png`,
          `${imageSrc}/sharity/description/user3.png`,
          `${imageSrc}/sharity/description/user4.png`,
          `${imageSrc}/sharity/description/user5.png`,
          `${imageSrc}/sharity/description/charity1.png`,
          `${imageSrc}/sharity/description/charity2.png`,
          `${imageSrc}/sharity/description/charity3.png`,
        ],
      },
    ],
  },
  [CHESSMATE]: {
    backgroundcolor: "#97B6A7",
    descriptionArray: [
      {
        description:
          "ChessMate has an interactive user interface with AI support for different levels of chess proficiency. It contains a chess timer that enforces users to think on their feet. The app contains an achievement section where users can see which achievements they completed and which are in progress.\nChessMate allows users to reply past games so they can analyze their strategy and improve.",
        img: [
          `${imageSrc}/chessmate/Landing.png`,
          `${imageSrc}/chessmate/Home.png`,
          `${imageSrc}/chessmate/Home2.png`,
          `${imageSrc}/chessmate/HomePopup.png`,
          `${imageSrc}/chessmate/Chess.png`,
          `${imageSrc}/chessmate/ChessPopup.png`,
          `${imageSrc}/chessmate/Achievements.png`,
          `${imageSrc}/chessmate/SocialMedia.png`,
          `${imageSrc}/chessmate/Matches.png`,
          `${imageSrc}/chessmate/Account.png`,
        ],
      },
    ],
  },
  [CAREERCUE]: {
    backgroundcolor: "#A09ED1",
    descriptionArray: [
      {
        description:
          "CareerCue provides a database of commonly asked behavioural interview questions across various industries. You can practice your responses by recording yourself and getting instant feedback to improve your answers. The app provides customized feedback so users can see their strengths and weaknesses based on tone, clarity, word choice, and timing. Users can switch questions, restart the recording, try the same question again, and send a summary of their answers and feedback to their email for later review.",
        img: [
          `${imageSrc}/careercue/desc1.png`,
          `${imageSrc}/careercue/desc2.png`,
          `${imageSrc}/careercue/desc3.png`,
        ],
      },
    ],
  },
  [PATIENVIZ]: {
    backgroundcolor: "#8D6AA3",
    descriptionArray: [
      {
        description:
          "PatientViz allows the clinician to import patient intake form responses into the application, and visualize this data against the clinic’s patient population. Also, users are able to filter the data to be visualized by conditional subpopulations (e.g. patients taking certain medications, patients with a certain set of symptoms, etc.). Analytical statistics such as the correlation between medications and diagnoses within the clinic’s population are also presented in a drill-down view.",

        img: [
          `${imageSrc}/patientviz/desc1.png`,
          `${imageSrc}/patientviz/desc2.png`,
          `${imageSrc}/patientviz/desc3.png`,
          `${imageSrc}/patientviz/desc4.png`,
          `${imageSrc}/patientviz/desc5.png`,
        ],
      },
      {
        description:
          "The application also automatically generate individual patient reports. These patient reports contain sections outlining different areas of interest for each patient’s case. Including their current medications and diagnoses information, cross examination of medications and diagnoses against the population, free-text notes, non-medical interventions, and root causes.",

        img: [
          `${imageSrc}/patientviz/desc6.png`,
          `${imageSrc}/patientviz/desc7.png`,
          `${imageSrc}/patientviz/desc8.png`,
        ],
      },
    ],
  },
  [ALACRITY]: {
    descriptionArray: [
      {
        description:
          "Alacrity contains a calendar view where it displays user’s tasks and users can manually move their workload around the calendar.\nThe app automatically optimizes their personal calendar using algorithms to spread work out as evenly as possible. Users can add tasks to the calendar by filling out the options which will then be presented on their calendar in the most optimized way.",

        img: [
          `${imageSrc}/alacrity/landing.png`,
          `${imageSrc}/alacrity/home.png`,
          `${imageSrc}/alacrity/calendar.png`,
          `${imageSrc}/alacrity/task.png`,
          `${imageSrc}/alacrity/dayPage.png`,
          `${imageSrc}/alacrity/taskPage.png`,
        ],
      },
    ],
    backgroundcolor: "#352964",
  },
  [RENEW]: {
    backgroundcolor: "#839788",
    descriptionArray: [
      {
        description:
          "The app name was chosen to represent the fact that it helps refugees as they start a new life in a new country, hence renew. It app features a community function where users are grouped into communities based on where they came from and where they have immigrated to. Within these communities, users can post and comment about any questions or resources for users to learn from each other. Additionally, there is a map feature which filters for nearby food banks, hospitals, and areas with recent criminal activity.",
        img: [
          `${imageSrc}/renew/desc1.png`,
          `${imageSrc}/renew/desc2.png`,
          `${imageSrc}/renew/desc3.png`,
          `${imageSrc}/renew/desc4.png`,
          `${imageSrc}/renew/desc5.png`,
          `${imageSrc}/renew/desc6.png`,
        ],
      },
    ],
  },
  [ONEPIECE]: {
    backgroundcolor: "#B6AC90",
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
        ],
      },
    ],
  },
};
