import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Body from "./Components/Body/Body";
import { HashRouter as Router } from "react-router-dom";
import styled from "styled-components";
import BackgroundImg from "./Background.jpg";
import Footer from "./Components/Footer/Footer";
import { Helmet } from 'react-helmet';

const BackgroundLayer = styled.div`
  text-align: center;
  background: url(${BackgroundImg}) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  color: white;
  min-height: 100vh;
  max-width:1400px;
  margin: auto;
`;

  

const AppWrapper = styled.div`
  width: 85%;
  margin: auto;
  padding-top: 3%;
  padding-bottom: 3%;
`;

class App extends Component {
  render() {
    return (
      <BackgroundLayer>
        <Helmet>
          <title>Joseph Hayden's Portfolio</title>
        </Helmet>
        <AppWrapper>
          <Header />
          <Router basename='/'>
            <Body />
          </Router>
          <Footer />
        </AppWrapper>
      </BackgroundLayer>
    );
  }
}

export default App;
