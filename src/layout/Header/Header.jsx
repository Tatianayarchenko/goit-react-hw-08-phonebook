import { UserMenu } from 'components/UserMenu';
import { AuthNav } from 'layout/AuthNav';
import { useSelector } from 'react-redux';
import { HeaderStyled, Navigation } from './Header.styled';
import { authSelectors } from 'store/auth';
import { MainNav } from './MainNav';

export const Header = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <>
      <HeaderStyled>
        <Navigation>
          <MainNav />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Navigation>
      </HeaderStyled>
    </>
  );
};
