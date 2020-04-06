import React, { Component } from "react";
import styled from "styled-components";
import Card from "./Cards";
import PortfolioPageImg from "./PortfolioPage.png";
import DevDeskQImg from "./DevDeskQ.png";
import DungeonHelperImg from "./DungeonHelper.png";
import PeacefulHomePage from "./PeacefulHomePage.png";
import GitHubFavorites from "./GitHubFavorites.png";
import LyfeLoggerImg from "./LyfeLoggerImg.png"

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
          image: LyfeLoggerImg,
          heading: "Lyfe Logger",
          description:
            "Organize all the things about life that are irregular. The things you forget to do. Change your oil, rotate your tires, replace your AC air filter. Home, auto, other maintenance tasks. Log events, later searchable so you can remember when/where/what you did. ",
          github: "https://github.com/Lambda-School-Labs/life-logger-fe",
          hosted: "lyfe-logger.com",
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
        {
          image: PeacefulHomePage,
          heading: "Peaceful Home Page",
          description:
            "Peaceful Home Page is home page app that has your location, weather, google search, etc. Under Development",
          github: "https://github.com/JHaydenDev/PeacefulHomePage",
          hosted: "https://jhaydendev.github.io/PeacefulHomePage/",
        },
        {
          image: GitHubFavorites,
          heading: "GitHub Favorites",
          description:
            "GitHub Favorites is a simple app that uses the github api to pull information on a GitHub profile and save it.",
          github: "https://github.com/Buildweek-Github-User-Breakdown",
          hosted: "https://admiring-mirzakhani-d0e93c.netlify.com/",
        },
        {
          image: PortfolioPageImg,
          heading: "Portfolio Page",
          description:
            "This portfolio page was created using ReactJS, React Router, Styled Components, and HTML5",
          github: "https://github.com/JHaydenDev/JHaydenDev.github.io",
          hosted: "https://jhaydendev.github.io",
        }
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
