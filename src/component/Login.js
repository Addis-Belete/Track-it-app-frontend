/* eslint-disable consistent-return */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';

const Login = () => {
  const [name, setName] = useState('');
  const validateForm = () => (name.length > 0);
  const hanldleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="login">
      <Form onSubmit={hanldleSubmit}>
        <Form.Group size="lg" controlId="name">
          <Form.Label>User Name</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>

    </div>

  );
};
export default Login;
