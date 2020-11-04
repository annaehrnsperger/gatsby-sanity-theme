import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Header = () => (
  <StyledHeader className="dark">
    <h1>
      Header <Link to="/">Logo</Link>
    </h1>
  </StyledHeader>
);

const StyledHeader = styled.header``;

export default Header;
