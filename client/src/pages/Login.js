// client/src/pages/Login.js

import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Login = () => {
  return (
    <Container className="my-5">
      <h1 className="text-center">Login</h1>
      <Form>
        <Row className="mb-3">
          <Col>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Col>
        </Row>

        <Button variant="primary" type="submit" className="w-100">
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
