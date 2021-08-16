import React from "react";
import { Form } from "react-bootstrap";

const InputComponent = (props) => {
  return (
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>{props.name}</Form.Label>
      <Form.Control type={props.type} placeholder={props.placeholder} />
      <Form.Text className="red-color-text">{props.error}</Form.Text>
    </Form.Group>
  );
};

export default InputComponent;
