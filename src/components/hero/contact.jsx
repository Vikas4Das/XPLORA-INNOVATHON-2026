import PhoneBluetoothSpeakerIcon from "@mui/icons-material/PhoneBluetoothSpeaker";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./contact.css";
import ReactGA from "react-ga";

const Contact = () => {
  const handleClick = (label, link) => {
    ReactGA.event({
      category: "Contact",
      action: "click",
      label,
    });
    window.open(link, "_blank");
  };

  return (
    <div id="contact" className="parent-contact">
      <div className="contact-title">
        
        Contact Us
      </div>

      <div className="parent-container">

        {/* ================= CONTACT CARD 1 ================= */}
        <div className="simple-contact-card">
          <h1 className="contact-name">Somanath Parida</h1>
          <h2 className="contact-role">Student Coordinator</h2>

          <div
            className="contact-row"
            onClick={() =>
              handleClick(
                "Student Coordinator",
                "https://api.whatsapp.com/send?phone=917077508540"
              )
            }
          >
            <PhoneBluetoothSpeakerIcon />
            <span>+91 70775 08540</span>
          </div>

          <div
            className="contact-row"
            onClick={() =>
              handleClick(
                "Email -Student Coordinator",
                "mailto:220301120090@cutm.ac.in"
              )
            }
          >
            <EmailRoundedIcon />
            <span>220301120090@cutm.ac.in</span>
          </div>

          <div
            className="contact-row"
            onClick={() =>
              handleClick(
                "LinkedIn - Student Coordinator",
                "https://www.linkedin.com/in/somanath-parida-a8001726a"
              )
            }
          >
            <LinkedInIcon />
            <span>LinkedIn Profile</span>
          </div>
        </div>

        {/* ================= CONTACT CARD 2 ================= */}
        <div className="simple-contact-card">
          <h1 className="contact-name">Ujjwal Mandal</h1>
          <h2 className="contact-role">Student Coordinator</h2>

          <div
            className="contact-row"
            onClick={() =>
              handleClick(
                "Phone - WhiteHatians President",
                "https://api.whatsapp.com/send?phone=918117992724"
              )
            }
          >
            <PhoneBluetoothSpeakerIcon />
            <span>+91 81179 92724</span>
          </div>

          <div
            className="contact-row"
            onClick={() =>
              handleClick(
                "Email - Student Coordinator",
                "mailto:220301120104@cutm.ac.in"
              )
            }
          >
            <EmailRoundedIcon />
            <span>220301120104@cutm.ac.in</span>
          </div>

          <div
            className="contact-row"
            onClick={() =>
              handleClick(
                "LinkedIn - Student Coordinator",
                "https://www.linkedin.com/in/ujjwal-mandal1401"
              )
            }
          >
            <LinkedInIcon />
            <span>LinkedIn Profile</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
