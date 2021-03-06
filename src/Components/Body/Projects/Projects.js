import React, { Component } from "react";
import styled from "styled-components";
import Card from "./Cards";
import PortfolioPageImg from "./PortfolioPage.png";
import DevDeskQImg from "./DevDeskQ.png";
import DungeonHelperImg from "./DungeonHelper.png";
import PeacefulHomePage from "./PeacefulHomePage.png";
import GitHubFavorites from "./GitHubFavorites.png";
import LyfeLoggerImg from "./LyfeLoggerImg.png";
import VeganMeats from "./VeganMeats.png";
import StemTheTide from "./StemTheTide.png";
import PrimativeQuiz from "./PrimativeQuiz.png";
import AweSurvey from "./AweSurvey.png";
import YAMLTool from "./YAMLTool.png"

const Wrapper = styled.div`
  background: rgb(0, 0, 0); /* The Fallback */
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  margin-top: 5%;
  padding-top: 2%;
  padding-bottom: 2%;
  min-height: 50vh;
  @media (max-width: 850px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding-top: 5%;
    padding-bottom: 5%;
  }
`;

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          image: YAMLTool,
          heading: "YAML author tool",
          description:
            "We built a tool to build programs for the continuing education of professionals and formatted them to be accepted by the client's legacy software.",
          github: "#",
          hosted: "https://yaml-author-tool.herokuapp.com/manager",
        },
        {
          image: AweSurvey,
          heading: "AWE Survey",
          description:
            "We built an API using Node.js and a front end UI using React.js which dynamically rendered results.",
          github: "#",
          hosted: "https://serene-hamlet-86075.herokuapp.com/#/",
        },
        {
          image: PrimativeQuiz,
          heading: "Primative Quiz",
          description:
            "We built an API using Node.js and a front end UI using React.js which dynamically rendered results and emailed said results to the user.",
          github: "#",
          hosted: "https://immense-eyrie-45216.herokuapp.com/#/",
        },
        {
          image: LyfeLoggerImg,
          heading: "Lyfe Logger",
          description:
            "Lyfe Logger is a task / event tracking app with full CRUD functionality, working calendar, and full featured UI",
          github: "https://github.com/Lambda-School-Labs/life-logger-fe",
          hosted: "https://lyfe-logger-fe.herokuapp.com/",
        },
        {
          image: VeganMeats,
          heading: "VeganMeets",
          description:
            "Vegan Meets is a place to find, add, and rate vegan restaurants",
          github: "https://github.com/Web26-veganmeats",
          hosted: "https://fe-xi-tan.now.sh/",
        },
        {
          image: DevDeskQImg,
          heading: "Dev Desk Queue",
          description:
            "Dev Desk Queue is a ticketing system for Devs with CRUD functionality",
          github: "https://github.com/JHaydenDev/Front-End",
          hosted: "https://devdesk-q.netlify.com/",
        },
        {
          image: DungeonHelperImg,
          heading: "Dungeon-Helper",
          description:
            "Dungeon Helper is a encounter generator for Dungeons and Dragons.",
          github: "https://github.com/JHaydenDev/dnd-encounter-generator",
          hosted: "https://jovial-edison-b9bb64.netlify.com",
        },
        // {
        //   image: StemTheTide,
        //   heading: "Stem The Tide",
        //   description:"Stem the tide is an informational site for an alternative game format for Magic The Gathering.  This is currently under development",
        //   github: "https://github.com/JHaydenDev/Stem-the-tide",
        //   hosted: "https://serene-wiles-bb2f2b.netlify.app/register",
        // },
        {
          image: GitHubFavorites,
          heading: "GitHub Favorites",
          description:
            "GitHub Favorites is a simple app that uses the github api to pull information on a GitHub profile and save it.",
          github: "https://github.com/Buildweek-Github-User-Breakdown",
          hosted: "https://admiring-mirzakhani-d0e93c.netlify.com/",
        },
        // {
        //   image: PeacefulHomePage,
        //   heading: "Peaceful Home Page",
        //   description:
        //     "Peaceful Home Page is home page app that has your location, weather, google search, etc. Under Development",
        //   github: "https://github.com/JHaydenDev/PeacefulHomePage",
        //   hosted: "https://jhaydendev.github.io/PeacefulHomePage/",
        // },
        // {
        //   image: PortfolioPageImg,
        //   heading: "Portfolio Page",
        //   description:
        //     "This portfolio page was created using ReactJS, React Router, Styled Components, and HTML5",
        //   github: "https://github.com/JHaydenDev/JHaydenDev.github.io",
        //   hosted: "https://jhaydendev.github.io",
        // },
      ],
    };
  }

  render() {
    return (
      <Wrapper>
        <Card projects={this.state.projects} />
      </Wrapper>
    );
  }
}

export default Projects;
