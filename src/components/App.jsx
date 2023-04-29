import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { PrivateRoute, RestrictedRoute, GlobalStyle } from 'components';
import { AuthLogIn, AuthRegister, Phonebook, WelcomePage } from 'pages';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { refresh } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';

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
            <Route index element={<WelcomePage />} />
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
            <Route path="*" element={<Navigate to="login" replace={true} />} />
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
