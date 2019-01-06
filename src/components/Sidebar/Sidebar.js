import React from "react";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-scroll";

const sidebar = props => {
  let drawerClasses = "side-bar";
  if (props.show) {
    drawerClasses = "side-bar open";
  }
  return (
    
    <nav className={drawerClasses}>
    <div className="sidebar-logo"><h1>SUSSIEP</h1>
    
    </div>
      <ul>
        <li>
          <Link to="Aboutme">
            <FontAwesomeIcon 
            className="icon-style" 
            icon="female" size="2x" />
            <a href="/">About Me</a>
          </Link>
        </li>
        <li>
          <Link to="Skills">
            <FontAwesomeIcon
              className="icon-style"
              icon="chart-bar"
              size="2x"
            />
            <a href="/">Skills</a>
          </Link>
        </li>
        <li>
          <Link to="Education">
            <FontAwesomeIcon
              className="icon-style"
              icon="university"
              size="2x"
            />
            <a href="/">Education</a>
          </Link>
        </li>
        <li>
          <Link to="Contact">
            <FontAwesomeIcon 
            className="icon-style" 
            icon="envelope" size="2x" />
            <a href="/">Contact</a>
          </Link>
        </li>
        <li>
          <Link to="Resume">
            <FontAwesomeIcon 
            className="icon-style" 
            icon="file" size="2x" />
            <a href="/">Resume</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default sidebar;
