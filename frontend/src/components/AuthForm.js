import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login, register } from '../actions/authActions';

const AuthForm = ({ isRegister }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isRegister) {
      dispatch(register(username, password));
    } else {
      dispatch(login(username, password));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">{isRegister ? 'Register' : 'Login'}</button>
    </form>
  );
};

export default AuthForm;
