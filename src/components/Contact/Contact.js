import React from "react";
import { Element } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Contact.module.css';

const Contact = () => (
    <Element name="Contact">
<section>
    <div className={styles.box}>
<h1 className={styles.labels}>CONTACT</h1>
    <div className={styles.container}>      
        <FontAwesomeIcon 
        icon= "envelope" />     
        <FontAwesomeIcon 
        icon={['fab','linkedin']} />
        <FontAwesomeIcon 
        icon={['fab','github']}/>
    </div>
    </div>
</section>

    </Element>
);
   
export default Contact;