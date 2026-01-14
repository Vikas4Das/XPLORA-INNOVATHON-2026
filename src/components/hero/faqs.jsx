import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import "./faqs.css";
import ReactGA from "react-ga";

const FAQs = () => {
  const handleArrow = (element) => {
    ReactGA.event({
      category: "Button",
      action: "click",
      label: "FAQs",
    });

    const content = element.currentTarget.querySelector(
      ".faqs-content-description"
    );
    const arrow = element.currentTarget.querySelector(".faqs-arrow");

    content.classList.toggle("faq-visible");
    arrow.classList.toggle("arrow-transform");
  };

  const styles = {
    container: {
      position: "relative",
      zIndex: "-1",
      fontSize: window.innerWidth <= 768 ? "5vw" : "2.5vw",
      transition: "all 0.3s linear",
      cursor: "pointer",
    },
  };

  return (
    <React.Fragment>
      <div id="faqs" className="parent-faqs">
        <h1 className="faqs-title">
          <img src="/images/rrr.webp" alt="arrow-logo" />
          FAQs
        </h1>

        <div className="faqs-section">
          {/* FAQ 1 */}
          <div className="faqs-content" onClick={handleArrow}>
            <h1 className="faqs-content-title">
              What is Xplora Innovathon 2026?
              <ChevronRightIcon style={styles.container} className="faqs-arrow" />
            </h1>
            <p className="faqs-content-description">
              Xplora Innovathon 2026 is a 24-hour national-level hackathon
              conducted as part of Xplora 2026, the annual technical fest of
              Centurion University of Technology and Management, Bhubaneswar.
              Participants collaborate to build innovative solutions addressing
              real-world problems.
            </p>
          </div>

          {/* FAQ 2 */}
          <div className="faqs-content" onClick={handleArrow}>
            <h1 className="faqs-content-title">
              Who can participate?
              <ChevronRightIcon style={styles.container} className="faqs-arrow" />
            </h1>
            <p className="faqs-content-description">
              The hackathon is open to undergraduate and postgraduate students
              from all engineering, technology, and allied disciplines. Both
              intra-university and inter-university teams are eligible to
              participate.
            </p>
          </div>

          {/* FAQ 3 */}
          <div className="faqs-content" onClick={handleArrow}>
            <h1 className="faqs-content-title">
              What is the team size?
              <ChevronRightIcon style={styles.container} className="faqs-arrow" />
            </h1>
            <p className="faqs-content-description">
              Each team must consist of a minimum of 2 members and a maximum of
              4 members. Having at least one female member per team is
              encouraged.
            </p>
          </div>

          {/* FAQ 4 */}
          <div className="faqs-content" onClick={handleArrow}>
            <h1 className="faqs-content-title">
              Is the hackathon online or offline?
              <ChevronRightIcon style={styles.container} className="faqs-arrow" />
            </h1>
            <p className="faqs-content-description">
              Round 1 (abstract submission) is conducted online. Round 2 is a
              24-hour onsite hackathon held at the CUTM Bhubaneswar campus.
              Shortlisted teams must be present physically for the final round.
            </p>
          </div>

          {/* FAQ 5 */}
          <div className="faqs-content" onClick={handleArrow}>
            <h1 className="faqs-content-title">
              What is the registration fee?
              <ChevronRightIcon style={styles.container} className="faqs-arrow" />
            </h1>
            <p className="faqs-content-description">
              The registration fee for Round 1 is ₹200 per team. Shortlisted
              teams advancing to Round 2 must pay ₹1500 per team, which includes
              food and accommodation. All registration fees are non-refundable
              and non-transferable.
            </p>
          </div>

          {/* FAQ 6 */}
          <div className="faqs-content" onClick={handleArrow}>
            <h1 className="faqs-content-title">
              How do I register for the hackathon?
              <ChevronRightIcon style={styles.container} className="faqs-arrow" />
            </h1>
            <p className="faqs-content-description">
              Click the “Register Now” button on the homepage and fill out the
              Google registration form with your team details and abstract.
              Shortlisted teams will be notified via email.
            </p>
          </div>

          {/* FAQ 7 */}
          <div className="faqs-content" onClick={handleArrow}>
            <h1 className="faqs-content-title">
              What is the prize pool?
              <ChevronRightIcon style={styles.container} className="faqs-arrow" />
            </h1>
            <p className="faqs-content-description">
              Xplora Innovathon 2026 has a total prize pool of ₹60,000 (tentative),
              including prizes for winners, runner-ups, and special merit
              awards.
            </p>
          </div>

          {/* FAQ 8 */}
          <div className="faqs-content" onClick={handleArrow}>
            <h1 className="faqs-content-title">
              What should participants bring?
              <ChevronRightIcon style={styles.container} className="faqs-arrow" />
            </h1>
            <p className="faqs-content-description">
              Participants must bring their own laptops, chargers, development
              tools, and any hardware components (sensors, microcontrollers,
              etc.) required for their project. Internet and power supply will
              be provided at the venue.
            </p>
          </div>

          {/* FAQ 9 */}
          <div className="faqs-content" onClick={handleArrow}>
            <h1 className="faqs-content-title">
              Will certificates be provided?
              <ChevronRightIcon style={styles.container} className="faqs-arrow" />
            </h1>
            <p className="faqs-content-description">
              Yes. All participants will receive participation certificates.
              Winners and special award recipients will receive merit
              certificates.
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FAQs;
