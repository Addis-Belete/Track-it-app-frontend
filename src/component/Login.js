/* eslint-disable consistent-return */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form'
const Login = () => {
  const [name, setName] = useState('');
  const validateForm = () => (name.length > 0);
  const hanldleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Form >
  );
};
export default Login;
