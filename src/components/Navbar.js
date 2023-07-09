import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  background-color: #333;
  color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const MenuItem = styled.li`
  margin-right: 1rem;
`;

const StyledLink = styled(NavLink)`
  color: #fff;
  text-decoration: none;

  &.active {
    font-weight: bold;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <Menu>
        <MenuItem>
          <StyledLink to="/">Home</StyledLink>
        </MenuItem>
        <MenuItem>
          <StyledLink to="/blog">Blog</StyledLink>
        </MenuItem>
        <MenuItem>
          <StyledLink to="/about">About Us</StyledLink>
        </MenuItem>
      </Menu>
    </Nav>
  );
};

export default Navbar;
