import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background: rgb(0, 0, 0); /* The Fallback */
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  margin-top: 5%;

  height: 10vh;
`;

const FooterContent = styled.div`
  padding: 1%;
`;

class Footer extends Component {
  render() {
    return (
      <Wrapper>
        <FooterContent>This is the Footer!!!</FooterContent>
      </Wrapper>
    );
  }
}

export default Footer;
