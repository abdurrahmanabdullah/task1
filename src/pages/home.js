// import React, { useState } from "react";
// import "../App.css";
// import { Link } from "react-router-dom";
// import { Container, Row, Col, Form, Button, Modal } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Footer from "../components/footer";

// const Home = () => {
//   const [showLocationPopup, setShowLocationPopup] = useState(false);

//   const handleCloseLocationPopup = () => setShowLocationPopup(false);
//   const handleOpenLocationPopup = () => setShowLocationPopup(true);
//   return (
//     <Container
//       style={{
//         maxWidth: "50%",
//         marginLeft: "auto",
//         marginRight: "auto",
//         padding: "0 70px",
//         paddingTop: "2%",
//       }}
//     >
//       <Row className="justify-content-center">
//         <Col md={8} lg={6} style={{ padding: "0 15px" }}>
//           <div className="logo-container text-center mb-4">
//             <img
//               src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-Hh5RPsKhtBPsWCFSiEKnUJ6x/user-8qgiVpCV0U0b7zDjfFInHgjl/img-I7L8aUvOUa2Q8ErmIlkSRDvJ.png?st=2024-09-16T08%3A48%3A09Z&se=2024-09-16T10%3A48%3A09Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-09-15T23%3A35%3A43Z&ske=2024-09-16T23%3A35%3A43Z&sks=b&skv=2024-08-04&sig=PU1kzhqfbq0XBlwzCkFENZHKTVDNSOOnqC8xAa6a/JU%3D"
//               alt="Website Logo"
//               className="logo"
//               style={{ maxWidth: "100%" }}
//             />
//             <div style={{ textAlign: "left" }}>
//               <Col
//                 xs={12}
//                 md={6}
//                 className="d-flex flex-column align-items-center mb-3"
//               >
//                 <Link to="/create-post">
//                   {" "}
//                   <button
//                     style={{
//                       background: "#21b3ed",
//                       borderRadius: "5%",
//                       width: "200px",
//                       height: "40px",
//                       padding: "0",
//                       fontSize: "22px",
//                       color: "white",
//                       cursor: "pointer",
//                       fontWeight: "bolder",
//                       marginBottom: "4%",
//                     }}
//                   >
//                     Post Now
//                   </button>
//                 </Link>
//                 <div style={{ marginLeft: "10%", marginBottom: "5%" }}>
//                   {" "}
//                   <h5 style={{ color: "#800a20" }}>Select location</h5>
//                   <a
//                     style={{ color: "#827051" }}
//                     href="#"
//                     className="provider-box w-50 mb-3"
//                     onClick={handleOpenLocationPopup}
//                   >
//                     Change Location
//                   </a>
//                 </div>

//                 <div className="mt-6">
//                   <img
//                     src="/1.1.jpg"
//                     alt="Scam Warning"
//                     className="mt-6 w-96 h-auto mx-auto"
//                   />
//                 </div>
//               </Col>
//             </div>
//           </div>
//         </Col>
//         <Col md={8} lg={6}>
//           <div className="text-center md:text-left">
//             <div className="mt-6">
//               <img
//                 src="/1.jpg"
//                 alt="Scam Warning"
//                 className="mt-4 w-48 h-auto mx-auto"
//               />
//             </div>
//             <h1 style={{ color: "lightgreen" }}>MEET NOW</h1>

//             <div>
//               <p style={{ color: "#a8a032" }}>
//                 MegaPersonals is restricted to persons 18 years of age or older*
//               </p>
//             </div>

