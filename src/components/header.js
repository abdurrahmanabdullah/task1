
import React from 'react';
import '../App.css'; // Ensure your CSS file is imported
import { useNavigate } from 'react-router-dom';
const Header = () => {
   const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleLoginClick = () => {
    navigate('/login'); // Navigate to the login page
  };
  return (
    <div className="header-container">
      <img 
        src="logo1.png" 
        alt="Logo" 
        className="logo" 
      />
    <div className="text-center">
    <span>Skip the games,</span>
    <span>Get satisfaction</span>
  </div>
      <button className="loginsignup"onClick={handleLoginClick}>
        Login / Signup
      </button>
    </div>
  );
};

export default Header;
