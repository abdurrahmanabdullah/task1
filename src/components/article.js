import React from 'react';
import "../App.css";
import { Container, Row, Col } from 'react-bootstrap'; // Import Container from react-bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

const ArticleSection = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Row>
            {/* Latest product articles */}
            <Col xs={12} md={6} className="mb-4">
              <h2 className="text-xl font-semibold mb-3">Latest product articles</h2>
              <div className="other-item" style={{ lineHeight: '1.4' }}>
                <p>SkipTheGames.com FAQ</p>
                <p>★ DO NOT let hackers control your account ★</p>
                <p>Bad clients: No shows and creeps</p>
                <p>Why you don't want to get too personal with a representative</p>
                <p>Ask an representative: Who is your favorite customer?</p>
              </div>
            </Col>

            {/* Most read product articles */}
            <Col xs={12} md={6} className="mb-4">
              <h2 className="text-xl font-semibold mb-3">Most read product articles</h2>
              <div className="other-item" style={{ lineHeight: '1.4' }}>
                <p>Product terms, size definitions and abbreviations in product ads</p>
                <p>★ How to identify fake product posts and avoid scams</p>
                <p>Prostitution laws in Arizona</p>
                <p>The good, bad and ugly products</p>
                <p>Prostitution law in Phoenix</p>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ArticleSection;
