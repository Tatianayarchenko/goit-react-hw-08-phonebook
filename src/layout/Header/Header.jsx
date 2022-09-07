import { UserMenu } from 'components/UserMenu';
import { AuthNav } from 'layout/AuthNav';
import { HeaderStyled, Navigation } from './Header.styled';
import { MainNav } from './MainNav';
import { useAuth } from 'hooks';

export const Header = () => {
  const { isLoggedIn } = useAuth();

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
