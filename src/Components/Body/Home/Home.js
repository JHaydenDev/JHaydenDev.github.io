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
  display: flex;
  flex-direction: row;
  @media (max-width: 760px) {
    flex-direction:column;
    align-items: center;
    width:100%; 
    padding-top: 5%;
    padding-bottom: 5%;
  }
  flex-wrap: wrap;
  > p {
    width: 48%;
    margin: auto;
    @media (max-width: 760px) {
      padding-top: 5%;
    }
  }
`;

const AboutPicture = styled.img`
height: 52vh;
border-radius: 100px;
margin: auto;
`;

class Home extends Component {
  render() {
    return (
      <Wrapper>
        <AboutPicture src={AboutMePic} />
        <p>
          Hello, I'm Joseph Hayden. I am a front end developer and I am passonate
          about creating software that improves the daily lives of those around
          me. I like to create sites with clear cut ease of use and
          responsive design.
        </p>
      </Wrapper>
    );
  }
}

export default Home;
