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
  padding-top: 2%;
  padding-bottom: 2%;
  min-height: 50vh;
`;
const SocialFollow = styled.div`
  width: 100%;
  padding-bottom: 2%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top:5%;

  > div {
    width: 100%;
    padding: 2%;
  }
`;
const SocialIcon = styled.a`
  padding: 1%;
`;

class Contact extends Component {
  render() {
    return (
      <Wrapper>
        <h2>Contact Info</h2>
        <div>
          <div>Email: josephhaydendevelopment@gmail.com</div>
          <div>Location: Chicago, IL</div>
          <SocialFollow>
            <div>Follow me on social media!</div>
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
        </div>
      </Wrapper>
    );
  }
}

export default Contact;
