// client/src/pages/Home.js

import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import './Home.css'; // Import the CSS file for custom styles

const Home = () => {
  return (
    <Container fluid className="text-center my-5">
      <Row>
        <Col>
          <h1 className="display-4 text-primary">Welcome to the Sports Sponsorship Platform</h1>
          <p className="lead text-secondary">
            Connecting athletes with sponsors for mutual success.
          </p>
          <Button variant="success" size="lg" href="/register" className="mt-3">
            Get Started
          </Button>
        </Col>
      </Row>
      
      <Row className="my-5">
        <Col md={6}>
          <Card className="mb-4 shadow-lg bg-light">
            <Card.Body>
              <Card.Title className="text-warning">Athletes</Card.Title>
              <Card.Text>
                Showcase your skills and attract sponsorship opportunities that align with your career goals. 
                Join our platform to connect with potential sponsors and grow your brand!
              </Card.Text>
              <Button variant="info" href="/register">Join as Athlete</Button>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={6}>
          <Card className="mb-4 shadow-lg bg-light">
            <Card.Body>
              <Card.Title className="text-success">Sponsors</Card.Title>
              <Card.Text>
                Discover and support talented athletes. Our platform provides the tools to find athletes 
                who match your brand values and sponsorship criteria.
              </Card.Text>
              <Button variant="info" href="/register">Join as Sponsor</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <h2 className="text-danger">Why Choose Us?</h2>
          <ul className="list-unstyled text-left">
            <li>✅ Access to a diverse pool of athletes</li>
            <li>✅ Simplified sponsorship process</li>
            <li>✅ Enhanced visibility and brand recognition</li>
            <li>✅ Community-focused platform for sports enthusiasts</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
