import React, { useEffect } from "react";
import Navbar from "./Navbar";
import homeImg from "../Assets/Home.png";

const Home = () => {
  const containerStyle = {
    backgroundImage: `url(${homeImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    width: "100%",
    position: "relative",
    overflow: "hidden",
  };

  useEffect(() => {
    if (window && window.particlesJS) {
      try {
        window.particlesJS("particles-js", {
          particles: {
            number: { value: 70 },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: { value: 0.5 },
            size: { value: 3 },
            line_linked: {
              enable: true,
              distance: 100,
              color: "#ffffff",
              opacity: 0.3,
              width: 1,
            },
            move: {
              enable: true,
              speed: 6,
              direction: "none",
              out_mode: "out",
            },
          },
          interactivity: {
            detect_on: "window",
            events: {
              onhover: { enable: true, mode: "grab" },
              onclick: { enable: true, mode: "repulse" },
            },
            modes: {
              grab: { distance: 200, line_linked: { opacity: 0.9 } },
              repulse: { distance: 200 },
            },
          },
          retina_detect: true,
        });
      } catch (err) {}
    }
  }, []);

  return (
    <div className="home-container" style={containerStyle}>
      
      {/* NAVBAR ALWAYS ON TOP */}
      <Navbar />

      {/* PARTICLES BACKGROUND */}
      <div
        id="particles-js"
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
        }}
      />

      {/* CONTENT ON TOP OF PARTICLES */}
      <div
        className="home-content"
        style={{
          position: "relative",
          zIndex: 5,
          paddingTop: "150px",
          textAlign: "center",
          color: "white",
        }}
      >
        <h2 className="home">Modern digital solutions</h2>
        <h2 className="home">for secure and smart Banking.</h2>
      </div>
    </div>
  );
};

export default Home;
