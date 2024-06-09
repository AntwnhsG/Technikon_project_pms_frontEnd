import React from "react";

import { useNavigate } from "react-router-dom";

function TabMenu() {
  const navigate = useNavigate();

  return (
    <nav
      className="navbar navbar-expand-sm navbar-light"
      style={{ background: "#FFF", height: "56px" }}
    >
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="mynavbar">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a
                className="nav-link"
                href="profile"
                style={{ color: "black", fontSize: 18 }}
              >
                Profile
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="properties"
                style={{ color: "black", fontSize: 18 }}
              >
                Properties
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default TabMenu;
