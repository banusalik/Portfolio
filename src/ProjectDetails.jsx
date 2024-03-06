import React from "react";
import timeline from "./assets/timeline.png";
import { MdCancel } from "react-icons/md";

const ProjectDetails = () => {
  return (
    <div
      style={{
        background: "linear-gradient(to right, #6366F1, #D53F8C, #F6D860)",
        minHeight: "100vh", // Ensures that the gradient covers the entire viewport height
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="container"
        style={{
          width: "auto",
          height: "auto",
          position: "relative",
          padding: "20px",
          gap: "16px",
          marginTop: "50px",
          background: "rgba(255, 255, 255, 0.24)",
          backdropFilter: "blur(5px)",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* Cancel Icon */}
        <div
          className="cancel-icon"
          style={{
            margin: "20px",
            width: "36px",
            height: "36px",
            padding: "12px",
            borderRadius: "60px",
            position: "absolute",
            top: "-24px",
            right: "-24px",
            zIndex: "1",
            background: "#FFFFFF",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          {/* Your cancel icon component or image here */}
          <MdCancel />
        </div>

        {/* Timeline Image */}
        <img
          src={timeline}
          alt="Timeline"
          style={{
            width: "832px",
            height: "450px",
            borderRadius: "12px",
          }}
        />

        {/* Presentation App Headline */}
        <div
          className="headline"
          style={{
            width: "hug(215px)",
            height: "hug(32px)",
            gap: "8px",
            fontFamily: "Epilogue",
            fontSize: "24px",
            fontWeight: "700",
            lineHeight: "32px",
            letterSpacing: "0em",
            textAlign: "left",
          }}
        >
          Presentation App
        </div>

        {/* Presentation App Text */}
        <div
          className="text"
          style={{
            width: "832px",
            height: "392px",
            fontFamily: "Epilogue",
            fontSize: "18px",
            fontWeight: "400",
            lineHeight: "28px",
            letterSpacing: "0em",
            textAlign: "left",
          }}
        >
          When it comes to creating a successful presentation, having a
          well-designed app can make all the difference. A great presentation
          app design not only looks visually appealing, but also makes it easy
          for users to create, edit, and present their content. The key to a
          successful presentation app design is to strike a balance between
          functionality and aesthetics. The app should have all the features and
          tools necessary to create a compelling presentation, but should also
          be intuitive and easy to navigate. One important aspect of
          presentation app design is the ability to customize the look and feel
          of the presentation. Users should be able to choose from a range of
          templates, themes, fonts, and color schemes to create a presentation
          that reflects their personal style and branding. Another important
          consideration is the ability to collaborate and share presentations
          with others. The app should allow users to easily share their
          presentations with colleagues or clients, as well as collaborate with
          others in real-time.
        </div>

        {/* Timeline Image */}
        <img
          src={timeline}
          alt="Timeline"
          style={{
            width: "832px",
            height: "450px",
            borderRadius: "12px",
            marginTop: "-100px",
          }}
        />

        {/* Text */}
        <div
          className="text"
          style={{
            width: "832px",
            height: "84px",
            fontFamily: "Epilogue",
            fontSize: "18px",
            fontWeight: "400",
            lineHeight: "28px",
            letterSpacing: "0em",
            textAlign: "left",
          }}
        >
          The end result is a user-friendly electric bicycle that makes it easy
          for riders to enjoy the benefits of e-bikes without feeling
          overwhelmed by technology. With VoltBike, riding smarter has never
          been easier!
        </div>

        {/* Timeline Image */}
        <img
          src={timeline}
          alt="Timeline"
          style={{
            width: "832px",
            height: "450px",
            borderRadius: "12px",
          }}
        />

        {/* Text */}
        <div
          className="text"
          style={{
            width: "832px",
            height: "84px",
            fontFamily: "Epilogue",
            fontSize: "18px",
            fontWeight: "400",
            lineHeight: "28px",
            letterSpacing: "0em",
            textAlign: "left",
          }}
        >
          The end result is a user-friendly electric bicycle that makes it easy
          for riders to enjoy the benefits of e-bikes without feeling
          overwhelmed by technology. With VoltBike, riding smarter has never
          been easier!
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
