import React from "react";
import about from "./assets/about.png";
import skill from "./assets/skill.png";
import emailIcon from "./assets/emailIcon.png";
import Nav from "./components/Nav";

const AboutMe = () => {
  return (
    <div className="container bg-gradient-to-r from-indigo-500 via-purple-300 to-pink-500 w-full h-auto p-12 ">
      <div className="grid grid-cols-2 gap-4">
        {/* Left container */}
        <div className="container-item col-span-1 bg-white bg-opacity-25 backdrop-blur-lg shadow-lg border-2 border-gray rounded-lg p-4 ">
          <div className="w-631px h-465px mb-4">
            <img
              src={about}
              alt="About"
              className="w-full h-full object-cover"
            />
          </div>
          <div
            className="text-lg font-semibold mb-2"
            style={{
              fontFamily: "Epilogue",
            }}
          >
            Hey again
          </div>
          <div
            // className="text-base "
            style={{
              fontFamily: "Epilogue",
            }}
          >
            I'm a product designer, whose proficiency in web and mobile design
            has lead me to work on projects for large companies as well. My
            skillsets also extend into 3D visual development, something that you
            will see frequently among my portfolio pieces!My skillsets also
            extend into 3D visual development, something that you will see
            frequently among my portfolio pieces!
          </div>
        </div>

        {/* Right containers */}
        <div className="container-item col-span-1 grid grid-rows-3 gap-4">
          {/* Container 1 */}
          <div className="rounded-lg bg-white bg-opacity-25 backdrop-blur-lg shadow-lg border-2 border-white rounded-lg p-4">
            <div
              className="text-lg font-semibold mb-2"
              style={{
                fontFamily: "Epilogue",
              }}
            >
              A little bit about me
            </div>
            <div
              className="text-base"
              style={{
                fontFamily: "Epilogue",
              }}
            >
              I'm Ryan Evans, a UX designer based in London. I've always been
              passionate about technology and its potential to serve people,
              which is why I enjoy UX design so much. I find it incredibly
              satisfying to create digital experiences that are both functional
              and enjoyable to use, and I believe that good design can have a
              positive impact on people's lives. When I'm not designing, I love
              to explore the outdoors. Hiking and camping are two of my favorite
              activities, and I'm always looking for new trails to conquer or
              campsites to set up in. I'm also an amateur guitarist, and I find
              that making music is a great way to unwind after a long day of
              work. I'm always seeking out new challenges and experiences, both
              in my personal life and in my design work.
            </div>
          </div>

          {/* Container 2 */}
          <div className="rounded-lg bg-white bg-opacity-25 backdrop-blur-lg shadow-lg border-2 border-gray rounded-lg p-4">
            <div
              className="text-lg  font-bold mb-2"
              style={{
                fontFamily: "Epilogue",
              }}
            >
              Skills
            </div>
            <div>
              <img src={skill} alt="Skill" className="w-full" />
            </div>
          </div>

          {/* Container 3 */}
          <div className="rounded-lg bg-white bg-opacity-25 backdrop-blur-lg shadow-lg border-2 border-gray rounded-lg p-4">
            <div
              className="text-lg font-bold mb-2"
              style={{
                fontFamily: "Epilogue",
              }}
            >
              Come and say hi!
            </div>
            <div className="grid grid-rows-3 gap-2">
              <div
                className="border-1 border-gray rounded-lg bg-white bg-opacity-25 backdrop-blur-lg shadow-lg  p-2 flex items-center"
                style={{
                  fontFamily: "Epilogue",
                }}
              >
                <img
                  src={emailIcon}
                  alt="Email"
                  className="w-4 h-4 mr-2"
                  style={{
                    fontFamily: "Epilogue",
                  }}
                />
                <span>yogeshraya@gmail.com</span>
              </div>
              <div
                className="border-1 border-gray rounded-lg bg-white bg-opacity-25 backdrop-blur-lg shadow-lg p-2 flex items-center"
                style={{
                  fontFamily: "Epilogue",
                }}
              >
                <img src={emailIcon} alt="Email" className="w-4 h-4 mr-2" />
                <span>example@example.com</span>
              </div>
              <div className="border-2 border-gray rounded-lg bg-white bg-opacity-25 backdrop-blur-lg shadow-lg p-2 flex items-center">
                <img src={emailIcon} alt="Email" className="w-4 h-4 mr-2" />
                <span>contact@example.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <Nav className="absolute left-1/2 transform -translate-x-1/2 top-4" />
    </div>
  );
};

export default AboutMe;
