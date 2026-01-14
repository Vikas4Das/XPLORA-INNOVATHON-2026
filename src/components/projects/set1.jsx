import { useEffect } from "react";
import "./projects.css";
import ReactGA from "react-ga";

const Set1 = () => {
  useEffect(() => {
    document.title =
      "Problem Statements & Evaluation | Xplora Innovathon 2026";
  }, []);

  const handleSoftwareView = (element) => {
    ReactGA.event({
      category: "Button",
      action: "click",
      label: "Problem Statements - Toggle",
    });

    const content = element.currentTarget.querySelector(
      ".software-content-description"
    );
    content.classList.toggle("projects-close");
    content.classList.toggle("projects-view");
  };

  return (
    <div className="parent-software">
      {/* ================= TITLE ================= */}
      <h1 className="parent-software-title">Problem Statements</h1>

      <p className="projects-disclaimer">
        Teams may also propose their <b>own innovative problem statements</b>{" "}
        aligned with the hackathon themes.
      </p>

      {/* ================= THEMES ================= */}
      <section className="projects-section">
        <h2 className="projects-subtitle">Hackathon Themes</h2>

        <div className="software-container">
          <div className="software-content">
            <h1 className="software-content-title">
              Intelligent Systems & Data Technologies
            </h1>
            <p className="software-content-description projects-view">
              • Artificial Intelligence & Machine Learning  <br/>
              • Data Science & Big Data Analytics  <br/>
              • Cloud Computing & Edge Computing  <br/>
              • Cybersecurity & Blockchain Technologies
            </p>
          </div>

          <div className="software-content">
            <h1 className="software-content-title">
              Connected Devices & Automation
            </h1>
            <p className="software-content-description projects-view">
              • Internet of Things (IoT) & Embedded Systems  <br/>
              • Smart Manufacturing & Industry 4.0  <br/>
              • Robotics, Drones & Autonomous Systems
            </p>
          </div>

          <div className="software-content">
            <h1 className="software-content-title">
              Smart Infrastructure & Urban Development
            </h1>
            <p className="software-content-description projects-view">
              • Smart Cities & Urban Innovation  <br/>
              • Civil Infrastructure & Construction Technology  <br/>
              • Energy Systems & Power Engineering
            </p>
          </div>

          <div className="software-content">
            <h1 className="software-content-title">
              Health, Sustainability & Agri-Tech
            </h1>
            <p className="software-content-description projects-view">
              • Smart Healthcare & Biomedical Engineering  <br/>
              • Sustainable Engineering & Green Technologies  <br/>
              • Climate Change & Environmental Engineering  <br/>
              • Agriculture Technology & Rural Innovation
            </p>
          </div>

          <div className="software-content">
            <h1 className="software-content-title">
              Immersive & Advanced Technologies
            </h1>
            <p className="software-content-description projects-view">
              • AR / VR & Gaming  <br/>
              • Space, Aerospace & Defense Technologies
            </p>
          </div>
        </div>
      </section>

      {/* ================= PROBLEM STATEMENTS ================= */}
      <section className="projects-section">
        <h2 className="projects-subtitle">Sample Problem Statements</h2>

        <div className="software-container">
          {[
            {
              title: "Smart Elderly Care System",
              desc:
                "Design an AI & IoT-enabled system that assists elderly people with health monitoring, medication reminders, fall detection, and emergency alerts.",
            },
            {
              title: "AI-Based Energy Optimization",
              desc:
                "Build a smart energy management solution that analyzes usage patterns and reduces power wastage using AI, IoT, or smart meters.",
            },
            {
              title: "Intelligent Traffic Management",
              desc:
                "Develop a real-time traffic control system using sensors, cameras, and ML models to reduce congestion and improve mobility.",
            },
            {
              title: "Smart Waste Management",
              desc:
                "Create an IoT-based waste collection and recycling optimization system with route planning and citizen engagement.",
            },
            {
              title: "Cybersecurity for IoT Devices",
              desc:
                "Design a security framework to protect IoT devices from unauthorized access using encryption, authentication, or blockchain.",
            },
            {
              title: "Smart Agriculture & Precision Farming",
              desc:
                "Build an automated farming system using sensors and data analytics to improve crop yield and resource efficiency.",
            },
            {
              title: "Remote Healthcare Monitoring",
              desc:
                "Develop wearable-based healthcare monitoring that tracks vitals and alerts doctors or caregivers in real time.",
            },
            {
              title: "Disaster Prediction & Management",
              desc:
                "Create an AI-powered system for early disaster detection, emergency response planning, and impact analysis.",
            },
          ].map((item, index) => (
            <div
              className="software-content"
              key={index}
              onClick={handleSoftwareView}
            >
              <h1 className="software-content-title">{item.title}</h1>
              <p className="software-content-description projects-close">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= EVALUATION ================= */}
      <section className="projects-section">
        <h2 className="projects-subtitle">Evaluation Criteria</h2>

        <div className="software-container">
          <div className="software-content">
            <h1 className="software-content-title">
              Theme Alignment & Relevance (10–20%)
            </h1>
            <p className="software-content-description projects-view">
              • Alignment with chosen domain  <br/>
              • Real-world problem relevance  <br/>
              • Effective use of domain technologies
            </p>
          </div>

          <div className="software-content">
            <h1 className="software-content-title">
              Innovation & Originality (20–30%)
            </h1>
            <p className="software-content-description projects-view">
              • Novelty of idea  <br/>
              • Creative approach  <br/>
              • Unique combination of technologies
            </p>
          </div>

          <div className="software-content">
            <h1 className="software-content-title">
              Technical Implementation (20–30%)
            </h1>
            <p className="software-content-description projects-view">
              • Working prototype quality  <br/>
              • Code structure & scalability  <br/>
              • Handling of technical complexity
            </p>
          </div>

          <div className="software-content">
            <h1 className="software-content-title">
              Impact & Societal Value (15–25%)
            </h1>
            <p className="software-content-description projects-view">
              • Practical usefulness  <br/>
              • Scalability & feasibility  <br/>
              • Benefit to society or industry
            </p>
          </div>

          <div className="software-content">
            <h1 className="software-content-title">
              Presentation & Demo (10–20%)
            </h1>
            <p className="software-content-description projects-view">
              • Clarity of explanation  <br/>
              • UI/UX quality  <br/>
              • Teamwork & overall polish
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Set1;
