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
    inspo: (
      <>
        <p>
          CareerCue&apos;s purpose came from recognizing the challenges and
          anxiety many prospective applicants face when preparing for job
          interviews. The entire process can be stressful, and many people
          don&apos;t have the resources to know how to best prepare for the
          questions that may be asked.
        </p>{" "}
        <br />{" "}
        <p>
          CareerCue is made for anyone who is looking to improve or polish their
          interview skills, including beginners entering the workforce for the
          first time, underprivileged demographics who have limited access to
          career resources, mothers looking to return to their careers after
          maternity leave, or people who are trying to improve their
          communication skills.
        </p>
      </>
    ),
    img: "/images/projects/careercue/inspo.png",
    backgroundcolor: "#A09ED1",
    textcolor: "black",
    githubLink: "https://github.com/sofiareis/cmdf2023",
    devpostLink: "https://devpost.com/software/careercue",
  },
  [ALACRITY]: {
    inspo: (
      <p>
        Alacrity is a web app meant to help students manage their time. It
        provides an interface for students to enter their due dates, plan work
        sessions and rearrange those work sessions to spread the work out more
        evenly.{" "}
      </p>
    ),
    img: "/images/projects/alacrity/home.png",
    backgroundcolor: "#352964",
    textcolor: "white",
    githubLink: "https://github.com/sofiareis/Alacrity",
  },
  [CHESSMATE]: {
    inspo: (
      <p>
        ChessMate is a one player chess engine where the user plays against an
        AI opponent. Not only can the player play a game of chess, they can save
        their games to replay for analysis and pause games in the middle of
        playing. The majority of the processing is done on the ARM chip on the
        DE1-SoC with rendering and move input being done on an Android phone.
        The DE1 and the phone are supposed to communicate over Bluetooth. This
        project aims to attract tech savvy people who are interested in learning
        how to play chess or improve their existing skill. Our design takes into
        consideration that not everyone has a pre-existing knowledge of chess,
        therefore it will perform move validation and automatically prevent
        illegal moves from being played.{" "}
      </p>
    ),
    img: "/images/projects/chessmate/pawn.png",
    backgroundcolor: "#97B6A7",
    textcolor: "black",
    //chess: true,
    githubLink: "https://github.com/sofiareis/ChessMate",
  },
  [MOKO]: {
    inspo: (
      <p>
        Inspired by local farmers markets, moko is an app that aims to promote
        sustainable development by minimizing CO2 emissions from food
        transportation and encouraging eating local and fresh produce. Moko also
        strives to encourage discovery and support for local businesses and
        foster community bonding.{" "}
      </p>
    ),
    img: "/images/projects/moko/ecology.svg",
    backgroundcolor: "#87B676",
    textcolor: "black",
    //box: true,
    githubLink: "https://github.com/sofiareis/moko",
    devpostLink: "https://devpost.com/software/moko-0lnre2",
  },
  [PATIENVIZ]: {
    inspo: (
      <p>
        Triage is a crucial tool in managing long waitlists as the process
        enables more equitable care and allows patients with the greatest and
        most urgent needs to be seen first. However, it can be complicated, as
        referrals received by specialist physicians often differ in detail and
        length. The goal of PatientViz is to help physicians with the triage
        process and minimize long waiting lists.
      </p>
    ),
    img: "/images/projects/patientviz/health2.png",
    backgroundcolor: "#8D6AA3",
    textcolor: "black",
    //box: true,
  },
  [RENEW]: {
    inspo: (
      <p>
        With a growing number of conflicts worldwide, tens of millions of
        refugees are being forced to abandon their home countries in search of
        safety, being thrown into a deeply frightening and uncertain future.
        Renew is meant to help refugees in these situations as they navigate
        life in a new and unfamiliar country.
      </p>
    ),
    img: "/images/projects/renew/renewInspo.png",
    backgroundcolor: "#839788",
    textcolor: "black",
    //renew: true,
    githubLink: "https://github.com/sofiareis/renew",
    devpostLink: "https://devpost.com/software/renew",
  },
  [SHARITY]: {
    inspo: (
      <p>
        A portmanteau of the words &quot;she&quot;, &quot;share&quot;, and
        &quot;charity&quot;, Sharity is a donation app focused on providing
        women with necessities. Sharity promotes women empowerment in the
        community and sustainability by encouraging users to donate their used
        or new items to local female’s shelters.
      </p>
    ),
    img: "/images/projects/sharity/inspo.png",
    backgroundcolor: "#739AAB",
    textcolor: "white",
    githubLink: "https://github.com/sofiareis/Sharity",
    devpostLink: "https://devpost.com/software/sharity-8dkvza",
  },
  [ONEPIECE]: {
    inspo: (
      <>
        <p>
          As an avid collector of the One Piece Card Game, I searched for a tool
          to manage my collection. However, existing card trackers either lacked
          certain features I wanted or didn&apos;t have a One Piece Card
          database.
        </p>
        <br />
        <p>
          This project was born out of the desire to create a product that
          included all the requirements of a great tracker. One of the key
          motivations behind this project was the absence of a dedicated
          &quot;missing card&quot; feature in other trackers. I wanted a tool
          that not only helped me catalog my existing collection but also showed
          me exactly which cards I didn&apos;t have.
        </p>
      </>
    ),
    img: "/images/projects/onepiece/search.png",
    backgroundcolor: "#B6AC90",
    textcolor: "black",
    githubLink: "https://github.com/sofiareis/One_Piece_Card",
  },
};
