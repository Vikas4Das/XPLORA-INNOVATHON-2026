import "./hero.css";
import React, { useEffect, useState } from "react";
import ReactGA from "react-ga";
import KeyboardDoubleArrowRightSharpIcon from "@mui/icons-material/KeyboardDoubleArrowRightSharp";
import VanillaTilt from "vanilla-tilt";
import { useNavigate } from "react-router-dom"; // 1. Import useNavigate

import Agenda from "./agenda";
import Schedule from "./schedule";
import Sponsors from "./sponsors";
import { Footer } from "../";

import { ReactComponent as Calender } from "../../assets/calender.svg";
import { ReactComponent as Info } from "../../assets/info.svg";
import { ReactComponent as Location } from "../../assets/location.svg";
import { ReactComponent as ArrowRightWhite } from "../../assets/arrow-right-white.svg";
import { ReactComponent as ArrowRightBlack } from "../../assets/arrow-right-black.svg";

const Hero = () => {
  const navigate = useNavigate(); // 2. Initialize the hook

  // ------------------ Register Button ------------------
  const handleRegisterClick = () => {
    ReactGA.event({
      category: "Button",
      action: "click",
      label: "register",
    });
    window.open("https://forms.gle/fuHo3wQSTVpbZqpD7", "_blank");
  };

  // 3. Updated function to use SPA navigation
  const handleCardClicks = (route) => {
    ReactGA.event({
      category: "Navigation",
      action: "click",
      label: route,
    });
    // Use navigate instead of window.open to prevent page reload
    navigate(route);
  };

  // ------------------ Countdown ------------------
  const [countdown, setCountdown] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  const handleCountdown = () => {
    const countDate = new Date("February 11, 2026 10:00:00").getTime();
    const now = new Date().getTime();
    const diff = countDate - now;

    if (diff <= 0) return;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = String(Math.floor(diff / day)).padStart(2, "0");
    const hours = String(Math.floor((diff % day) / hour)).padStart(2, "0");
    const minutes = String(Math.floor((diff % hour) / minute)).padStart(2, "0");
    const seconds = String(Math.floor((diff % minute) / second)).padStart(
      2,
      "0"
    );

    setCountdown({ days, hours, minutes, seconds });
  };

  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll(".anim"), {
      max: 10,
      speed: 400,
      glare: true,
      "max-glare": 0.2,
    });

    const interval = setInterval(handleCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <React.Fragment>
      <div className="parent_hero">
        {/* ----------------------- HERO SECTION ----------------------- */}
        <section className="column">
          {/* ----------------------- LEFT SIDE ----------------------- */}
          <div className="left_side">
            <div className="curve"></div>
            <div className=" tag-hero-mobile">
              <img
                src="/images/white logon enw .PNG"
                alt="cutm logo"
                width="90vw"
                className="hero-srm-logo"
              />
              <div className="tag">
                <div>
                  <div>15</div>
                  <span>th</span>
                </div>
                Annual Techno-Management-Science-Literary-Cultural-Skills Fest
                "Gajajyoti 2026"
              </div>
              <img
                src="/images/NAAC Achievement Logo of CUTM.png"
                alt="naac logo"
                width="60vw"
                className="hero-srmvec-logo"
              />
            </div>

            <div className="title1">
              <span className="hackathon">Xplora Innovathon 2026</span>

              <p className="description">
                <span className="hackathon-tag">24-Hour Hackathon</span>
                <br />
                Building innovative and impactful technical solutions
                <br />
                <br />
                {/* 🔥 Highlighted Prize Pool */}
                <span className="prize-highlight">
                  🏆 Total Prize Pool
                  <span className="prize-amount">₹60,000</span>
                </span>
              </p>
            </div>

            <div className="hero-action-buttons">
              <div className="register_now" onClick={handleRegisterClick}>
                <div>
                  <a>REGISTER NOW</a>
                </div>
                <div>
                  <KeyboardDoubleArrowRightSharpIcon style={{ fontSize: 35 }} />
                </div>
              </div>

              {/* -------- DOWNLOAD BROCHURE -------- */}
              <div
                className="brochure_btn"
                onClick={() =>
                  window.open(
                    "/docs/HACKTHON.pdf",
                    "_blank"
                  )
                }
              >
                <div>
                  <a href="/docs/HACKTHON.pdf" download="/docs/HACKTHON.pdf">BROCHURE</a>
                </div>
                <div>
                  <KeyboardDoubleArrowRightSharpIcon style={{ fontSize: 30 }} />
                </div>
              </div>
            </div>

            {/* ----------------------- COUNTDOWN ----------------------- */}
            <div className="countdown-main">
              <div className="countdown anim">
                <div className="day-card anim">
                  <h3>{countdown.days}</h3>
                  <h3>Days</h3>
                </div>
                <div className="sep">:</div>

                <div className="hour-card anim">
                  <h3>{countdown.hours}</h3>
                  <h3>Hours</h3>
                </div>
                <div className="sep">:</div>

                <div className="min-card anim">
                  <h3>{countdown.minutes}</h3>
                  <h3>Minutes</h3>
                </div>
                <div className="sep">:</div>

                <div className="sec-card anim">
                  <h3>{countdown.seconds}</h3>
                  <h3>Seconds</h3>
                </div>
              </div>
            </div>
          </div>

          {/* ----------------------- RIGHT SIDE ----------------------- */}
          <div className="right_side">
            {/* -------- Column 1 -------- */}
            <div className="col1 animated-div">
              <h3 className="text">
                <div>11–12 Feb 2026</div>
                <Calender className="calender-icon" />
              </h3>
              {/* Guidelines logic remains the same, now handled by navigate() */}
              <p
                className="text2"
                style={{ cursor: "pointer" }}
                onClick={() => handleCardClicks("/guidelines")}
              >
                Guidelines <ArrowRightWhite className="arrow-right-icon" />
              </p>
              <p
                className="text3"
                style={{ cursor: "pointer" }}
                onClick={() => handleCardClicks("/events")}
              >
                Events <ArrowRightWhite className="arrow-right-icon" />
              </p>
            </div>

            {/* -------- Column 2 -------- */}
            <div className="col2 animated-div">
              <h3 className="text4">
                Information <Info className="info-icon" />
              </h3>
              <p className="text5" onClick={() => handleCardClicks("/about")}>
                About Hackathon <ArrowRightWhite className="arrow-right-icon" />
              </p>
            </div>

            {/* -------- Column 3 -------- */}
            <div className="col3 animated-div">
              <h3 className="text7">Problem Statements</h3>
              <p className="text8" onClick={() => handleCardClicks("/set1")}>
                Click Here <ArrowRightBlack className="arrow-right-icon" />
              </p>
            </div>

            {/* -------- Column 4 -------- */}
            <div
              className="col4 animated-div"
              style={{ cursor: "pointer" }}
              onClick={() =>
                window.open(
                  "https://www.google.com/maps/place/Centurion+University+of+Technology+%26+Management,+Bhubaneswar+(CUTM)/@20.1759206,85.7051449,18z/data=!3m1!4b1!4m6!3m5!1s0x3a19aec948fe62ef:0xb6c968c7957b6b4f!8m2!3d20.1759184!4d85.7062486!16s%2Fg%2F1v_0h5j9?entry=ttu&g_ep=EgoyMDI2MDEwNy4wIKXMDSoASAFQAw%3D%3D",
                  "_blank"
                )
              }
            >
              <h3 className="text10">
                Venue <Location className="location-icon" />
              </h3>
              <div className="venue-poster-wrapper">
                <img
                  src="/images/Poster.jpeg"
                  alt="Xplora Innovathon 2026 Poster"
                  className="venue-poster"
                />
              </div>
              <p className="text-white venue-text-mobile">
                Centurion University of Technology and Management
                <br />
                Bhubaneswar, Odisha
              </p>
              <div className="round"></div>
            </div>

            {/* -------- Column 4 : Important Note -------- */}
            <div className="col5 animated-div">
              <h3 className="text-note-title">Important Note</h3>

              <p className="text-note">
                Registration fee, prize pool, and selection process may be
                revised based on event requirements and submission quality.
              </p>

              <p className="text-note">
                Any changes will be communicated to participants in advance.
              </p>

              <p className="text-note bold">
                Jury and organizing committee decisions are final.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* ----------------------- OTHER SECTIONS ----------------------- */}
      <Agenda />
      <div className="bg-sep"></div>
      <Schedule />
      <div className="bg-sep"></div>
      <Sponsors />
      <Footer />
    </React.Fragment>
  );
};

export default Hero;
