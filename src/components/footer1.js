import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'; // Import Container from react-bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'; // Import your custom CSS

function Footer1() {
  return (
    <Container>
      <Row className="d-flex align-items-center justify-content-center text-center py-4">
        
        <Col xs={12} md="auto">
          <p style={{
            fontSize:"1rem"
          }}>© Skipthegames.eu</p>
        </Col>
        <Col xs={12} md="auto">
          <p style={{
            fontSize:"1rem"
          }}>Skip the games</p>
        </Col>
        
        {/* Second row for links */}
        <Col xs={12} md="auto" className="footer-link1 mt-2 mt-md-0">
          <a href="#" className="mx-2">Home</a>
        </Col>
        <Col xs={12} md="auto" className="footer-link mt-2 mt-md-0">
          <a href="#" className="mx-2">Contact</a>
        </Col>
        <Col xs={12} md="auto" className="footer-link mt-2 mt-md-0">
          <a href="#" className="mx-2">Privacy</a>
        </Col>
        <Col xs={12} md="auto" className="footer-link mt-2 mt-md-0">
          <a href="#" className="mx-2">Terms</a>
        </Col>
        <Col xs={12} md="auto" className="footer-link mt-2 mt-md-0">
          <a href="#" className="mx-2">Product Info</a>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer1;
