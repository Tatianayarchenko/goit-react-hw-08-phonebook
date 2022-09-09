import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderStyled = styled.header`
  font-size: 1.5em;
  width: 100%;
  color: #e99797;
  background-color: #cec1df2e;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
`;

export const StyledLink = styled(NavLink)`
  text-align: center;
  display: inline-flex;
  justify-content: center;
  padding-top: 5px;
  padding-bottom: 5px;
  color: #e99797;
  text-decoration: none;
  &:not(:last-child) {
    margin-right: 20px;
  }
  &.active {
    color: #000000;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #e99797;
    text-decoration: underline;
  }
`;
