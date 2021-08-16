import React,{useState}from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";

import { Form, Button } from "react-bootstrap";

import InputComponent from "./InputComponent";

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
          <InputComponent
            name="Email"
            type="email"
            placeholder="Email"
            error={error.email}
          />

          <InputComponent
            name="Password"
            type="Password"
            placeholder="Password"
            error={error.password}
          />

          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
