import React from "react";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-scroll";

const sidebar = props => {
  let drawerClasses = "side-bar";
  if (props.show) {
    drawerClasses = "side-bar open";
  }

  let close = props.hide;

  return (
    <nav className={drawerClasses}>
      <div className="sidebar-logo">
        <p>SUSSIEP</p>
      </div>
      <div id="sidebar-wrapper">
        <ul>
          <li>
            <Link to="Aboutme" onClick={close}>
              <button className="button">
                <FontAwesomeIcon icon="user" className="icon-style" size="2x" />
                About
              </button>
            </Link>
          </li>
          <li>
            <Link to="Skills" onClick={close}>
              <button className="button">
                <FontAwesomeIcon
                  href="/"
                  className="icon-style"
                  icon="chart-bar"
                  size="2x"
                />
                Skills
              </button>
            </Link>
          </li>
          <li>
            <Link to="Education" onClick={close}>
              <button className="button">
                {" "}
                <FontAwesomeIcon
                  href="/"
                  className="icon-style"
                  icon="university"
                  size="2x"
                />
                Education
              </button>
            </Link>
          </li>
          <li>
            <Link to="Contact" onClick={close}>
              <button className="button">
                <FontAwesomeIcon
                  href="/"
                  className="icon-style"
                  icon="envelope"
                  size="2x"
                />
                Contact
              </button>
            </Link>
          </li>
          <li>
            <Link to="Resume" onClick={close}>
              <button className="button">
                {" "}
                <FontAwesomeIcon
                  href="/"
                  className="icon-style"
                  icon="file"
                  size="2x"
                />
                Resume
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default sidebar;
