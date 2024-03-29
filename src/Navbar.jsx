import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  grid-area: top;
`;

const StyledLink = styled(Link)`
  /*   color: white;
  background-color: #f1356d;
  border-radius: 8px; */
`;
const Navbar = () => {
  return (
    <StyledNav>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/contact">Contact</StyledLink>
      <StyledLink to="/portfolio">Portfolio</StyledLink>
      <StyledLink to="/about">About</StyledLink>
    </StyledNav>
  );
};

export default Navbar;
