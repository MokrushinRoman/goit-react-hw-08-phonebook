import { useAuth } from 'hooks/useAuth';
import { Container } from './UserMenu.styled';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';

export const UserMenu = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();

  const handleLogOut = () => dispatch(logOut());

  return (
    <Container>
      <b>Welcome, {user.name}!</b>
      <button type="button" onClick={handleLogOut}>
        Logout
      </button>
    </Container>
  );
};
