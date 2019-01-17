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