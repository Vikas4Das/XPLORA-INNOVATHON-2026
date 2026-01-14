import React from "react";
import "./convener.css";

const Prize = () => {
  return (
    <React.Fragment>
      {/* ================= PRIZE SECTION ================= */}
      <div className="parent-prize">
        <div className="prize-title">
          <h1>Prize Pool</h1>
        </div>

        <p className="prize-subtitle">
          Total Prize Pool: <span>₹60,000</span>
        </p>
      </div>

      {/* ================= EVENT POSTER ================= */}
      <div className="events-poster-wrapper">
        <img
          src="/images/Poster.jpeg"
          alt="Xplora Innovathon 2026 Poster"
          className="events-poster"
        />
      </div>

      {/* ================= VENUE MAP ================= */}
      <div className="venue-map-section">
        {/* ================= VENUE DETAILS ================= */}
      <div className="venue-details">
        <h3>VENUE MAP</h3>
        <h3>Centurion University Of Technology And Management</h3>
        <p>
          📍 <span>Ramachandrapur, Jatni, Bhubaneswar, Odisha – 752050</span>
        </p>
      </div>

        <iframe
          src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Centurion%20University%20of%20Technology%20and%20Management,%20Ramachandrapur,%20Jatni,%20Bhubaneswar,%20Odisha%20752050+(Centurion%20University%20Of%20Technology%20And%20Management)&t=&z=14&ie=UTF8&iwloc=B&output=embed"
          width="100%"
          height="350"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          title="CUTM Location"
        ></iframe>
      </div>

      
    </React.Fragment>
  );
};

export default Prize;
