import React, { Component } from "react";
import styled from "styled-components";


const Wrapper = styled.div`
  background: rgb(0, 0, 0); /* The Fallback */
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  margin-top: 5%;
  padding-top: 2%;
  padding-bottom: 2%;
  min-height: 50vh;
  @media (max-width: 600px) {
    flex-direction:column;
    align-items: center;
    width:100%; 
    padding-top: 5%;
    padding-bottom: 5%;
  }
`;


class Contact extends Component {
  render() {
    return (
      <Wrapper>
        <h1>Contact Form!!!</h1>
      </Wrapper>
    );
  }
}

export default Contact;
