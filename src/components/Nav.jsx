import React from "react";
import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaPhone,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Nav = () => {
  const handleHomeClick = () => {
    window.location.href = "http://localhost:5173/";
  };

  const handleUserClick = () => {
    window.location.href = "http://localhost:5173/about";
  };

  const handleBriefcaseClick = () => {
    window.location.href = "http://localhost:5173/timeline";
  };

  const handlePhoneClick = () => {
    window.location.href = "http://localhost:5173/contact";
  };

  const handleLinkedinClick = () => {
    console.log("Navigate to Contact");
  };

  const handleInstagramClick = () => {
    console.log("Navigate to Contact");
  };

  return (
    <div
      className=" fixed bottom-10"
      style={{
        width: "30%",
        height: "12%",
        bottom: "10px",
        display: "flex",
        marginTop: "50px",
        marginBottom: "100px",
        marginLeft: "50px",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px", // Adjust the gap between icons
        padding: "9px",
        background: "rgba(255, 255, 255, 0.24)",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(5px)",
        borderRadius: "16px",
      }}
    >
      <div
        style={{
          width: "40px",
          height: "40px",
          padding: "10px",
          cursor: "pointer",
          border: "2px solid white",
          borderRadius: "16px",
          color: "white",
        }}
      >
        <FaHome
          onClick={handleHomeClick}
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      <div
        style={{
          width: "40px",
          height: "40px",
          padding: "10px",
          cursor: "pointer",
          border: "2px solid white",
          borderRadius: "16px",
          color: "white",
        }}
      >
        <FaUser
          onClick={handleUserClick}
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      <div
        style={{
          width: "40px",
          height: "40px",
          padding: "10px",
          cursor: "pointer",
          border: "2px solid white",
          borderRadius: "16px",
          color: "white",
        }}
      >
        <FaBriefcase
          onClick={handleBriefcaseClick}
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      <div
        style={{
          width: "40px",
          height: "40px",
          padding: "10px",
          cursor: "pointer",
          border: "2px solid white",
          borderRadius: "16px",
          color: "white",
        }}
      >
        <FaPhone
          onClick={handlePhoneClick}
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      <div
        style={{
          width: "40px",
          height: "40px",
          padding: "10px",
          cursor: "pointer",
          border: "2px solid white",
          borderRadius: "16px",
          color: "white",
        }}
      >
        <FaLinkedin
          onClick={handleLinkedinClick}
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      <div
        style={{
          width: "40px",
          height: "40px",
          padding: "10px",
          cursor: "pointer",
          border: "2px solid white",
          borderRadius: "16px",
          color: "white",
        }}
      >
        <FaInstagram
          onClick={handleInstagramClick}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </div>
  );
};

export default Nav;
