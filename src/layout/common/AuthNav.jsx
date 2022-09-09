import { StyledLink } from './Header/Header.styled';

export const AuthNav = () => {
  return (
    <nav>
      <StyledLink to="/register">Register</StyledLink>
      <StyledLink to="/login">Login</StyledLink>
    </nav>
  );
};
