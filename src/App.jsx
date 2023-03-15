import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Hero from "./Hero";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import logo from "./assets/zap-2.png";

const MyButton = styled.button`
  padding: 4em;
  background-color: papayawhip;
`;

const LogoContainer = styled.div`
  max-height: 9rem;
  grid-area: logo;
`;

const StyledImg = styled.img`
  height: 100%;
`;

const MainContainer = styled.div`
  grid-area: main;
`;

const GridContainer = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: 3rem repeat(3, 1fr) 3rem;
  grid-template-columns: repeat(5, 1fr);
  grid-template-areas:
    "logo top top top top"
    "main main main main main"
    "main main main main main"
    "main main main main main"
    "footer footer footer footer footer";
`;

// const StyledFooter = styled.footer`
//   grid-area: footer;
//   display: flex;
//   background-color: aqua;
//   justify-self: center;
//   align-self: center;
// `;

function App() {
  return (
    <Router>
      <GridContainer>
        <LogoContainer>
          <StyledImg src={logo} alt="Logo" />
        </LogoContainer>
        <Navbar />
        <MainContainer>
          <Hero text="MyHero" myOtherKey={33} name="Burn" />
          {/* text="MyHero", myOtherKey etc är props till Hero */}
          <Switch>
            <Route path="/about">
              <p>About</p>
            </Route>
            <Route path="/portfolio">
              <p>Portfolio</p>
            </Route>
            <Route path="/contact">
              <p>Contact</p>
            </Route>
            <Route path="/">
              <p>Home</p>
            </Route>
          </Switch>
          <h1>Hello Björn</h1>
        </MainContainer>
        <Footer />
        {/* <StyledFooter>
          <p>©Zap Industries, 1978</p>
        </StyledFooter> */}
      </GridContainer>
    </Router>
  );
}

export default App;
