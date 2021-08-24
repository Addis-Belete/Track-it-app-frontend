/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
/* eslint-disable consistent-return */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import login from '../style/login.module.css';

const Login = () => {
  const [name, setName] = useState('');
  const history = useHistory();
  const validateForm = () => {
    if (name.length > 2) {
      history.push('/track');
    } if (name.length <= 2) {
      alert('Please inter a valid user name');
    }
  };
  const disable = () => name.length > 2;

  return (
    <div className={login.login}>
      <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className={login.input} placeholder="Enter Your Name " />
      <button type="button" onClick={validateForm} className={login.button}>
        Login
      </button>

    </div>

  );
};
export default Login;
