import { HeaderStyled, StyledLink } from './Header.styled';

export const Header = () => {
  return (
    <>
      <HeaderStyled>
        <nav>
          <StyledLink to="/">PHONE BOOK</StyledLink>
          <StyledLink to="/register">Register</StyledLink>
          <StyledLink to="/login">Login</StyledLink>
        </nav>
      </HeaderStyled>
    </>
  );
};
