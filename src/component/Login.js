/* eslint-disable no-alert */
/* eslint-disable consistent-return */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const [name, setName] = useState('');
  const history = useHistory();
  const validateForm = () => {
    if (name.length > 2) {
      history.push('/track');
    }
  };
  const disable = () => name.length > 2;

  return (
    <div>
      <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
      <button type="button" onClick={validateForm} disabled={!disable()}>
        Login
      </button>

    </div>

  );
};
export default Login;
