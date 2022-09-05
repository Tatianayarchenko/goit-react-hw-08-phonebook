import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from 'store/auth';
import { UserMenuContainer, Span, UserMenuButton } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  return (
    <UserMenuContainer>
      <Span>Welcome {name}</Span>
      <UserMenuButton
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Logout
      </UserMenuButton>
    </UserMenuContainer>
  );
};
