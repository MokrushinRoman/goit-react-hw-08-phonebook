import { Container, NavLink } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <Container>
      <NavLink to="register">Register</NavLink>
      <NavLink to="login">Log In</NavLink>
    </Container>
  );
};
