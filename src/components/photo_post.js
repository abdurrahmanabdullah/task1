// import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap'; // Import Container from react-bootstrap
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../App.css';
// const Providers = () => {
//   return (
//     <Container>
//       <Row>
//         <Col>
//           <h2 className="text-xl font-semibold mb-4">Popular provider photos</h2>
//           <Row  style={{marginBottom:"5%",}}> {/* Remove gap between columns */}
//             <Col xs="auto" className="p-0"> {/* Remove padding */}
//               <Container 
//                 className="text-gray-600 d-flex align-items-center justify-content-center"
//                 style={{ backgroundColor: 'transparent', padding: '10px', margin: '0' }}
//               >
//                 AU
//               </Container>
//             </Col>
            
//             <Col xs="auto" className="p-0"> {/* Remove padding */}
//               <Container 
//                 className="text-gray d-flex align-items-center justify-content-center"
//                 style={{ backgroundColor: 'gray', padding: '10px', margin: '0' }}
//               >
//                 TS
//               </Container>
//             </Col>
            
//             <Col xs="auto" className="p-0"> {/* Remove padding */}
//               <Container 
//                 className="text-gray d-flex align-items-center justify-content-center"
//                 style={{ backgroundColor: "gray", padding: '10px', margin: '0' }}
//               >
//                 UAE
//               </Container>
//             </Col>
//           </Row>
//          <Col> 
  
//            <Row className='container-photo'>
//             <Col>
//               <ul>
//                  <li style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
//         <img 
//           src="path_to_your_image.jpg" 
//           alt="Description of Image" 
//           style={{ width: '20px', height: '20px', marginRight: '8px' }} 
//         />
//         <span className="other-item">swf</span>
//       </li>
//                 <p className="other-item">maturef</p>
//                 <p className="other-item">tallee</p>
//                 <p className="other-item">cup s</p>
//               </ul>
//             </Col>
//             <Col>
//               <ul>
//                     <li style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
//         <img 
//           src="path_to_your_image.jpg" 
//           alt="Description of Image" 
//           style={{ width: '20px', height: '20px', marginRight: '8px' }} 
//         />
//         <span className="other-item">back</span>
//       </li>
//                 <p className="other-item">in town</p>
//                 <p className="other-item">come</p>
//                 <p className="other-item">say hi</p>
//               </ul>
//             </Col>
//             <Col>
//               <ul>
//                 <p >bj message</p>
//                 <p >queen 100 bj</p>
//                 <p >14018</p>
               
//               </ul>
//             </Col>
//           </Row>
//         </Col>
//         </Col>
//         <Col style={{marginLeft:"5%"}}>
//           <h2 className="text-xl font-semibold mb-4">Popular provider posts</h2>
//           <Row className="g-0"> {/* Remove gap between columns */}
//             <Col xs="auto" className="p-0"> {/* Remove padding */}
//               <Container 
//                 className="text-gray-600 d-flex align-items-center justify-content-center"
//                 style={{ backgroundColor: 'gray', padding: '10px', margin: '0' }}
//               >
//                 AU
//               </Container>
//             </Col>
            
//             <Col xs="auto" className="p-0"> {/* Remove padding */}
//               <Container 
//                 className="text-gray d-flex align-items-center justify-content-center"
//                 style={{ backgroundColor: 'gray', padding: '10px', margin: '0' }}
//               >
//                 TS
//               </Container>
//             </Col>
            
//             <Col xs="auto" className="p-0"> {/* Remove padding */}
//               <Container 
//                 className="text-gray-600 d-flex align-items-center justify-content-center"
//                 style={{ backgroundColor: "transparent", padding: '10px', margin: '0' }}
//               >
//                 UAE
//               </Container>
            
//             </Col>
//               <ul><li>Come see a bhaddie</li>
//               <li> New to the area</li>
//               <li>PURE BLOOD TM UNCUT 7 X VERY THICK,BEEFY</li>
//               </ul>
              
//           </Row>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Providers;
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const Providers = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={6}> {/* Adjust as needed for layout */}
          <h2 className="text-xl font-semibold mb-4">Popular provider photos</h2>
          <Row className="mb-4">
            <Col xs={12} sm={4} className="p-1"> {/* Use sm={4} to create 3 columns on medium screens and up */}
              <Button 
                variant="black" 
                className="w-100" 
                style={{ padding: '10px', backgroundColor: 'transparent', borderColor: 'gray' }}
              >
                AU
              </Button>
            </Col>
            <Col xs={12} sm={4} className="p-1">
              <Button 
                variant="outline-secondary" 
                className="w-100" 
                style={{ padding: '10px', backgroundColor: 'gray', borderColor: 'gray' }}
              >
                TS
              </Button>
            </Col>
            <Col xs={12} sm={4} className="p-1">
              <Button 
                variant="outline-secondary" 
                className="w-100" 
                style={{ padding: '10px', backgroundColor: 'gray', borderColor: 'gray' }}
              >
                UAE
              </Button>
            </Col>
          </Row>
         
          <Row className="container-photo">
            <Col xs={12} sm={4} className="p-2">
              <ul>
                <li style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                  <img 
                    src="path_to_your_image.jpg" 
                    alt="Description of Image" 
                    style={{ width: '20px', height: '20px', marginRight: '8px' }} 
                  />
                  <span className="other-item">swf</span>
                </li>
                <p className="other-item">maturef</p>
                <p className="other-item">tallee</p>
                <p className="other-item">cup s</p>
              </ul>
            </Col>
            <Col xs={12} sm={4} className="p-2">
              <ul>
                <li style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                  <img 
                    src="path_to_your_image.jpg" 
                    alt="Description of Image" 
                    style={{ width: '20px', height: '20px', marginRight: '8px' }} 
                  />
                  <span className="other-item">back</span>
                </li>
                <p className="other-item">in town</p>
                <p className="other-item">come</p>
                <p className="other-item">say hi</p>
              </ul>
            </Col>
            <Col xs={12} sm={4} className="p-2">
              <ul>
                    <li style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                  <img 
                    src="path_to_your_image.jpg" 
                    alt="Description of Image" 
                    style={{ width: '20px', height: '20px', marginRight: '8px' }} 
                  />
                  <span className="other-item">bj message</span>
                </li>
               
                <p>queen 100 bj</p>
                <p>14018</p>
              </ul>
            </Col>
          </Row>
        </Col>
        <Col xs={12} md={6}>
          <h2 className="text-xl font-semibold mb-4">Popular provider posts</h2>
          <Row className="g-0">
            <Col xs={12} sm={4} className="p-1">
              <Button 
                variant="outline-secondary" 
                className="w-100" 
                style={{ padding: '10px', backgroundColor: 'gray', borderColor: 'gray' }}
              >
                AU
              </Button>
            </Col>
            <Col xs={12} sm={4} className="p-1">
              <Button 
                variant="outline-secondary" 
                className="w-100" 
                style={{ padding: '10px', backgroundColor: 'gray', borderColor: 'gray' }}
              >
                TS
              </Button>
            </Col>
            <Col xs={12} sm={4} className="p-1">
              <Button 
                variant="black" 
                className="w-100" 
                style={{ padding: '10px', backgroundColor: 'transparent', borderColor: 'gray' }}
              >
                UAE
              </Button>
            </Col>
            <Col xs={12}>
              <ul>
                <li>Come see a bhaddie</li>
                <li>New to the area</li>
                <li>PURE BLOOD TM UNCUT 7 X VERY THICK, BEEFY</li>
              </ul>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Providers;
