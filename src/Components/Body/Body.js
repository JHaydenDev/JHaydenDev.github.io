import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import Contact from "./Contact";
import Projects from "./Projects";
import Home from "./Home/Home";
import styled from "styled-components";

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 2%;
  &:hover{
    color:aqua;
    transition: 0.3s;
    box-shadow: 0 5px 15px rgba(0,0,0,1);
  }
  font-size:1.4rem;
  @media (max-width: 600px) {
    width:80%;
    margin: auto;
  }
`;

const LinkWrapper = styled.div`
  background: rgb(0, 0, 0); /* The Fallback */
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  padding-top: 4%;
  padding-bottom: 4%;
  @media (max-width: 600px) {
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
          <StyledLink to="/contact/">Contact</StyledLink>
        </LinkWrapper>

        <Route path="/" exact component={Home} />
        <Route path="/contact/" component={Contact} />
        <Route path="/projects/" component={Projects} />
      </div>
    );
  }
}

export default Body;
