import React from "react";
import "./App.css";
import Nav from "./components/Nav.jsx";
import person from "./assets/person_icon.png";

const Home = () => {
  const handleHomeClick = () => {
    console.log("Navigate to Home");
  };

  return (
    <div className="container bg-gradient-to-r from-indigo-300 via-purple-500 to-pink-500">
      <div className="centered">
        <img
          src={person}
          alt="Person Icon"
          style={{
            width: "250px",
            height: "250px",
            marginBottom: "-80px",
          }} // Increased size of the person icon
        />
        <p
          style={{
            fontWeight: "500",
            fontSize: "20px",
          }}
        >
          Hi I'm a Person.{" "}
        </p>
      </div>
      <div
        className="main-text"
        style={{
          background:
            "linear-gradient(96.24deg, #FF7448 0%, #FF4848 52.43%, #6248FF 92.36%)",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
        onClick={handleHomeClick}
      >
        Building digital products, brands, and experience.
      </div>
      <div className="sub-text">
        I'm a Product designer based in Berlin, I specialize in UI/UX Design,
        Responsive Web Design, and Visual Development.
      </div>
      <Nav />
    </div>
  );
};

export default Home;
