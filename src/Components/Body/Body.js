import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import Resume from "./Resume"
import Projects from "./Projects/Projects";
import Home from "./Home/Home";
import styled from "styled-components";

const StyledLink = styled(Link)`
  color: white;
  width:27%;
  margin:1%;
  text-decoration: none;
  padding: 2%;
  border: 1px solid white;
  &:hover{
    border: 1px solid aqua;
    color:aqua;
    transition: 0.3s;
    box-shadow: 0 5px 15px rgba(0,0,0,1);
  }
  @media (max-width: 760px) {
    width:80%;
    margin: 1% auto;
  }
`;

const LinkWrapper = styled.div`
  background: rgb(0, 0, 0); /* The Fallback */
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  padding-top: 4%;
  padding-bottom: 4%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  @media (max-width: 760px) {
    display:flex;
    flex-direction:column;
  }
`;

class Body extends Component {
  render() {
    return (
      <div>
        <LinkWrapper>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/projects/">Projects</StyledLink>
          <StyledLink to="/contact/">Resume</StyledLink>
        </LinkWrapper>

        <Route path="/" exact component={Home} />
        <Route path="/contact/" component={Resume} />
        <Route path="/projects/" component={Projects} />
      </div>
    );
  }
}

export default Body;
