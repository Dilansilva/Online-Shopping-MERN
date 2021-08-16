import React ,{useState}from 'react';
import { Form,Button } from 'react-bootstrap';
import '../Login/Login.css';

import InputComponent from '../Login/InputComponent';

const SignUp = () => {

    const [error,setError] = useState({
        email: null,
        password: null,
        name: null
      });

    return (
        <>
        <div className="main-header">
      <div className="inner-header">
        <h1>Sign Up</h1>
        <br />
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="red-color-text">
              {error.name}
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="password" placeholder="Password" />
            <Form.Text className="red-color-text">
              {error.password}
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Password</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="red-color-text">
              {error.email}
            </Form.Text>
          </Form.Group>

          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </div>
    </div>
        </>
    )
}

export default SignUp
