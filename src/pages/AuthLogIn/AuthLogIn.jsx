import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { logIn } from 'redux/auth/operations';
import { authErrorNotification } from 'helpers/errorNotification';
import { Field, Form } from './AuthLogIn.styled';

export const AuthLogIn = () => {
  const [email, setMail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    if (!email || !password) {
      return authErrorNotification();
    }
    dispatch(logIn({ email, password }));
    setMail('');
    setPassword('');
  };

  const handleChange = e => {
    const value = e.target.value.toLowerCase().trim();
    const field = e.target.name;
    switch (field) {
      case 'email':
        setMail(value);
        break;
      case 'password':
        setPassword(value);
        break;

      default:
        return;
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Field>
        Mail
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </Field>
      <Field>
        Password
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </Field>
      <button type="submit">Log In</button>
    </Form>
  );
};
