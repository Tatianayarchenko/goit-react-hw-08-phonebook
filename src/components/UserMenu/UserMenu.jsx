import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { authOperations } from 'store/auth';
import { UserMenuContainer, Span, UserMenuButton } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();

  const { user } = useAuth();

  return (
    <UserMenuContainer>
      <Span>Welcome {user.name}</Span>
      <UserMenuButton
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Logout
      </UserMenuButton>
    </UserMenuContainer>
  );
};
