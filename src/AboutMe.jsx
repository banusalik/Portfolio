import React from "react";
import about from "./assets/about.png";
import skill from "./assets/skill.png";
import emailIcon from "./assets/emailIcon.png";
import Nav from "./components/Nav";

const AboutMe = () => {
  return (
    <div
      className="container bg-gradient-to-r from-indigo-500 via-purple-300 to-pink-500 w-full h-auto"
      style={{
        position: "relative",
        height: "1320px",
      }}
    >
      {/* Left container */}
      <div className="container-item border-2 border-black">
        <div
          style={{
            width: "679px",
            height: "821px",
            position: "relative",
            top: "0",
            left: "0",
            padding: "24px",
            background: "rgba(255, 255, 255, 0.24)",
            backdropFilter: "blur(5px)",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            borderRadius: "24px",
            gap: "24px",
            marginBottom: "200px",
            marginTop: "80px",
            marginRight: "700px",
          }}
        >
          {/* Photo */}
          <div>
            <img src={about} alt="About" className="w-631px h-216px gap-16px" />
          </div>
          {/* Text */}
          <div
            style={{
              width: "118px",
              height: "32px",
              fontFamily: "Epilogue",
              fontSize: "24px",
              fontWeight: "700",
              lineHeight: "32px",
              letterSpacing: "0em",
              textAlign: "left",
              marginTop: "50px",
            }}
          >
            Hey again
          </div>
          <div
            style={{
              width: "631px",
              height: "168px",
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
            will see frequently among my portfolio pieces!My skillsets also
            extend into 3D visual development, something that you will see
            frequently among my portfolio pieces!
          </div>
          <div style={{ width: "239px", height: "44px", gap: "12px" }}></div>
        </div>
      </div>
      {/* Right containers */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          position: "absolute",
          top: "79px",
          left: "803px",
        }}
      >
        {/* Container 1 */}
        <div
          className="container-item"
          style={{
            width: "529px",
            height: "534px",
            padding: "24px",
            background: "rgba(255, 255, 255, 0.24)",
            backdropFilter: "blur(5px)",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            borderRadius: "24px",
            gap: "24px",
            marginBottom: "24px",
          }}
        >
          <div
            style={{
              width: "243px",
              height: "32px",
              fontFamily: "Epilogue",
              fontSize: "24px",
              fontWeight: "700",
              lineHeight: "32px",
              letterSpacing: "0em",
              textAlign: "left",
            }}
          >
            A little bit about me
          </div>
          <div
            style={{
              width: "481px",
              height: "438px",
              fontFamily: "Epilogue",
              fontSize: "18px",
              fontWeight: "400",
              lineHeight: "28px",
              letterSpacing: "0em",
              textAlign: "left",
              marginTop: "15px",
            }}
          >
            I'm Ryan Evans, a UX designer based in London. I've always been
            passionate about technology and its potential to serve people, which
            is why I enjoy UX design so much. I find it incredibly satisfying to
            create digital experiences that are both functional and enjoyable to
            use, and I believe that good design can have a positive impact on
            people's lives. When I'm not designing, I love to explore the
            outdoors. Hiking and camping are two of my favorite activities, and
            I'm always looking for new trails to conquer or campsites to set up
            in. I'm also an amateur guitarist, and I find that making music is a
            great way to unwind after a long day of work. I'm always seeking out
            new challenges and experiences, both in my personal life and in my
            design work.
          </div>
        </div>

        {/* Container 2 */}
        <div
          className="container-item"
          style={{
            width: "529px",
            height: "291px",
            padding: "24px",
            background: "rgba(255, 255, 255, 0.24)",
            backdropFilter: "blur(5px)",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            borderRadius: "24px",
            justifyContent: "space-between",
            marginBottom: "24px",
          }}
        >
          <div
            style={{
              width: "63px",
              height: "32px",
              fontFamily: "Epilogue",
              fontSize: "24px",
              fontWeight: "700",
              lineHeight: "32px",
              letterSpacing: "0em",
              textAlign: "left",
              marginBottom: "15px",
            }}
          >
            Skills
          </div>
          <div>
            <img
              src={skill}
              alt="Skill"
              style={{ marginLeft: "50px", width: "350px", height: "auto" }}
            />
          </div>
        </div>

        {/* Container 3 */}
        <div
          className="container-item"
          style={{
            width: "529px",
            height: "344px",
            padding: "24px",
            background: "rgba(255, 255, 255, 0.24)",
            backdropFilter: "blur(5px)",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            borderRadius: "24px",
            gap: "24px",
          }}
        >
          <div
            style={{
              width: "206px",
              height: "32px",
              fontFamily: "Epilogue",
              fontSize: "24px",
              fontWeight: "700",
              lineHeight: "32px",
              letterSpacing: "0em",
              textAlign: "left",
            }}
          >
            Come and say hi!
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              marginTop: "25px",
            }}
          >
            {/* Icon 1 */}
            <div
              style={{
                width: "481px",
                height: "48px",
                padding: "12px",
                borderRadius: "8px",
                border: "1px solid black",
                gap: "8px",
                display: "flex",
                alignItems: "center",
              }}
            >
              {/* Email Icon */}
              <img
                src={emailIcon}
                alt="Email"
                style={{ width: "19.5px", height: "15px", marginRight: "8px" }}
              />
              <span
                style={{
                  fontFamily: "Epilogue",
                  fontSize: "12px",
                }}
              >
                yogeshraya@gmail.com
              </span>
            </div>

            {/* Icon 2 */}
            <div
              className="container-item"
              style={{
                width: "481px",
                height: "48px",
                padding: "12px",
                borderRadius: "8px",
                border: "1px solid black",
                gap: "8px",
                display: "flex",
                alignItems: "center",
              }}
            >
              {/* Email Icon */}
              <img
                src={emailIcon}
                alt="Email"
                style={{ width: "19.5px", height: "15px", marginRight: "8px" }}
              />
              <span
                style={{
                  fontFamily: "Epilogue",
                  fontSize: "12px",
                }}
              >
                example@example.com
              </span>
            </div>

            {/* Icon 3 */}
            <div
              className="container-item"
              style={{
                width: "481px",
                height: "48px",
                padding: "12px",
                background: "rgba(255, 255, 255, 0.24)",
                backdropFilter: "blur(5px)",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                borderRadius: "24px",
                gap: "8px",
                display: "flex",
                alignItems: "center",
              }}
            >
              {/* Email Icon */}
              <img
                src={emailIcon}
                alt="Email"
                style={{ width: "19.5px", height: "15px", marginRight: "8px" }}
              />
              <span
                style={{
                  fontFamily: "Epilogue",
                  fontSize: "12px",
                }}
              >
                contact@example.com
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Navigation */}

      <Nav
      // style={{
      //   position: "absolute",
      //   left: "50%",
      //   transform: "translateX(-50%)",
      //   bottom: "20px",
      // }}
      />
    </div>
  );
};

export default AboutMe;
