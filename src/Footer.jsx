import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import locicon from "./assets/location-dot-solid.svg";

const LocIcon = styled.img`
  width: 1em;
`;

const StyledFoot = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  grid-area: footer;
  background-color: aqua;
`;

const StyledLink = styled(Link)`
  /*   color: white;
  background-color: #f1356d;
  border-radius: 8px; */
`;
const Footer = () => {
  return (
    <StyledFoot>
      <StyledLink to="/">
        <LocIcon src={locicon} alt="Location Icon" />
      </StyledLink>
      <StyledLink to="/contact">Contact</StyledLink>
      <StyledLink to="/">
        <strong>©Zap Industries, 1978</strong>
      </StyledLink>
      <StyledLink to="/portfolio">Portfolio</StyledLink>
      <StyledLink to="/about">About</StyledLink>
    </StyledFoot>
  );
};

export default Footer;
