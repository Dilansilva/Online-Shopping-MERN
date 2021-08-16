import React ,{useState}from 'react';
import { Form,Button } from 'react-bootstrap';
import '../Login/Login.css';

import InputComponent from '../Login/InputComponent';

const SignUp = () => {

    const [error,setError] = useState({
        email: null,
        password: null,
        name: null,
        network: null
      });

    return (
        <>
        <div className="main-header">
      <div className="inner-header">
        <h1>Sign Up</h1>
        <br />
        <Form>
          <InputComponent
            name="Full Name"
            type="Text"
            placeholder="Full Name"
            error={error.name}
          />

          <InputComponent
            name="Email Address"
            type="email"
            placeholder="Email"
            error={error.email}
          />          

          <InputComponent
            name="Password"
            type="password"
            placeholder="Password"
            error={error.password}
          />                 

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
