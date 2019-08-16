import React, { Component } from "react";
import styled from "styled-components";
import AboutMePic from "./AboutMePic.jpg";

const Wrapper = styled.div`
  background: rgb(0, 0, 0); /* The Fallback */
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  margin-top: 5%;
  padding-top: 2%;
  padding-bottom: 2%;
  min-height: 50vh;
  >p{
    margin:2%;
  }
`;

const AboutPicture = styled.div`
  margin-top: 2%;
  text-align: center;
  background: url(${AboutMePic});
  background-position: center;
  min-height: 39vh;
  background-repeat: no-repeat;
`;

class Home extends Component {
  render() {
    return (
      <Wrapper>
        <AboutPicture />
        <p>
          Hello, I'm Joseph Hayden. I am a front end developer. I am passonate
          about creating software that improves the daily lives of those around
          me. I like to create sites with clear cut ease of use with a
          responsive design.
        </p>
      </Wrapper>
    );
  }
}

export default Home;
