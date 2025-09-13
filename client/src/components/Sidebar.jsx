import React from "react";
import Project from "../pages/Project";

const Sidebar = () => {
  return (
    <div className="d-flex">
      <div
        className="offcanvas-start show position-static border-end"
        style={{ width: "250px", height: "100vh", backgroundColor: "#2B4348" }}
      >
        <div className="p-3">
          <ul className="nav flex-column ">
            <li className="nav-item">
              <a className="nav-link active text-white" href="#">
                Add Project
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Coding
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Certificate
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow-1 p-3">
        <Project />
      </div>
    </div>
  );
};

export default Sidebar;
