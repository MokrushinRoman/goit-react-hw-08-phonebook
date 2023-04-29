import { useAuth } from 'hooks/useAuth';
import { Header, NavLink } from './AppBar.styled';
import { AuthNav, UserMenu } from 'components';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Header>
      <div
        className="container"
        style={{ width: '100%', alignContent: 'flex-end', display: 'flex' }}
      >
        {isLoggedIn ? (
          <>
            <NavLink to="contacts">Contacts</NavLink> <UserMenu />
          </>
        ) : (
          <AuthNav />
        )}
      </div>
    </Header>
  );
};
