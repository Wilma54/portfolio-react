import React from "react";
import { Element } from "react-scroll";
import styles from './AboutMe.module.css';



const AboutMe = () => (
  <Element name="Aboutme">
    <section>
      <div className={styles.box}>
    <h1 className={styles.labels}>ABOUT</h1>
    </div>
    
    <div className={styles.look}>
    <h2 className={styles.quote}>A passionate and a driven Frontend Developer Student</h2>
  
    <p>I have always loved challenges and problems and to find the best way of solving them. </p>
    <p>My professional path started out with my love for magazines and I enjoyed working with the International business for years</p>
    <p>However, it was time for newa challenges and a new chapter in life, and I have alwasy been interesed in coding and building stuff. 
    Which made the decision easy to become a student again, and I love it even though I sometimes just want to throw my computer out off the window.</p>
    <p>I am still engaged in my passion for help others and to solve problems, becoming a Frontend Developer will let me continue this work. </p>
    <h2>Current Focus: JavaScript, React</h2>
    </div>
    
    </section>
  </Element>
);

export default AboutMe;
