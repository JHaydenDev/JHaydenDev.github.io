import React, { Component } from "react";
import styled from "styled-components";
import ContactBox from "./ContactBox";

const ButtonWrapper = styled.div`
  display:flex;
  align-items: center;
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
      <ButtonWrapper>
        <ContactBox/>
      </ButtonWrapper>
    );
  }
}

export default Contact;
