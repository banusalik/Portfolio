import React, { useState } from "react";
import timeline from "./assets/timeline.png";
import curve1 from "./assets/curve1.svg";
import curve2 from "./assets/curve2.svg";
import curve3 from "./assets/curve3.svg";
import Nav from "./components/Nav";
const Timeline = () => {
  const [mode, setMode] = useState("grid");

  const handleGridModeClick = () => {
    setMode("grid");
  };

  const handleStoryModeClick = () => {
    setMode("story");
  };

  const renderGridMode = () => (
    <div className="grid-container">
      {/* Grid Mode Containers */}
      <div className="grid grid-cols-2 gap-24 mt-5 mb-20">
        {/* Container 1 */}
        <div
          className="grid-item"
          style={{
            background: "white",
            borderRadius: "12px",
            background: "rgba(255, 255, 255, 0.24)",
            backdropFilter: "blur(5px)",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          }}
        >
          {/* Content */}
          <div
            className="grid-item"
            style={{
              width: "500px",
              height: "auto",
            }}
          >
            {/* Photo */}
            <div style={{ padding: "20px", boxSizing: "border-box" }}>
              <img
                src={timeline}
                alt="Timeline"
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  borderRadius: "12",
                }}
              />
            </div>
            <div className="content" style={{ padding: "24px" }}>
              <div
                className="heading"
                style={{
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
              <div
                className="text"
                style={{
                  fontFamily: "Epilogue",
                  fontSize: "18px",
                  fontWeight: "400",
                  lineHeight: "28px",
                  letterSpacing: "0em",
                  textAlign: "left",
                  marginTop: "16px",
                }}
              >
                I'm a product designer, whose proficiency in web and mobile
                design has lead me to work on projects for large companies as
                well. My skillsets also extend into 3D visual development,
                something that you will see frequently among my portfolio
                pieces!
              </div>
            </div>
            <div
              className="boxes"
              style={{
                display: "flex",
                gap: "12px",
                marginTop: "1px",
                alignItems: "center",
                marginBottom: "20px",
                marginLeft: "20px", // Align boxes vertically
              }}
            >
              {/* Small Box 1 */}
              <div
                className="box"
                style={{
                  backgroundColor: "#FFFFFF",
                  width: "129px",
                  height: "36px",
                  padding: "12px",
                  paddingBottom: "12px",
                  borderRadius: "8px",
                  border: "1px solid #FFFFFF80",
                }}
              >
                UIUX Design
              </div>
              {/* Small Box 2 */}
              <div
                className="box"
                style={{
                  backgroundColor: "#FFFFFF",
                  width: "129px",
                  height: "36px",
                  padding: "12px",
                  paddingBottom: "12px",
                  borderRadius: "8px",
                  border: "1px solid #FFFFFF80",
                }}
              >
                UIUX Design
              </div>
            </div>
          </div>
        </div>
        {/* Container 2 */}
        <div
          className="grid-item"
          style={{
            background: "#E4CDF4",
            borderRadius: "12px",
            background: "rgba(255, 255, 255, 0.24)",
            backdropFilter: "blur(5px)",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          }}
        >
          {/* Content */}
          <div
            className="grid-item"
            style={{
              width: "500px",
              height: "auto",
            }}
          >
            {/* Photo */}
            <div style={{ padding: "20px", boxSizing: "border-box" }}>
              <img
                src={timeline}
                alt="Timeline"
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  borderRadius: "12",
                }}
              />
            </div>
            <div className="content" style={{ padding: "24px" }}>
              <div
                className="heading"
                style={{
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
              <div
                className="text"
                style={{
                  fontFamily: "Epilogue",
                  fontSize: "18px",
                  fontWeight: "400",
                  lineHeight: "28px",
                  letterSpacing: "0em",
                  textAlign: "left",
                  marginTop: "16px",
                }}
              >
                I'm a product designer, whose proficiency in web and mobile
                design has lead me to work on projects for large companies as
                well. My skillsets also extend into 3D visual development,
                something that you will see frequently among my portfolio
                pieces!
              </div>
            </div>
            <div
              className="boxes"
              style={{
                display: "flex",
                gap: "12px",
                marginTop: "1px",
                alignItems: "center",
                marginBottom: "20px",
                marginLeft: "20px", // Align boxes vertically
              }}
            >
              {/* Small Box 1 */}
              <div
                className="box"
                style={{
                  backgroundColor: "#FFFFFF",
                  width: "129px",
                  height: "36px",
                  padding: "12px",
                  paddingBottom: "12px",
                  borderRadius: "8px",
                  border: "1px solid #FFFFFF80",
                }}
              >
                UIUX Design
              </div>
              {/* Small Box 2 */}
              <div
                className="box"
                style={{
                  backgroundColor: "#FFFFFF",
                  width: "129px",
                  height: "36px",
                  padding: "12px",
                  paddingBottom: "12px",
                  borderRadius: "8px",
                  border: "1px solid #FFFFFF80",
                }}
              >
                UIUX Design
              </div>
            </div>
          </div>
        </div>
        {/* Container 3 */}
        <div
          className="grid-item"
          style={{
            background: "white",
            borderRadius: "12px",
            background: "rgba(255, 255, 255, 0.24)",
            backdropFilter: "blur(5px)",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          }}
        >
          {/* Content */}
          <div
            className="grid-item"
            style={{
              width: "500px",
              height: "auto",
            }}
          >
            {/* Photo */}
            <div style={{ padding: "20px", boxSizing: "border-box" }}>
              <img
                src={timeline}
                alt="Timeline"
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  borderRadius: "12",
                }}
              />
            </div>
            <div className="content" style={{ padding: "24px" }}>
              <div
                className="heading"
                style={{
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
              <div
                className="text"
                style={{
                  fontFamily: "Epilogue",
                  fontSize: "18px",
                  fontWeight: "400",
                  lineHeight: "28px",
                  letterSpacing: "0em",
                  textAlign: "left",
                  marginTop: "16px",
                }}
              >
                I'm a product designer, whose proficiency in web and mobile
                design has lead me to work on projects for large companies as
                well. My skillsets also extend into 3D visual development,
                something that you will see frequently among my portfolio
                pieces!
              </div>
            </div>
            <div
              className="boxes"
              style={{
                display: "flex",
                gap: "12px",
                marginTop: "1px",
                alignItems: "center",
                marginBottom: "20px",
                marginLeft: "20px", // Align boxes vertically
              }}
            >
              {/* Small Box 1 */}
              <div
                className="box"
                style={{
                  backgroundColor: "#FFFFFF",
                  width: "129px",
                  height: "36px",
                  padding: "12px",
                  paddingBottom: "12px",
                  borderRadius: "8px",
                  border: "1px solid #FFFFFF80",
                }}
              >
                UIUX Design
              </div>
              {/* Small Box 2 */}
              <div
                className="box"
                style={{
                  backgroundColor: "#FFFFFF",
                  width: "129px",
                  height: "36px",
                  padding: "12px",
                  paddingBottom: "12px",
                  borderRadius: "8px",
                  border: "1px solid #FFFFFF80",
                }}
              >
                UIUX Design
              </div>
            </div>
          </div>
        </div>
        {/* Container 4 */}
        <div
          className="grid-item"
          style={{
            background: "white",
            borderRadius: "12px",
            background: "rgba(255, 255, 255, 0.24)",
            backdropFilter: "blur(5px)",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          }}
        >
          {/* Content */}
          <div
            className="grid-item"
            style={{
              width: "500px",
              height: "auto",
            }}
          >
            {/* Photo */}
            <div style={{ padding: "20px", boxSizing: "border-box" }}>
              <img
                src={timeline}
                alt="Timeline"
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  borderRadius: "12",
                }}
              />
            </div>
            <div className="content" style={{ padding: "24px" }}>
              <div
                className="heading"
                style={{
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
              <div
                className="text"
                style={{
                  fontFamily: "Epilogue",
                  fontSize: "18px",
                  fontWeight: "400",
                  lineHeight: "28px",
                  letterSpacing: "0em",
                  textAlign: "left",
                  marginTop: "16px",
                }}
              >
                I'm a product designer, whose proficiency in web and mobile
                design has lead me to work on projects for large companies as
                well. My skillsets also extend into 3D visual development,
                something that you will see frequently among my portfolio
                pieces!
              </div>
            </div>
            <div
              className="boxes"
              style={{
                display: "flex",
                gap: "12px",
                marginTop: "1px",
                alignItems: "center",
                marginBottom: "20px",
                marginLeft: "20px", // Align boxes vertically
              }}
            >
              {/* Small Box 1 */}
              <div
                className="box"
                style={{
                  backgroundColor: "#FFFFFF",
                  width: "129px",
                  height: "36px",
                  padding: "12px",
                  paddingBottom: "12px",
                  borderRadius: "8px",
                  border: "1px solid #FFFFFF80",
                }}
              >
                UIUX Design
              </div>
              {/* Small Box 2 */}
              <div
                className="box"
                style={{
                  backgroundColor: "#FFFFFF",
                  width: "129px",
                  height: "36px",
                  padding: "6px",
                  paddingBottom: "12px",
                  borderRadius: "8px",
                  border: "1px solid #FFFFFF80",
                }}
              >
                UIUX Design
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderStoryMode = () => (
    <div className="story-container">
      {/* Story Mode Containers */}
      <div
        className="story-item-1"
        style={{
          width: "900px",
          height: "368px",
          position: "relative", // Add position relative
          left: "-200px", // Adjusted to shift to the left
          margin: "20px auto", // Center horizontally
          background: "rgba(255, 255, 255, 0.24)",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          borderRadius: "24px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "32px",
          padding: "24px",
          backdropFilter: "blur(5px)",
        }}
      >
        {/* Photo */}
        <div>
          <img
            src={timeline}
            alt="Timeline"
            style={{
              width: "350px",
              height: "320px",
              borderRadius: "12px",
            }}
          />
        </div>
        <div className="content" style={{ width: "470px", gap: "16px" }}>
          <div
            className="heading"
            style={{
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
          <div
            className="text"
            style={{
              fontFamily: "Epilogue",
              fontSize: "18px",
              fontWeight: "400",
              lineHeight: "28px",
              letterSpacing: "0em",
              textAlign: "left",
            }}
          >
            I'm a product designer, whose proficiency in web and mobile design
            has lead me to work on projects for large companies as well. My
            skillsets also extend into 3D visual development, something that you
            will see frequently among my portfolio pieces!
          </div>
          <div
            className="boxes"
            style={{ display: "flex", gap: "12px", alignItems: "center" }}
          ></div>
          {/* View Detail button */}
          <button class="hover:brightness-110 hover:animate-pulse font-bold py-3 px-6 rounded-full bg-gradient-to-r from-purple-200 to-purple-500 text-white mt-10">
            Click on me
          </button>
        </div>
      </div>
      <div className="image-between-containers">
        <img
          src={curve1}
          alt="curve1"
          style={{
            width: "300px",
            height: "200px",
            marginLeft: "660px",
            marginTop: "-100px",
            marginBottom: "-20px",
          }}
        />
      </div>

      <div
        className="story-item"
        style={{
          width: "900px",
          height: "368px",
          position: "relative",
          right: "-200px",
          padding: "24px",
          borderRadius: "24px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          margin: "20px auto",
          gap: "32px",
          background: "rgba(255, 255, 255, 0.24)",
          backdropFilter: "blur(5px)",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          // Added gap between containers
        }}
      >
        {/* Photo */}
        <div>
          <img
            src={timeline}
            alt="Timeline"
            style={{
              width: "350px",
              height: "320px",
              borderRadius: "12px",
            }}
          />
        </div>
        <div className="content" style={{ width: "470px", gap: "16px" }}>
          <div
            className="heading"
            style={{
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
          <div
            className="text"
            style={{
              fontFamily: "Epilogue",
              fontSize: "18px",
              fontWeight: "400",
              lineHeight: "28px",
              letterSpacing: "0em",
              textAlign: "left",
            }}
          >
            I'm a product designer, whose proficiency in web and mobile design
            has lead me to work on projects for large companies as well. My
            skillsets also extend into 3D visual development, something that you
            will see frequently among my portfolio pieces!
          </div>
          <div
            className="boxes"
            style={{
              display: "flex",
              gap: "12px",
              alignItems: "center",
            }}
          ></div>
          {/* View Detail button */}
          <button class="hover:brightness-110 hover:animate-pulse font-bold py-3 px-6 rounded-full bg-gradient-to-r from-purple-200 to-purple-500 text-white mt-10">
            Click on me
          </button>
        </div>
      </div>
      <div className="image-between-containers">
        <img
          src={curve2}
          alt="curve1"
          style={{
            width: "300px",
            height: "200px",
            marginLeft: "29px",
            marginTop: "-90px",
            marginBottom: "-20px",
          }}
        />
      </div>
      <div
        className="story-item"
        style={{
          width: "900px",
          height: "368px",
          position: "relative",
          left: "-200px",
          padding: "24px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          margin: "20px",
          gap: "32px",
          background: "rgba(255, 255, 255, 0.24)",
          backdropFilter: "blur(5px)",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          // Added gap between containers
        }}
      >
        {/* Photo */}
        <div>
          <img
            src={timeline}
            alt="Timeline"
            style={{
              width: "350px",
              height: "320px",
              borderRadius: "12px",
            }}
          />
        </div>
        <div className="content" style={{ width: "470px", gap: "16px" }}>
          <div
            className="heading"
            style={{
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
          <div
            className="text"
            style={{
              fontFamily: "Epilogue",
              fontSize: "18px",
              fontWeight: "400",
              lineHeight: "28px",
              letterSpacing: "0em",
              textAlign: "left",
            }}
          >
            I'm a product designer, whose proficiency in web and mobile design
            has lead me to work on projects for large companies as well. My
            skillsets also extend into 3D visual development, something that you
            will see frequently among my portfolio pieces!
          </div>
          <div
            className="boxes"
            style={{
              display: "flex",
              gap: "12px",
              alignItems: "center",
            }}
          ></div>
          {/* View Detail button */}
          <button class="hover:brightness-110 hover:animate-pulse font-bold py-3 px-6 rounded-full bg-gradient-to-r from-purple-200 to-purple-500 text-white mt-10">
            Click on me
          </button>
        </div>
      </div>
      <div className="image-between-containers">
        <img
          src={curve3}
          alt="curve1"
          style={{
            width: "300px",
            height: "200px",
            marginLeft: "650px",
            marginTop: "-100px",
            marginBottom: "-20px",
          }}
        />
      </div>
      <div
        className="story-item"
        style={{
          width: "900px",
          height: "368px",
          position: "relative",
          right: "-200px",
          padding: "24px",
          borderRadius: "24px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          margin: "20px",
          gap: "32px",
          background: "rgba(255, 255, 255, 0.24)",
          backdropFilter: "blur(5px)",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          // Added gap between containers
        }}
      >
        {/* Photo */}
        <div>
          <img
            src={timeline}
            alt="Timeline"
            style={{
              width: "350px",
              height: "320px",
              borderRadius: "12px",
            }}
          />
        </div>
        <div className="content" style={{ width: "470px", gap: "16px" }}>
          <div
            className="heading"
            style={{
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
          <div
            className="text"
            style={{
              fontFamily: "Epilogue",
              fontSize: "18px",
              fontWeight: "400",
              lineHeight: "28px",
              letterSpacing: "0em",
              textAlign: "left",
            }}
          >
            I'm a product designer, whose proficiency in web and mobile design
            has lead me to work on projects for large companies as well. My
            skillsets also extend into 3D visual development, something that you
            will see frequently among my portfolio pieces!
          </div>
          <div
            className="boxes"
            style={{
              display: "flex",
              gap: "12px",
              alignItems: "center",
            }}
          ></div>
          {/* View Detail button */}
          <button class="hover:brightness-110 hover:animate-pulse font-bold py-3 px-6 rounded-full bg-gradient-to-r from-purple-200 to-purple-500 text-white mt-10">
            Click on me
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="container bg-gradient-to-r from-indigo-500 via-purple-300 to-pink-500 w-full h-auto">
      <div
        className="container"
        style={{ position: "relative", marginBottom: "-550px" }}
      >
        {/* My Work */}
        <div
          className="my-work"
          style={{
            fontFamily: "Epilogue",
            fontSize: "50px",
            fontWeight: "700",
            lineHeight: "42px",
            letterSpacing: "0em",
            textAlign: "left",
            position: "absolute",
            top: "20px",
            left: "20px",
            background:
              "linear-gradient(96.24deg, #FF7448 0%, #FF4848 52.43%, #6248FF 92.36%)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          My Work
        </div>

        {/* Text */}
        <div
          className="description"
          style={{
            fontFamily: "Epilogue",
            fontSize: "18px",
            fontWeight: "400",
            lineHeight: "28px",
            letterSpacing: "0em",
            textAlign: "left",
            position: "absolute",
            top: "70px",
            left: "20px",
            width: "699px",
            height: "56px",
          }}
        >
          It has been an absolute pleasure to put my heart and soul into these
          projects. While you're here, browse these projects.
        </div>

        {/* Buttons */}
        <div
          className="buttons"
          style={{ position: "absolute", top: "20px", right: "20px" }}
        >
          <button
            className="grid-mode"
            style={{
              width: "200px",
              height: "50px",
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #FFFFFF",
              backgroundColor: mode === "grid" ? "#FFFFFF" : "transparent",
              color: mode === "grid" ? "#000000" : "#FFFFFF",
              marginRight: "16px",
            }}
            onClick={handleGridModeClick}
          >
            Grid Mode
          </button>
          <button
            className="story-mode"
            style={{
              width: "200px",
              height: "50px",
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #FFFFFF",
              backgroundColor: mode === "story" ? "#FFFFFF" : "transparent",
              color: mode === "story" ? "#000000" : "#FFFFFF",
            }}
            onClick={handleStoryModeClick}
          >
            Story Mode
          </button>
        </div>
      </div>

      {mode === "grid" ? renderGridMode() : renderStoryMode()}
      <Nav />
    </div>
  );
};

export default Timeline;
