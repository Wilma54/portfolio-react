import React from 'react';
import SidebarToggle from '../SidebarToggle/SidebarToggle';
import { Link } from 'react-scroll';
import './Navbar.css'


const navbar = props => (
    <header className="navbar">
        <nav className="navbar__navigation">
        <div className="toolbar__toggle-button">
            <SidebarToggle click={props.drawerClickHandler} />
        </div>
        <div className="navbar__logo"><a href="/">SUSSIEP</a></div>
        <div className="spacer" />
        <div className="navbar_navigation-items">
            <ul>
                <Link to="Aboutme"><li><a href="/">About</a></li></Link>
                <Link to="Skills" offset={-100} smooth={ true } duration={ 500 }><li><a href="/">Skills</a></li></Link>
                <Link to="Education"><li><a href="/">Education</a></li></Link>
                <Link to="Contact"><li><a href="/">Contact</a></li></Link>
                <Link to="Resume"><li><a href="/">Resume</a></li></Link>
            </ul>
        </div>
        </nav>  
    </header>
);

export default navbar;