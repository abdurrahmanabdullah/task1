// import React from "react";
// import { Container, Row, Col, Form, Button } from "react-bootstrap";
// import Footer from "../components/footer";
// function CreatePostPage() {
//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="text-center">
//         <div className="mt-6">
//           <img
//             src="/1.jpg"
//             alt="Scam Warning"
//             className="mt-4 w-48 h-auto mx-auto"
//           />
//         </div>
//         <p style={{ marginTop: "1%", color: "#a3a29d" }}>
//           Is this your first time posting?
//         </p>
//         <div className="mt-6">
//           <button
//             style={{
//               background: "#21b3ed",
//               borderRadius: "5%",
//               width: "200px",
//               height: "40px",
//               padding: "0",
//               fontSize: "22px",
//               color: "white",
//               cursor: "pointer",
//               fontWeight: "bolder",
//               marginBottom: "1%",
//             }}
//           >
//             Start Here
//           </button>
//         </div>
//         <p style={{ color: "#a3a29d" }}>Already have an account?</p>
//         <div className="mt-6">
//           <input
//             className="border border-gray-300 rounded py-2 px-4 mt-2 w-full max-w-xs"
//             placeholder="Email"
//             type="email"
//           />
//           <input
//             className="border border-gray-300 rounded py-2 px-4 mt-2 w-full max-w-xs"
//             placeholder="Password"
//             type="password"
//           />
//           <div className="flex items-center justify-center mt-2">
//             <img
//               alt="CAPTCHA image"
//               className="border border-gray-300 rounded"
//               height="30"
//               src="https://storage.googleapis.com/a1aa/image/aSErp0fn1hx1AKeN7IOj1rMIpFOKU3HPwDQLkvRYUeEyKOInA.jpg"
//               width="100"
//             />
//             <i className="fas fa-sync-alt text-blue-500 ml-2 cursor-pointer"></i>
//           </div>
//           <div className="mt-6">
//             <input
//               className="border border-gray-300 rounded py-2 px-4 mt-2 w-full max-w-md placeholder-gray-500 placeholder-large" // Added placeholder-large
//               placeholder="Enter code from the picture"
//               type="text"
//             />
//           </div>

//           <button
//             className="bg-orange-400 text-white py-2 px-4 rounded mt-4"
//             style={{ background: "#e68c6e", fontWeight: "bolder" }}
//           >
//             SUBMIT
//           </button>
//         </div>
//         <div>
//           <div className="mt-6">
//             <img
//               src="/scamed.jpg"
//               alt="Scam Warning"
//               className="mt-4 w-48 h-auto mx-auto"
//               style={{ marginBottom: "20px" }}
//             />
//           </div>
//           <a
//             href="#"
//             style={{
//               textDecoration: "none",
//               color: "#601bf7",
//               fontWeight: "bolder",
//               marginTop: "20px", // Added gap before the link

//             }}
//           >
//             FORGOT PASSWORD?
//           </a>
//         </div>

//         <Footer />

//         <p style={{ color: "#1d53e7" }}>Copyright ©2022 MegaPersonals.eu</p>
//       </div>
//     </div>
//   );
// }

// export default CreatePostPage;
////-------------------- add email and password

// import React, { useState } from "react";
// import { Container, Row, Col, Form, Button } from "react-bootstrap";
// import Footer from "../components/footer";
// function CreatePostPage() {
//   // State management for email and password
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   // Handle form submission
//   const handleSubmit = (event) => {
//     event.preventDefault(); // Prevent default form submission behavior
//     console.log("Email:", email);
//     console.log("Password:", password);
//     // You can add your logic here to send data to the server or process it as needed
//   };
//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="text-center">
//         <div className="mt-6">
//           <img
//             src="/1.jpg"
//             alt="Scam Warning"
//             className="mt-4 w-48 h-auto mx-auto"
//           />
//         </div>
//         <p style={{ marginTop: "1%", color: "#a3a29d" }}>
//           Is this your first time posting?
//         </p>
//         <div className="mt-6">
//           <button
//             style={{
//               background: "#21b3ed",
//               borderRadius: "5%",
//               width: "200px",
//               height: "40px",
//               padding: "0",
//               fontSize: "22px",
//               color: "white",
//               cursor: "pointer",
//               fontWeight: "bolder",
//               marginBottom: "1%",
//             }}
//           >
//             Start Here
//           </button>
//         </div>
//         <p style={{ color: "#a3a29d" }}>Already have an account?</p>
//         <div className="mt-6">
//           <input
//             className="border border-gray-300 rounded py-2 px-4 mt-2 w-full max-w-xs"
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)} // Update state on input change
//             required // Ensure the email field is required
//           />

