import React from 'react';
import { StyledLink } from './Header.styled';
import { useSelector } from 'react-redux';
import { authSelectors } from 'store/auth';

export const MainNav = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <nav>
      <StyledLink to="/">PHONE BOOK</StyledLink>
      {isLoggedIn && <StyledLink to="/contacts">Contacts</StyledLink>}
    </nav>
  );
};

// export default Navigation;
