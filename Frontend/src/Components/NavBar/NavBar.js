import React, { useState } from "react";
import "./nav.css";

function NavBar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleServicesClick = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleNavItemClick = (path) => {
    window.location.href = path;
    setIsDropdownOpen(false);
  };

  return (
    <div>
      <div className="navitem">
        <div>
          <h4 className="navitem_logo">HealthFirst</h4>
        </div>
        <div className="NAV_LINK">
          <h4 className="navitem_text" onClick={() => handleNavItemClick("/home")}>
            HOME
          </h4>

          
          
          <div className="navitem_text" onClick={handleServicesClick}>
            <h4>DETAILS</h4>
            {isDropdownOpen && (
              <div className="dropdown_menu">
                
                
                
                <h4 className="dropdown_item" onClick={() => handleNavItemClick("/guides")}>
                  -View Doctor's Details
                </h4>
                <h4 className="dropdown_item" >
                  -View Staff's Details  
                </h4>
                <h4 className="dropdown_item" >
                  - Insurance
                </h4>

              </div>
            )}
          </div>
          
       
          <h4 className="navitem_text" onClick={() => handleNavItemClick("/seereviews")}>
            REVIEWS
          </h4>
          <h4 className="navitem_text">ABOUT</h4>
          <h4 className="navitem_text" onClick={() => handleNavItemClick("/UserLpage")}>
            CONTACT
          </h4>
          
          <h4 className="navitem_text" onClick={() => handleNavItemClick("/profile")}>
            PROFILE
          </h4>
          <h4 className="navitem_text" onClick={() => handleNavItemClick("/")}>
            LOG OUT
          </h4>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
