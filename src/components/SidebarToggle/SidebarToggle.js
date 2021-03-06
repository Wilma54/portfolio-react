import React from "react";

import './SidebarToggle.css';

const sidebarToggle = props => (
    <button className="toggle-button" onClick={props.click}>
        <div className="toggle-button__line" />
        <div className="toggle-button__line" />
        <div className="toggle-button__line" />
    </button>
);

export default sidebarToggle;
