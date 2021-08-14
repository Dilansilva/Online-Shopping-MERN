import React,{useState}from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";

import { Form, Button } from "react-bootstrap";

const Login = () => {
  const [error,setError] = useState({
    email: null,
    password: null
  });
  return (
    <div className="main-header">
      <div className="inner-header">
        <h1>Login</h1>
        <br />
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">

            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
