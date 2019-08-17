import React, { Component } from "react";
import styled from "styled-components";


const TitleWrapper = styled.div`
`;

const Title = styled.h1`
font-size: -webkit-xxx-large;
  padding-top:4%;
  margin:0;
  background: rgb(0, 0, 0); /* The Fallback */
  background: rgba(0, 0, 0, 0.5);
  @media (max-width: 400px) {
    font-size: xx-large;
  }
`;

class Header extends Component {
  render() {
    return (
      <TitleWrapper>
        <Title>Hayden Development</Title>
      </TitleWrapper>
    );
  }
}

export default Header;
