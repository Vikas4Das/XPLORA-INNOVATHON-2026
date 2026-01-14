import React, { useEffect } from "react";
import "./guidelines.css";

const Guidelines = () => {
  useEffect(() => {
    document.title = "Guidelines | Xplora Innovathon 2026";
  }, []);

  return (
    <React.Fragment>
      <div className="parent-guidelines">
        <div className="guidelines-title">Guidelines</div>

        <div className="guidelines-container">
          <div className="guidelines-content">
            {/* -------- LEFT COLUMN -------- */}
            <div className="guidelines-1">
              1. Each team must consist of a minimum of <b>2 members</b> and a
              maximum of <b>4 members</b>. 👥🤝
              <br />
              <br />
              2. The last date for <b>Round 1 registration and abstract
              submission</b> is <b>28th January 2026</b>. ⏰🗓️
              <br />
              <br />
              3. Abstracts must clearly describe the problem statement, proposed
              solution, technology stack, and expected impact. 📝💡
              <br />
              <br />
              4. The submitted project idea must be <b>original</b> and should
              not have been previously submitted to other hackathons, journals,
              or competitions. 🚀🔍
              <br />
              <br />
              5. Shortlisting for Round 2 will be based on innovation,
              feasibility, relevance to the selected theme, and clarity of the
              abstract. 📊✅
              <br />
              <br />
              6. A total of <b>25 teams</b> will be shortlisted for the onsite
              24-hour hackathon round. 🏆
              <br />
              <br />
              7. Teams must strictly follow the <b>code of conduct</b>.
              Any form of misconduct, plagiarism, or unethical behavior will
              result in immediate disqualification. 🚫⚠️
            </div>

            {/* -------- RIGHT COLUMN -------- */}
            <div className="guidelines-2">
              8. The registration fee for Round 1 is <b>₹200 per team</b>.
              Shortlisted teams must pay <b>₹1500 per team</b> for Round 2, which
              includes food and accommodation. 💳🍽️🏨
              <br />
              <br />
              9. The list of shortlisted teams will be announced on
              <b> 2nd February 2026</b>. 📣
              <br />
              <br />
              10. The onsite 24-hour hackathon (Round 2) will be conducted from
              <b> 11th to 12th February 2026</b> at
              <b> Centurion University of Technology and Management,
              Bhubaneswar</b>. 🏛️📍
              <br />
              <br />
              11. Teams must bring their own laptops, chargers, and any required
              hardware components. Internet and power supply will be provided at
              the venue. 💻🔌
              <br />
              <br />
              12. Projects must remain functional throughout the 24-hour
              hackathon. Any major failure without valid justification may lead
              to disqualification. ⏱️❌
              <br />
              <br />
              13. Teams must present their final solution clearly, including
              problem definition, implementation, demo, and future scope. 🎤📊
              <br />
              <br />
              14. The decision of the judges and organizing committee will be
              <b> final and binding</b> in all matters related to evaluation and
              results. ⚖️🏁
            </div>
            
          </div>
          
        </div>
      </div>
    </React.Fragment>
  );
};

export default Guidelines;