//           <input
//             className="border border-gray-300 rounded py-2 px-4 mt-2 w-full max-w-xs"
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)} // Update state on input change
//             required // Ensure the password field is required
//           />
//           <div className="flex items-center justify-center mt-2">
//             <img
//               alt="CAPTCHA image"
//               className="border border-gray-300 rounded"
//               height="30"
//               src="https://storage.googleapis.com/a1aa/image/aSErp0fn1hx1AKeN7IOj1rMIpFOKU3HPwDQLkvRYUeEyKOInA.jpg"
//               width="100"
//             />
//             <i className="fas fa-sync-alt text-blue-500 ml-2 cursor-pointer"></i>
//           </div>
//           <div className="mt-6">
//             <input
//               className="border border-gray-300 rounded py-2 px-4 mt-2 w-full max-w-md placeholder-gray-500 placeholder-large" // Added placeholder-large
//               placeholder="Enter code from the picture"
//               type="text"
//             />
//           </div>

//           <button
//             className="bg-orange-400 text-white py-2 px-4 rounded mt-4"
//             style={{ background: "#e68c6e", fontWeight: "bolder" }}
//           >
//             SUBMIT
//           </button>
//         </div>
//         <div>
//           <div className="mt-6">
//             <img
//               src="/scamed.jpg"
//               alt="Scam Warning"
//               className="mt-4 w-48 h-auto mx-auto"
//               style={{ marginBottom: "20px" }}
//             />
//           </div>
//           <a
//             href="#"
//             style={{
//               textDecoration: "none",
//               color: "#601bf7",
//               fontWeight: "bolder",
//               marginTop: "20px", // Added gap before the link
//             }}
//           >
//             FORGOT PASSWORD?
//           </a>
//         </div>

//         <Footer />

//         <p style={{ color: "#1d53e7" }}>Copyright ©2022 MegaPersonals.eu</p>
//       </div>
//     </div>
//   );
// }

// export default CreatePostPage;
////-------------better way to handle
import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Footer from "../components/footer";

function CreatePostPage() {
  // State management for email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captchaCode, setCaptchaCode] = useState("");

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Captcha Code:", captchaCode);
    // You can add your logic here to send data to the server or process it as needed
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <div className="mt-6">
          <img
            src="/1.jpg"
            alt="Scam Warning"
            className="mt-4 w-48 h-auto mx-auto"
          />
        </div>
        <p style={{ marginTop: "1%", color: "#a3a29d" }}>
          Is this your first time posting?
        </p>
        <div className="mt-6">
          <button
            style={{
              background: "#21b3ed",
              borderRadius: "5%",
              width: "200px",
              height: "40px",
              padding: "0",
              fontSize: "22px",
              color: "white",
              cursor: "pointer",
              fontWeight: "bolder",
              marginBottom: "1%",
            }}
          >
            Start Here
          </button>
        </div>
        <p style={{ color: "#a3a29d" }}>Already have an account?</p>
        <div className="mt-6">
          <input
            className="border border-gray-300 rounded py-2 px-4 mt-2 w-full max-w-xs"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Update state on input change
            required // Ensure the email field is required
          />

          <input
            className="border border-gray-300 rounded py-2 px-4 mt-2 w-full max-w-xs"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Update state on input change
            required // Ensure the password field is required
          />
          <div className="flex items-center justify-center mt-2">
            <img
              alt="CAPTCHA image"
              className="border border-gray-300 rounded"
              height="30"
              src="https://storage.googleapis.com/a1aa/image/aSErp0fn1hx1AKeN7IOj1rMIpFOKU3HPwDQLkvRYUeEyKOInA.jpg"
              width="100"
            />
            <i className="fas fa-sync-alt text-blue-500 ml-2 cursor-pointer"></i>
          </div>
          <div className="mt-6">
            <input
              className="border border-gray-300 rounded py-2 px-4 mt-2 w-full max-w-md placeholder-gray-500"
              placeholder="Enter code from the picture"
              type="text"
              value={captchaCode}
              onChange={(e) => setCaptchaCode(e.target.value)} // Update captcha code state
              required // Ensure the captcha field is required
            />
          </div>

          <button
            className="bg-orange-400 text-white py-2 px-4 rounded mt-4"
            style={{ background: "#e68c6e", fontWeight: "bolder" }}
            onClick={handleSubmit} // Handle form submission
          >
            SUBMIT
          </button>
        </div>
        <div>
          <div className="mt-6">
            <img
              src="/scamed.jpg"
              alt="Scam Warning"
              className="mt-4 w-48 h-auto mx-auto"
              style={{ marginBottom: "20px" }}
            />
          </div>
          <a
            href="#"
            style={{
              textDecoration: "none",
              color: "#601bf7",
              fontWeight: "bolder",
              marginTop: "20px", // Added gap before the link
            }}
          >
            FORGOT PASSWORD?
          </a>
        </div>

        <Footer />

        <p style={{ color: "#1d53e7" }}>Copyright ©2022 MegaPersonals.eu</p>
      </div>
    </div>
  );
}

export default CreatePostPage;
