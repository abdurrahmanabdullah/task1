// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../App.css"; // Import your custom CSS

// function Footer() {
//   return (
//     <Container fluid className="text-center py-4">
//       <Row className="align-items-center justify-content-center flex-nowrap">
//         {" "}
//         {/* Use flex-nowrap to prevent wrapping */}
//         <Col xs="auto" className="footer-link mb-2 mb-md-0">
//           <a href="#">Home</a>
//         </Col>
//         <Col xs="auto" className="footer-link mb-2 mb-md-0">
//           <a href="#">Manage posts</a>
//         </Col>
//         <Col xs="auto" className="footer-link mb-2 mb-md-0">
//           <a href="#">Contact Us</a>
//         </Col>
//         <Col xs="auto" className="footer-link mb-2 mb-md-0">
//           <a href="#">Policies & Terms</a>
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default Footer;
///------------------

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css"; // Import your custom CSS

function Footer() {
  return (
    <Container>
      <Row
        className="align-items-center justify-content-center flex-nowrap"
        style={{ marginTop: "2%", marginBottom: "2%" }}
      >
        {" "}
        {/* Use flex-nowrap to prevent wrapping */}
        <Col xs="auto" className="footer-link mb-2 mb-md-0">
          <a href="#">Home</a>
        </Col>
        <Col xs="auto" className="footer-link mb-2 mb-md-0">
          <a href="#">Manage posts</a>
        </Col>
        <Col xs="auto" className="footer-link mb-2 mb-md-0">
          <a href="#">Contact Us</a>
        </Col>
        <Col xs="auto" className="footer-link mb-2 mb-md-0">
          <a href="#">Policies & Terms</a>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