//             {/* Button Section (Centered and Aligned) */}
//             <Row>
//               <Col
//                 xs={12}
//                 md={6}
//                 className="mx-auto"
//                 style={{ marginTop: "20px" }}
//               >
//                 <div className="provider-box w-100 mb-3 provider-row">
//                   <div
//                     style={{
//                       backgroundColor: "#b32a27",
//                       padding: "1rem",
//                       color: "white",
//                       borderRadius: "0.25rem",
//                     }}
//                   >
//                     W seek M
//                   </div>
//                 </div>
//                 <div className="provider-box w-100 mb-3 provider-row">
//                   <div
//                     style={{
//                       backgroundColor: "#de8f10", // Yellow background for the second row
//                       padding: "1rem",
//                       color: "black", // Black text for better contrast
//                       borderRadius: "0.25rem",
//                     }}
//                   >
//                     M seek W
//                   </div>
//                 </div>
//                 <div className="provider-box w-100 mb-3 provider-row">
//                   <div
//                     style={{
//                       backgroundColor: "#edd6b2", // Light yellow for the third row
//                       padding: "1rem",
//                       color: "black",
//                       borderRadius: "0.25rem",
//                     }}
//                   >
//                     M seek M
//                   </div>
//                 </div>
//                 <div className="provider-box w-100 mb-3 provider-row">
//                   <div
//                     style={{
//                       backgroundColor: "#6e5123", // Maroon for the fourth row
//                       padding: "1rem",
//                       color: "white",
//                       borderRadius: "0.25rem",
//                     }}
//                   >
//                     W seek W
//                   </div>
//                 </div>
//                 <div className="provider-box w-100 mb-3 provider-row">
//                   <div
//                     style={{
//                       backgroundColor: "#b0afac", // Teal for the last row
//                       padding: "1rem",
//                       color: "white",
//                       borderRadius: "0.25rem",
//                     }}
//                   >
//                     Trans
//                   </div>
//                 </div>
//               </Col>
//             </Row>

//             {/* Footer Section */}
//             <p className="text-gray-600 mt-4">
//               MegaPersonals is a classifieds service for people wanting to{" "}
//               <span style={{ color: "#4dc92e" }}>MEET NOW!</span>
//             </p>
//             <Footer />
//             <p className="text-gray-500 mt-4">
//               Copyright ©2022 MegaPersonals.eu
//             </p>
//           </div>
//         </Col>
//       </Row>
//       <hr style={{ border: "1px solid #ccc", margin: "20px 0" }} />

//       {/* Location Popup */}
//       <Modal show={showLocationPopup} onHide={handleCloseLocationPopup}>
//         <Modal.Header closeButton>
//           <Modal.Title>Choose a Location</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Row>
//             <Col xs={12} md={6} className="location-buttons">
//               <div className="provider-box w-100 mb-3">
//                 <button className="location-button">Canada</button>
//               </div>
//               <div className="provider-box w-100 mb-3">
//                 <button className="location-button">United States</button>
//               </div>
//               <div className="provider-box w-100 mb-3">
//                 <button className="location-button">Europe</button>
//               </div>
//               <div className="provider-box w-100 mb-3">
//                 <button className="location-button">Oceania</button>
//               </div>
//             </Col>
//           </Row>
//         </Modal.Body>
//       </Modal>
//     </Container>
//   );
// };

