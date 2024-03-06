import React from "react";
import Nav from "./components/Nav";

const Contact = () => {
  return (
    <div
      style={{
        background: "linear-gradient(to right, #6366F1, #9333EA, #EC4899)",
        height: "auto",
        padding: "10px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        {/* Headline */}
        <div
          className="headline"
          style={{
            position: "relative",
            width: "193px",
            height: "42px",
            fontFamily: "Epilogue",
            fontSize: "32px",
            fontWeight: "700",
            lineHeight: "42px",
            letterSpacing: "0em",
            textAlign: "left",
            margin: "10px",
            marginBottom: "30px",
          }}
        >
          <svg width="400" height="400%" viewBox="70 20 100 100">
            <text
              x="0"
              y="50"
              fill="url(#gradient)"
              fontFamily="Epilogue"
              fontSize="32"
              fontWeight="700"
            >
              Contact Me
            </text>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FF7448" />
              <stop offset="52.43%" stopColor="#FF4848" />
              <stop offset="92.36%" stopColor="#0c1fc7" />
            </linearGradient>
          </svg>
        </div>

        {/* Description */}
        <div
          style={{
            width: "699px",
            height: "56px",
            fontFamily: "Epilogue",
            fontSize: "18px",
            fontWeight: "400",
            lineHeight: "28px",
            letterSpacing: "0em",
            textAlign: "left",
            marginBottom: "32px",
            color: "black",
          }}
        >
          Looking for an experienced designer to collaborate with? Need project
          estimations, or just want to say hi? Let's connect!
        </div>

        <div
          class="max-w-4xl relative overflow-hidden z-10 bg-white bg-opacity-25 backdrop-filter backdrop-blur-lg shadow-lg p-8 rounded-lg shadow-md before:w-24 before:h-24 before:absolute before:bg-purple-500 before:rounded-full before:-z-10 before:blur-2xl after:w-32 after:h-32 after:absolute after:bg-sky-400 after:rounded-full after:-z-10 after:blur-xl after:top-24 after:-right-12"
          style={{ width: "40%", height: "40%" }}
        >
          <form method="post" action="#">
            <div class="mb-4">
              <label class="block text-sm font-medium text-gray-600" for="name">
                Full Name
              </label>
              <input class="mt-1 p-2 w-full border rounded-md" type="text" />
            </div>

            <div class="mb-4">
              <label
                class="block text-sm font-medium text-gray-600"
                for="email"
              >
                Email Address
              </label>
              <input
                class="mt-1 p-2 w-full border rounded-md"
                name="email"
                id="email"
                type="email"
              />
            </div>

            <div class="mb-4">
              <label class="block text-sm font-medium text-gray-600" for="bio">
                Message
              </label>
              <textarea
                class="mt-1 p-2 w-full border rounded-md"
                rows="6"
                name="message"
                id="message"
              ></textarea>
            </div>

            <div class="flex justify-end">
              <button
                class="[background:linear-gradient(144deg,#af40ff,#5b42f3_50%,#00ddeb)] text-white px-4 py-2 font-bold rounded-md hover:opacity-80"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <Nav style={{ marginLeft: "100px", marginRight: "20px" }} />
    </div>
  );
};

export default Contact;
