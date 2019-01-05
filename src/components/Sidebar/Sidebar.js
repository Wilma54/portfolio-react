import React from "react";
import "./Sidebar.css";

const sidebar = props => {
  let drawerClasses = 'side-bar';
  if (props.show) {
    drawerClasses = 'side-bar open';
  }
  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <a href="/">About Me</a>
        </li>
        <li>
          <a href="/">Skills</a>
        </li>
        <li>
          <a href="/">Education</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
        <li>
          <a href="/">Resume</a>
        </li>
      </ul>
    </nav>
  );
};

export default sidebar;
