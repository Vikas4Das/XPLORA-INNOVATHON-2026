import "./schedule.css";
import React, { useEffect } from "react";

const Schedule = () => {
  useEffect(() => {
    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("timelineAnimation");
          document
            .querySelectorAll(".container, .container-mobile")
            .forEach((container) =>
              container.classList.add("timelineAnimationContainer")
            );
        }
      });
    };

    const observer = new IntersectionObserver(callback, { threshold: 0.2 });
    document.querySelectorAll("#timeline").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <React.Fragment>
      {/* ================= DESKTOP VIEW ================= */}
      <div className="mainSchedule" id="schedule">
        <div className="parent-schedule">
          <div className="schedule-title">
            
            Schedule
          </div>

          <div className="timeline" id="timeline">
            {/* Registration Opens */}
            <div className="container">
              <h2 className="date">
                <div>
                  Jan
                  <div>
                    <div>10</div> <div>th</div>
                  </div>
                </div>
              </h2>
              <h2 className="container-title">Registration Opens</h2>
              <p className="container-description">
                Registration begins for Xplora Innovathon 2026. Teams can form,
                register, and begin preparing their innovative ideas aligned
                with the hackathon themes.
              </p>
              <span className="circle"></span>
            </div>

            {/* Abstract Submission */}
            <div className="container">
              <h2 className="container-title">Abstract Submission</h2>
              <h1 className="date">
                <div>
                  Jan
                  <div>
                    <div>10</div> <div>th</div>
                  </div>
                  – Jan
                  <div>
                    <div>28</div> <div>th</div>
                  </div>
                </div>
              </h1>
              <p className="container-description">
                Teams submit their problem statement, proposed solution,
                technology stack, and expected impact for Round 1 evaluation.
              </p>
              <span className="circle"></span>
            </div>

            {/* Registration Closes */}
            <div className="container">
              <h1 className="date">
                <div>
                  Jan
                  <div>
                    <div>28</div> <div>th</div>
                  </div>
                </div>
              </h1>
              <h2 className="container-title">Registration Closes</h2>
              <p className="container-description">
                Final deadline for abstract submission and team registration.
                Late entries will not be considered.
              </p>
              <span className="circle"></span>
            </div>

            {/* Finalists Announcement */}
            <div className="container">
              <h2 className="container-title">Shortlisted Teams Announced</h2>
              <h1 className="date">
                <div>
                  Feb
                  <div>
                    <div>2</div> <div>nd</div>
                  </div>
                </div>
              </h1>
              <p className="container-description">
                Top 25 teams are shortlisted based on innovation, feasibility,
                and relevance. Selected teams advance to the onsite hackathon.
              </p>
              <span className="circle"></span>
            </div>

            {/* Hackathon */}
            <div className="container">
              <h2 className="container-title">24-Hour Hackathon</h2>
              <h1 className="date">
                <div>
                  Feb
                  <div>
                    <div>11</div> <div>th</div>
                  </div>
                  – Feb
                  <div>
                    <div>12</div> <div>th</div>
                  </div>
                </div>
              </h1>
              <p className="container-description">
                Onsite 24-hour hackathon at CUTM Bhubaneswar. Teams design,
                develop, test, and present working prototypes with mentorship
                support.
              </p>
              <span className="circle"></span>
            </div>

            {/* Awards */}
            <div className="container">
              <h2 className="container-title">Final Presentation & Awards</h2>
              <h1 className="date">
                <div>
                  Feb
                  <div>
                    <div>12</div> <div>th</div>
                  </div>
                </div>
              </h1>
              <p className="container-description">
                Final project presentations, evaluation by judges, winner
                announcements, and prize distribution ceremony.
              </p>
              <span className="circle"></span>
            </div>
          </div>
        </div>
      </div>

      {/* ================= MOBILE VIEW ================= */}
      <div className="mainSchedule">
        <div className="parent-schedule-mobile">
          <div className="schedule-title-mobile">
            
            Schedule
          </div>

          <div className="timeline-mobile" id="timeline">
            {[
              {
                title: "Registration Opens",
                date: "Jan 10th",
                desc: "Team registrations open for Xplora Innovathon 2026.",
              },
              {
                title: "Abstract Submission",
                date: "Jan 10th – Jan 28th",
                desc: "Teams submit abstract and solution approach.",
              },
              {
                title: "Registration Closes",
                date: "Jan 28th",
                desc: "Final deadline for Round 1 submissions.",
              },
              {
                title: "Shortlisted Teams",
                date: "Feb 2nd",
                desc: "Top teams selected for onsite hackathon.",
              },
              {
                title: "24-Hour Hackathon",
                date: "Feb 11th – Feb 12th",
                desc: "Onsite hackathon, development & mentoring.",
              },
              {
                title: "Final Presentation & Awards",
                date: "Feb 12th",
                desc: "Results announced and prizes awarded.",
              },
            ].map((item, index) => (
              <div className="container-mobile" key={index}>
                <h2 className="container-title-mobile">{item.title}</h2>
                <h1 className="date-mobile">{item.date}</h1>
                <p className="container-description-mobile">{item.desc}</p>
                <span className="circle-mobile"></span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Schedule;
