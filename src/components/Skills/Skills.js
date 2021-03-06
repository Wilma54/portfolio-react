import React from 'react';
import { Element } from 'react-scroll';
// import AboutMe from '../Aboutme/AboutMe';
// import './Skills.css';
import styles from './Skills.module.css';
import SkillBar from 'react-skillbars';

const skills = [
    {type: "HTML", level: 70},
    {type: "CSS", level: 60},
    {type: "JavaScript", level: 60},
    {type: "React", level: 60},
    {type: "SAP", level: 80},
    {type: "ProblemSolver", level: 100},
    {type: "BusinessRelations", level: 100},
  ];
  const colors = {
    bar: " #D7CCE2",
    title: {
    text: 'white',
    textalign: 'left',
    background: '#34194B',
    }
  }


const Skills= () => (
    <Element name="Skills">
    <section className={styles.scro}>
  
    <div className={styles.box}>
<h1 className={styles.labels}>SKILLS</h1>
<div className={styles.skillb}>
<SkillBar skills={skills} 
height={'8vh'} colors={colors} 
 />
 </div>
 </div>
 

    </section>
    </Element>
)

export default Skills;
