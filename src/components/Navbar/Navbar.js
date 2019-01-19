import React from 'react';
import SidebarToggle from '../SidebarToggle/SidebarToggle';
import { Link } from 'react-scroll';
import styles from './Navbar.module.css';


const navbar = props => (
    <header className={styles.navbar}>
        <nav className={styles.navbarNavigation}>
        <div className={styles.toolbarToggleButton}>
            <SidebarToggle click={props.drawerClickHandler} />
        </div>
        <div className={styles.navbarlogo}><a href="/">SUSSIEP</a></div>
        <div className={styles.spacer} />
        <div className={styles.navbarNavigationItems}>
            <ul>
            <li><Link to="Aboutme">About</Link></li>
            <li><Link to="Skills" offset={-100} smooth={ true } duration={ 500 }>Skills</Link></li>
            <li><Link to="Education">Education</Link></li>
            <li><Link to="Contact">Contact</Link></li>
            <li><Link to="Resume">Resume</Link></li>
            </ul>
        </div>
        </nav>  
    </header>
);

export default navbar;