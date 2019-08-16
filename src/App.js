import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Body from "./Components/Body/Body";
import { BrowserRouter as Router } from "react-router-dom";
import styled from "styled-components";
import BackgroundImg from "./Background.jpg";

const BackgroundLayer = styled.div`
  text-align: center;
  background: url(${BackgroundImg});
  color: white;
  min-height: 100vh;
  background-repeat: no-repeat;
  
`;
const AppWrapper = styled.div`
 width:85%;
 margin:auto;
`;

class App extends Component {
  render() {
    return (
      <BackgroundLayer>
        <AppWrapper>
          <Header />
          <Router>
            <Body />
          </Router>

        </AppWrapper>
      </BackgroundLayer>
    );
  }
}

export default App;
