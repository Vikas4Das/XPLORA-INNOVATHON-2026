import { useEffect } from "react";
import "./about.css";
import ReactGA from "react-ga";

const About = () => {
  const handleWebClicks = (webLink) => {
    ReactGA.event({
      category: "Button",
      action: "click",
      label: webLink,
    });
    window.open(webLink, "_blank");
  };

  useEffect(() => {
    document.title = "About | Xplora Innovathon 2026";

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.id === "about-left") {
              entry.target.classList.add("aboutScrollAnimateLeft");
            }
            if (entry.target.id === "about-right") {
              entry.target.classList.add("aboutScrollAnimateRight");
            }
          }
        });
      },
      { threshold: 0.4 }
    );

    const elements = document.querySelectorAll(
      ".foundation-title,.foundation-description,.about-cutm-title,.about-cutm-description,.about-xplora-title,.about-xplora-description"
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div id="about" className="parent-about">
      <h1 className="about-title">About Us</h1>

      {/* ================= XPLORA INNOVATHON ================= */}
      <section className="about-section foundation">
        <h2 className="foundation-title mobile-center" id="about-right">
          Xplora Innovathon 2026
        </h2>

        <p className="foundation-description mobile-text" id="about-left">
          <b>Xplora Innovathon 2026</b> is a 24-hour national-level hackathon
          organized as part of <b>Xplora 2026</b>, the annual technical fest of
          Centurion University of Technology and Management (CUTM), Bhubaneswar.
          <br />
          <br />
          The event provides a competitive platform for students to ideate,
          innovate, and build real-world solutions using emerging technologies
          such as AI, IoT, Smart Infrastructure, Healthcare, Sustainability,
          Cybersecurity, and Immersive Technologies.
        </p>
      </section>

      {/* ================= ABOUT CUTM ================= */}
      <section className="about-section srmvec">
        <h2
          className="about-cutm-title mobile-center"
          id="about-left"
          onClick={() => handleWebClicks("https://cutm.ac.in/")}
        >
          About CUTM
        </h2>

        <p className="about-cutm-description mobile-text" id="about-right">
          Centurion University of Technology and Management (CUTM) is a
          multi-sector private university known for outcome-based education and
          industry-integrated learning.
          <br />
          <br />
          The Bhubaneswar campus acts as a hub for innovation labs, startups,
          interdisciplinary research, and skill-driven technical education.
        </p>
      </section>

      {/* ================= ABOUT XPLORA ================= */}
      <section className="about-section whitehatians">
        <h2 className="about-xplora-title mobile-center" id="about-right">
          About Xplora 2026
        </h2>

        <p className="about-xplora-description mobile-text" id="about-left">
          Xplora 2026 is the annual technical fest of CUTM, bringing together
          innovators, developers, students, and industry experts from across
          the country.
          <br />
          <br />
          Xplora Innovathon is the flagship event, encouraging collaboration,
          creativity, and the development of impactful technology-driven
          solutions.
        </p>
      </section>
    </div>
  );
};

export default About;
