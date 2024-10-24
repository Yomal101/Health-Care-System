import React from "react";
import "./nav.css";
function NavBarlog() {
  return (
    <div>
      <div className="navitem">
        <div>
          <h4 className="navitem_logo">Travel Go</h4>
        </div>
        <div className="NAV_LINK">
          < h4
            className="navitem_text"
            onClick={() => (window.location.href = "/")}
          >HOME</h4>
          <h4 className="navitem_text">SERVICES</h4>
          <h4 className="navitem_text">ABOUT</h4>
          <h4 className="navitem_text">REVIEWS</h4>
          <h4 className="navitem_text">CONTACT</h4>
        </div>
      </div>
    </div>
  );
}

export default NavBarlog;
