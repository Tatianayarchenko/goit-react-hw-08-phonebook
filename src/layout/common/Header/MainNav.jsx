import React from 'react';
import { StyledLink } from './Header.styled';
import { useAuth } from 'hooks';

export const MainNav = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <StyledLink to="/">PHONE BOOK</StyledLink>
      {isLoggedIn && <StyledLink to="/contacts">Contacts</StyledLink>}
    </nav>
  );
};
