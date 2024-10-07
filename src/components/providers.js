import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'; // Import Container from react-bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

const Providers = () => {
  return (
    <Container className="py-4">
      <Row className="text-center mb-4">
        <h2>Find and meet product providers anywhere</h2>
      </Row>
      <Row>
        {/* First Column */}
        <Col xs={12} md={6} className="d-flex flex-column align-items-center mb-3">
          <div className="provider-box w-100 mb-3">
            <div className="bg-secondary p-3 text-white rounded">Providers in Canada</div>
          </div>
          <div className="provider-box w-100 mb-3">
            <div className="bg-secondary p-3 text-white rounded">Providers in the Middle East & Africa</div>
          </div>
          <div className="provider-box w-100 mb-3">
            <div className="bg-secondary p-3 text-white rounded">Providers in Europe</div>
          </div>
        </Col>

        {/* Second Column */}
        <Col xs={12} md={6} className="d-flex flex-column align-items-center">
          <div className="provider-box w-100 mb-3">
            <div className="bg-secondary p-3 text-white rounded">Providers in the Americas & Caribbean</div>
          </div>
          <div className="provider-box w-100 mb-3">
            <div className="bg-secondary p-3 text-white rounded">Providers in USA</div>
          </div>
          <div className="provider-box w-100 mb-3">
            <div className="bg-secondary p-3 text-white rounded">Providers in Asia & Australia</div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Providers;
