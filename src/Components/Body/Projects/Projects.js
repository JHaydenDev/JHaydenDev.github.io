import React, { Component } from "react";
import styled from "styled-components";
import Card from "./Cards";
import PortfolioPageImg from "./PortfolioPage.png";
import DevDeskQImg from "./DevDeskQ.png";
import DungeonHelperImg from "./DungeonHelper.png";

const Wrapper = styled.div`
  background: rgb(0, 0, 0); /* The Fallback */
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  margin-top: 5%;
  padding-top: 2%;
  padding-bottom: 2%;
  min-height: 50vh;
  @media (max-width: 760px) {
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
          image: PortfolioPageImg,
          heading:"Portfolio Page",
          description:"This portfolio page was created using ReactJS, React Router, Styled Components, and HTML5",
          github:"https://github.com/JHaydenDev/JHaydenDev.github.io",
          hosted:"https://jhaydendev.github.io",
        },
        {
          image: DevDeskQImg,
          heading:"Dev Desk Queue",
          description: "Dev Desk Queue is a ticketing system for Devs with CRUD functionality",
          github:"https://github.com/JHaydenDev/Front-End",
          hosted:"https://devdeskqueue.com",
        },
        {
          image: DungeonHelperImg,
          heading:"Dungeon-Helper",
          description:"Dungeon Helper is a encounter generator for Dungeons and Dragons.",
          github:"https://github.com/JHaydenDev/dnd-encounter-generator",
          hosted:"https://dungeon-helper.com",
        },
      ]
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
