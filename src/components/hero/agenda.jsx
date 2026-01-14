import React, { useEffect, useRef } from "react";
import Lottie from "lottie-react";
import "./agenda.css";
import animationData from "../../assets/mic.json";

const Agenda = () => {
  // ---------------- Intersection Observer ----------------
  useEffect(() => {
    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.id === "agenda-left") {
            entry.target.classList.add("agendaScrollAnimateLeft");
          }
          if (entry.target.id === "agenda-right") {
            entry.target.classList.add("agendaScrollAnimateRight");
          }
        }
      });
    };

    const observer = new IntersectionObserver(callback, {
      threshold: 0.5,
    });

    const elements = document.querySelectorAll(
      ".about-vision-title,.about-vision-description,.about-mission-title,.about-mission-description"
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const ref = useRef();

  return (
    <React.Fragment>
      <div className="section2">
        {/* ------------------ AGENDA INTRO ------------------ */}
        <div className="agenda" id="agenda">
          <div className="title2">
            <img src="/images/rrr.webp" alt="agenda-arrow" />
            <h1 className="title-name">Agenda</h1>
          </div>

          <div className="agenda-text">
            {/* Lottie Animation */}
            <div className="agenda-lottie-animation">
              
               
              <Lottie
                animationData={animationData}
                lottieRef={ref}
                style={{
                  width: "40vw",
                  height: "50vh",
                  scale: "1.3",
                }}
                loop={false}
                onMouseEnter={() => {
                  ref.current.stop();
                  ref.current.setSpeed(0.6);
                  ref.current.play();
                }}
                onMouseLeave={() => ref.current.goToAndStop(1000)}
              />
            </div>

            {/* Agenda Description */}
            <div className="agenda-des">
              <strong>Xplora Innovathon 2026</strong> is a 24-hour
              hackathon that brings together innovators, developers, designers,
              and problem-solvers to build impactful technical solutions in a
              time-bound environment. Participants collaborate intensively to
              ideate, design, develop, and present working prototypes addressing
              real-world challenges across domains such as AI, IoT, Smart
              Infrastructure, Healthcare, Sustainability, and Immersive
              Technologies.  
              <br />
              <br />
              The agenda is designed to encourage innovation, teamwork,
              hands-on learning, mentorship interaction, and practical problem
              solving — transforming ideas into reality within just 24 hours.
            </div>
          </div>
        </div>

        {/* ------------------ VISION & MISSION ------------------ */}
        <div className="parent-vision">
          {/* ------------------ VISION ------------------ */}
          <div className="vision">
            <div className="about-vision-title" id="agenda-left">
              <img
                src="/images/vision.webp"
                alt="vision"
                width="300px"
                className="about-vision-image"
              />
              Vision
            </div>

            <div className="about-vision-description" id="agenda-right">
              To create a powerful innovation ecosystem where creative minds
              collaborate to shape the future of technology. Xplora Innovathon
              envisions empowering students to solve real-world problems through
              intelligent systems, connected technologies, sustainable
              engineering, and immersive digital experiences — driving societal
              impact and technological excellence.
            </div>
          </div>

          {/* ------------------ MISSION ------------------ */}
          <div className="mission">
            <div className="about-mission-title" id="agenda-right">
              <img
                src="/images/target.webp"
                alt="mission"
                width="250px"
                className="about-mission-image"
              />
              Mission
            </div>

            <div className="about-mission-description" id="agenda-left">
              Our mission is to foster innovation through hands-on learning,
              teamwork, and mentorship. Xplora Innovathon 2026 provides a
              competitive platform for students to explore emerging
              technologies, build scalable solutions, enhance technical and
              problem-solving skills, and gain exposure to real-world
              engineering challenges — all within an inclusive, collaborative,
              and high-energy hackathon environment.
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Agenda;
