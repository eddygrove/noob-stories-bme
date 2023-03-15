import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import locicon from "./assets/location-dot-solid.svg";
import igicon from "./assets/instagram.svg";
import comicon from "./assets/comment-solid.svg";
import shareicon from "./assets/share-from-square-solid.svg";

const LocIcon = styled.img`
  width: 1em;
`;
const IgIcon = styled.img`
  width: 1em;
`;
const ComIcon = styled.img`
  width: 1em;
`;
const ShareIcon = styled.img`
  width: 1em;
`;

const StyledFoot = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
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
      <StyledLink to="/contact">
        {" "}
        <LocIcon src={igicon} alt="Instagram Icon" />
      </StyledLink>
      <StyledLink to="/">
        <strong>©Zap Industries, 1978</strong>
      </StyledLink>
      <StyledLink to="/portfolio">
        {" "}
        <LocIcon src={comicon} alt="Communicate Icon" />
      </StyledLink>
      <StyledLink to="/about">
        {" "}
        <LocIcon src={shareicon} alt="Share Icon" />
      </StyledLink>
    </StyledFoot>
  );
};

export default Footer;
