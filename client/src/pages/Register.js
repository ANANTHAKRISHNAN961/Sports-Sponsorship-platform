// client/src/pages/Register.js

import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Register = () => {
  const [role, setRole] = useState('athlete'); // Default role

  return (
    <Container className="my-5">
      <h1 className="text-center">Register</h1>
      <Form>
        <Row className="mb-3">
          <Col>
            <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
          </Col>
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
          <Col>
            <Form.Group controlId="formBasicRole">
              <Form.Label>Role</Form.Label>
              <Form.Control as="select" onChange={(e) => setRole(e.target.value)} defaultValue={role}>
                <option value="athlete">Athlete</option>
                <option value="sponsor">Sponsor</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>

        <Button variant="primary" type="submit" className="w-100">
          Register as {role.charAt(0).toUpperCase() + role.slice(1)}
        </Button>
      </Form>
    </Container>
  );
};

export default Register;
