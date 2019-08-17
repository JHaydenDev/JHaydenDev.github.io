import React, { Component } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

const Wrapper = styled.div`
  background: rgb(0, 0, 0); /* The Fallback */
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  margin-top: 5%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  @media (max-width: 760px) {
    flex-direction:column;
    align-items: center;
    width:100%; 
    padding-top: 5%;
    padding-bottom: 5%;
  }
`;


const ContactInfo = styled.div`
width: 45%;
margin: auto;
@media (max-width: 600px) {
  width:auto;
`;

const SocialFollow = styled.div`
  width: 45%;
  margin: auto;
  display: flex;
  padding: 5%;
  flex-wrap: wrap;
  justify-content: space-around;
  > div {
    width: 100%;
  }
`;
const SocialIcon = styled.a`
 padding:3%;
 &:hover{
  color:aqua;
  transition: 0.3s;
  box-shadow: 0 5px 15px rgba(0,0,0,1);
}
`;

class Footer extends Component {
  render() {
    return (
      <Wrapper>
        <ContactInfo>
          <h3>Contact Info</h3>
          <p>Email<br/>josephhaydendevelopment<br/>@gmail.com</p>
          <p>Location<br/>Chicago, IL</p>
        </ContactInfo>
        <SocialFollow>
          <h3>Follow me on social media!</h3>
          <div>
            <SocialIcon href="https://github.com/JHaydenDev">
              <FontAwesomeIcon icon={faGithub} size="3x" />
            </SocialIcon>
            <SocialIcon href="https://twitter.com/JHaydenDev">
              <FontAwesomeIcon icon={faTwitter} size="3x" />
            </SocialIcon>
            <SocialIcon href="https://www.linkedin.com/in/joseph-hayden-b30a5b126/">
              <FontAwesomeIcon icon={faLinkedin} size="3x" />
            </SocialIcon>
          </div>
        </SocialFollow>
      </Wrapper>
    );
  }
}

export default Footer;
