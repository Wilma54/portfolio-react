import React from "react";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-scroll";

const sidebar = (props) => {
  let drawerClasses = "side-bar";
  if (props.show) {
    drawerClasses = "side-bar open";
  }

  let close = props.hide;

  return (
    <nav className={drawerClasses}>
      <div className="sidebar-logo">
        <h1>SUSSIEP</h1>
      </div>
      <ul>
        <li >

          <Link to="Aboutme" onClick={close}>
            <FontAwesomeIcon
              href="/"
              icon="female"
              className="icon-style"
              size="2x"
              
            />
            About
          </Link>
        </li>
        <li>
          <Link to="Skills" onClick={close}>
            <FontAwesomeIcon
              href="/"
              className="icon-style"
              icon="chart-bar"
              size="2x"
            />
            Skills
          </Link>
        </li>
        <li>
          <Link to="Education" onClick={close}>
            <FontAwesomeIcon
              href="/"
              className="icon-style"
              icon="university"
              size="2x"
            />
           Education
          </Link>
        </li>
        <li>
          <Link to="Contact" onClick={close}>
            <FontAwesomeIcon
              href="/"
              className="icon-style"
              icon="envelope"
              size="2x"
            />
            Contact
          </Link>
        </li>
        <li>
          <Link to="Resume" onClick={close}>
            <FontAwesomeIcon
              href="/"
              className="icon-style"
              icon="file"
              size="2x"
            />
           Resume
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default sidebar;
