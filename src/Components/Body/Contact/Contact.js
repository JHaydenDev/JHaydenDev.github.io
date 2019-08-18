import React, { Component } from "react";
import styled from "styled-components";
import ContactBox from "./ContactBox";

const Wrapper = styled.div`
  background: rgb(0, 0, 0); /* The Fallback */
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  margin-top: 5%;
  padding-top: 2%;
  padding-bottom: 2%;
  min-height: 50vh;
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding-top: 5%;
    padding-bottom: 5%;
  }
`;

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = { 

     };
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.sendMessage()
  }

y
  
  render() {
    
    return (
      <Wrapper>
        <ContactBox/>
      </Wrapper>
    );
  }
}

export default Contact;
