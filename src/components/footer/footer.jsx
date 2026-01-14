import React from "react";
import "./footer.css";
import { ReactComponent as Copyright } from "../../assets/copyright.svg";
const footer = () => {
  const developedBy = () => {
    window.open("https://github.com/Vikas4Das", "_self");
    window.open("https://github.com/Vikas4Das", "_blank");
  };
  return (
    <React.Fragment>
      <div className="parent-footer">
        <p className="copyright">
          © 2026 Centurion University.
          <Copyright className="copyright-icon" />
          All Rights Reserved {"All Rights Reserved."}
        </p>
        <p className="copyright">
          Developed & Maintained by <p onClick={developedBy}>Xplora Innovathon 2026 </p>
        </p>
      </div>
    </React.Fragment>
  );
};

export default footer;
