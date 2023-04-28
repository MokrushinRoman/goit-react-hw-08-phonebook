import { useAuth } from 'hooks/useAuth';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, restrictTo = '/' }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldNavigateTo = !isLoggedIn && !isRefreshing;
  return shouldNavigateTo ? <Navigate to={restrictTo} /> : Component;
};
