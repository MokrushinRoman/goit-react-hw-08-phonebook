import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { PrivateRoute, RestrictedRoute, GlobalStyle } from 'components';
import { Layout } from './Layout';
import { refresh } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import WelcomePage from 'pages/WelcomePage/WelcomePage';

const AuthLogIn = lazy(() => import('../pages/AuthLogIn/AuthLogIn'));
const AuthRegister = lazy(() => import('../pages/AuthRegister/AuthRegister'));
const Phonebook = lazy(() => import('../pages/Phonebook/Phonebook'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return (
    <>
      {!isRefreshing && (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <RestrictedRoute
                  component={<WelcomePage />}
                  restrictTo="/contacts"
                />
              }
            />
            <Route
              path="login"
              element={
                <RestrictedRoute
                  component={<AuthLogIn />}
                  restrictTo="/contacts"
                />
              }
            />
            <Route
              path="register"
              element={
                <RestrictedRoute
                  component={<AuthRegister />}
                  restrictTo="/contacts"
                />
              }
            />
            <Route
              path="contacts"
              element={<PrivateRoute component={<Phonebook />} />}
            />
            <Route path="*" element={<Navigate to="/" replace={true} />} />
          </Route>
        </Routes>
      )}

      <GlobalStyle />
    </>
  );
};

/*
email
: 
"emptyspaceman1@gmail.com"
name
: 
"romanroman"
password
: 
"qwerty123qwe"
*/
