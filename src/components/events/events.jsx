import React, { useEffect } from "react";
import "./events.css";
import ReactGA from "react-ga";

const Events = () => {
  useEffect(() => {
    document.title = "Stages | Xplora Innovathon 2026";
  }, []);

  const handleAbstract = () => {
    ReactGA.event({
      category: "Button",
      action: "click",
      label: "Abstract Reference Download",
    });
    window.open("/docs/XPLORA Innovathon 2026 Format.pptx");
  };

  const handleStage = (stage) => {
    ReactGA.event({
      category: "Button",
      action: "click",
      label: `Stage-${stage}`,
    });

    const widths = {
      1: "0%",
      2: "25%",
      3: "50%",
      4: "75%",
    };

    document.querySelector("#line-progress").style.width = widths[stage];

    document
      .querySelectorAll(".section-content")
      .forEach((el) => el.classList.remove("active"));

    document
      .querySelector(`.stage${stage}-content`)
      .classList.add("active");
  };

  return (
    <React.Fragment>
      <div className="parent-events">
        
        {/* ================= POSTER SECTION ================= */}
        

        {/* ================= PROGRESS BAR ================= */}
        <div className="events-progress-bar">
          <ul>
            <li onClick={() => handleStage("1")}>Stage 1</li>
            <li onClick={() => handleStage("2")}>Stage 2</li>
            <li onClick={() => handleStage("3")}>Stage 3</li>
            <li onClick={() => handleStage("4")}>Stage 4</li>
          </ul>

          <div id="line">
            <div id="line-progress"></div>
          </div>
        </div>

        {/* ================= STAGE CONTENT ================= */}
        <div className="events-container">
          
          {/* -------- STAGE 1 -------- */}
          <div className="section-content stage1-content active">
            <div className="section-format">
              <h1>Stage 1 – Registration</h1>
              <p>
                🔗 Register for <b>Xplora Innovathon 2026</b> through the official
                registration link available on the homepage.
                <br /><br />
                1️⃣ Teams must complete the Google registration form.
                <br /><br />
                2️⃣ Confirmation will be sent via email.
                <br /><br />
                3️⃣ Registration fee for Round 1:
                <b> ₹200 per team</b>.
                <br /><br />
                4️⃣ Last date:
                <b> 28th January 2026</b>.
              </p>
            </div>
          </div>

          {/* -------- STAGE 2 -------- */}
          <div className="section-content stage2-content">
            <div className="section-format">
              <h1>
                Stage 2 – Abstract Submission
                <span className="stage2-reference" onClick={handleAbstract}>
                  <span> click here to download – </span>
                  Template
                </span>
              </h1>
              <p>
                📋 Submit a project abstract aligned with official themes.
                <br /><br />
                📝 Must include problem, solution, tech stack & impact.
                <br /><br />
                📄 PDF format only.
                <br /><br />
                ⏰ Deadline:
                <b> 28th January 2026</b>.
              </p>
            </div>
          </div>

          {/* -------- STAGE 3 -------- */}
          <div className="section-content stage3-content">
            <div className="section-format">
              <h1>Stage 3 – Shortlisting</h1>
              <p>
                🔍 Abstracts evaluated on innovation, feasibility & relevance.
                <br /><br />
                📢 Top <b>25 teams</b> shortlisted.
                <br /><br />
                🏁 Results announced:
                <b> 2nd February 2026</b>.
                <br /><br />
                💳 Round 2 fee:
                <b> ₹1500 per team</b>.
              </p>
            </div>
          </div>

          {/* -------- STAGE 4 -------- */}
          <div className="section-content stage4-content">
            <div className="section-format">
              <h1>Stage 4 – Onsite 24-Hour Hackathon</h1>
              <p>
                🎉 Venue:
                <b> CUTM, Bhubaneswar</b>.
                <br /><br />
                ⏱️ Duration:
                <b> 11–12 February 2026 (24 Hours)</b>.
                <br /><br />
                💻 Prototype development & final demo.
                <br /><br />
                🍽️ Food, internet & power provided.
                <br /><br />
                🏆 Prize distribution on
                <b> 12th February 2026</b>.
              </p>
            </div>
          </div>

        </div>
        <div className="events-poster-wrapper">
          <img
            src="/images/Poster.jpeg"
            className="events-poster"
          />
        </div>
      </div>
      
    </React.Fragment>
  );
};

export default Events;
