import React, { Component } from "react";
import styled from "styled-components";
import ControlledCarousel from "./Carousel/Carousel";

const Wrapper = styled.div`
  background: rgb(0, 0, 0); /* The Fallback */
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  margin-top: 5%;
`;

class Home extends Component {
  render() {
    return (
      <Wrapper>
        <ControlledCarousel />
      </Wrapper>
    );
  }
}

export default Home;
