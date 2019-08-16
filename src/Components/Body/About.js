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
`;

const ParagraphWrapper = styled.div`
  margin 2%;
  padding 2%;
  display:flex;
  flex-direction:column;
  min-height: 50vh;
  > p {
    margin 1%;
  padding 1%;
  }
`;
const AboutPicture = styled.div`
margin-top:2%;
  text-align: center;
  background: url(${AboutMePic});
  background-position: center;
  min-height: 39vh;
  background-repeat: no-repeat;
`;

class About extends Component {
  render() {
    return (
      <Wrapper>
        <h2>Who I am.</h2>
        <AboutPicture />
        <ParagraphWrapper>
          <p>
            I'm a Front-End Developer working towards full stack. I have a solid
            grasp of HTML, CSS, JavaScript and primarily use React for a
            significant ammount of my projects. I really enjoy learning new
            UI/UX concepts and technologies, as well as learning how to
            implement various animations (GSAP, Anime.js, ect.). Lets bring
            something to life together.
          </p>

          <p>
            On a personal note. I enjoy spending time with my partner Cali and
            our dog Penny. We spend a bit of time in Chicago out by the lake,
            hiking, having game night with friends, and experiencing everything
            this great city has to offer.
          </p>
        </ParagraphWrapper>
      </Wrapper>
    );
  }
}

export default About;