// export default Home;
//////--------------
import React, { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { Container, Row, Col, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/footer";

const Home = () => {
  const [showLocationPopup, setShowLocationPopup] = useState(false);

  const handleCloseLocationPopup = () => setShowLocationPopup(false);
  const handleOpenLocationPopup = () => setShowLocationPopup(true);

  return (
    <Container
      style={{
        maxWidth: "50%",
        marginLeft: "auto",
        marginRight: "auto",
        padding: "0 20px",
        paddingTop: "2%",
      }}
    >
      <Row className="justify-content-center">
        <Col md={8} lg={6} style={{ padding: "0 15px" }}>
          <div className="logo-container text-center mb-4">
            <img
              src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-Hh5RPsKhtBPsWCFSiEKnUJ6x/user-8qgiVpCV0U0b7zDjfFInHgjl/img-I7L8aUvOUa2Q8ErmIlkSRDvJ.png?st=2024-09-16T08%3A48%3A09Z&se=2024-09-16T10%3A48%3A09Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-09-15T23%3A35%3A43Z&ske=2024-09-16T23%3A35%3A43Z&sks=b&skv=2024-08-04&sig=PU1kzhqfbq0XBlwzCkFENZHKTVDNSOOnqC8xAa6a/JU%3D"
              alt="Website Logo"
              className="logo"
              style={{ maxWidth: "100%", height: "auto" }}
            />
            <div style={{ textAlign: "left" }}>
              <Col
                xs={12}
                md={6}
                className="d-flex flex-column align-items-center mb-3"
              >
                <Link to="/create-post">
                  <button
                    style={{
                      background: "#21b3ed",
                      borderRadius: "5%",
                      width: "100%",
                      maxWidth: "200px",
                      height: "40px",
                      padding: "0",
                      fontSize: "22px",
                      color: "white",
                      cursor: "pointer",
                      fontWeight: "bolder",
                      marginBottom: "4%",
                    }}
                  >
                    Post Now
                  </button>
                </Link>
                <div style={{ marginLeft: "10%", marginBottom: "5%" }}>
                  <h5 style={{ color: "#800a20", whiteSpace: "nowrap" }}>
                    Select location
                  </h5>
                  <a
                    style={{ color: "#827051", whiteSpace: "nowrap" }}
                    href="#"
                    className="provider-box w-50 mb-3"
                    onClick={handleOpenLocationPopup}
                  >
                    Change Location
                  </a>
                </div>

                <div className="mt-6">
                  <img
                    src="/1.1.jpg"
                    alt="Scam Warning"
                    className="mt-6 w-100 h-auto mx-auto"
                  />
                </div>
              </Col>
            </div>
          </div>
        </Col>
        <Col md={8} lg={6}>
          <div className="text-center md:text-left">
            <div className="mt-6">
              <img
                src="/1.jpg"
                alt="Scam Warning"
                className="mt-4 w-100 h-auto mx-auto"
              />
            </div>
            <h1 style={{ color: "lightgreen", whiteSpace: "nowrap" }}>
              MEET NOW
            </h1>
            <p
              style={{
                color: "#a8a032",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "block",
              }}
            >
              MegaPersonals is restricted to persons 18 years of age or older*
            </p>
            <div></div>

            {/* Button Section (Centered and Aligned) */}
            <Row>
              <Col
                xs={12}
                md={6}
                className="mx-auto"
                style={{ marginTop: "20px" }}
              >
                {["W seek M", "M seek W", "M seek M", "W seek W", "Trans"].map(
                  (text, index) => (
                    <div
                      className="provider-box w-100 mb-3 provider-row"
                      key={index}
                    >
                      <div
                        style={{
                          backgroundColor:
                            index === 0
                              ? "#b32a27"
                              : index === 1
                              ? "#de8f10"
                              : index === 2
                              ? "#edd6b2"
                              : index === 3
                              ? "#6e5123"
                              : "#b0afac",
                          padding: "1rem",
                          color: index === 0 || index === 3 ? "white" : "black",
                          borderRadius: "0.25rem",
                        }}
                      >
                        {text}
                      </div>
                    </div>
                  )
                )}
              </Col>
            </Row>

            {/* Footer Section */}
            <p className="text-gray-600 mt-4">
              <span style={{ whiteSpace: "nowrap" }}>
                MegaPersonals is a classifieds service for people wanting to
              </span>
              <br />
              <span style={{ color: "#4dc92e" }}>MEET NOW!</span>
            </p>
            <Footer />
            <p className="text-gray-500 mt-4">
              Copyright ©2022 MegaPersonals.eu
            </p>
          </div>
        </Col>
      </Row>
      <hr style={{ border: "1px solid #ccc", margin: "20px 0" }} />

      {/* Location Popup */}
      <Modal show={showLocationPopup} onHide={handleCloseLocationPopup}>
        <Modal.Header closeButton>
          <Modal.Title>Choose a Location</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col xs={12} md={6} className="location-buttons">
              {["Canada", "United States", "Europe", "Oceania"].map(
                (location, index) => (
                  <div className="provider-box w-100 mb-3" key={index}>
                    <button className="location-button">{location}</button>
                  </div>
                )
              )}
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default Home;
