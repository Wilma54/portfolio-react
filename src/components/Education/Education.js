import React from 'react';
import { Element } from "react-scroll";
import styles from './Education.module.css';



const Education = () => (
   <Element name ="Education">
<section>
  <div className={styles.box}>
<h1 className={styles.labels}>EDUCATION</h1>
<div className={styles.wrapper}>
  <div className={styles.square}>Luleå University of Technology 1996-1999
  <ul>
      <li>Bachelor in Business Adminstration </li>
  </ul>
  </div>
  <div className={styles.square}>University of New South Wales 1999-2000
  <ul>
    <li>Business administration and Computer Science</li>
  </ul>
  </div>
  <div className={styles.square}>Lund University 2000-2001
  <ul>
    <li>Master of Science in Business Administration</li>
  </ul>
  </div>
  <div className={styles.square}>KYH 2018-Present
  <ul>
    <li>Front end Developer</li>
  </ul>
  </div>
</div>
</div>
</section>
</Element>
);

export default Education;