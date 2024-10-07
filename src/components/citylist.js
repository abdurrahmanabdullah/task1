// import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap'; 
// import 'bootstrap/dist/css/bootstrap.min.css';

// const CityList = () => {
//   return (
//     <Container> 
//       <Row>
//         <Col> 
//           <img 
//             src="logo1.png" 
//             alt="Product in a red box" 
//             width="150" 
//             height="150" 
//           />
//         </Col>
//         <Col> 
//         <h2>Top product cities</h2>
//            <Row>
//             <Col>
//               <ul>
//                 <li className="first-item">Boston</li>
//                 <li className="other-item">Chicago</li>
//                 <li className="other-item">Dallas</li>
//                 <li className="other-item">Dubai</li>
//               </ul>
//             </Col>
//             <Col>
//               <ul>
//                 <li className="first-item">Las Vegas</li>
//                 <li className="other-item">London</li>
//                 <li className="other-item">New York City</li>
//                 <li className="other-item">Philadelphia</li>
//               </ul>
//             </Col>
//             <Col>
//               <ul>
//                 <li className="other-item">Shanghai</li>
//                 <li className="other-item">Sydney</li>
//                 <li className="other-item">Toronto</li>
//                 <li className="other-item">Vancouver</li>
//               </ul>
//             </Col>
//           </Row>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default CityList;
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';

const CityList = () => {
  return (
    <Container> 
      <Row>
        <Col xs={12} md={4} className="d-none d-md-block text-center mb-3 mb-md-0">
          <img 
            src="logo1.png" 
            alt="Product in a red box" 
            className="img-fluid" 
            style={{ maxWidth: '150px', height: 'auto' }} 
          />
        </Col>
        <Col xs={12} md={8}>
          <h2 className="text-center">Top Product Cities</h2>
          <Row>
            <Col xs={12} md={4}>
              <ul>
                <li className="first-item">Boston</li>
                <li className="other-item">Chicago</li>
                <li className="other-item">Dallas</li>
                <li className="other-item">Dubai</li>
              </ul>
            </Col>
            <Col xs={12} md={4}>
              <ul>
                <li className="first-item">Las Vegas</li>
                <li className="other-item">London</li>
                <li className="other-item">New York City</li>
                <li className="other-item">Philadelphia</li>
              </ul>
            </Col>
            <Col xs={12} md={4}>
              <ul>
                <li className="other-item">Shanghai</li>
                <li className="other-item">Sydney</li>
                <li className="other-item">Toronto</li>
                <li className="other-item">Vancouver</li>
              </ul>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default CityList;
