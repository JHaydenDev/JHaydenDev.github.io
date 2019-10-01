import React from "react";
import CardContainer from "./CardContainer"
import styled from "styled-components";

const ProjectBox = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-around;
@media (max-width: 850px) {
    display:flex;
    flex-direction:column;
  }
  }
`;

const Card = props => {
  return (
    <ProjectBox>
        {props.projects.map(project => {
           return <CardContainer project = {project} key = {Math.random(Date.now())}/>
        })}
    </ProjectBox>
  );
};

export default Card;

