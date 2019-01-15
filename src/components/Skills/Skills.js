import React from 'react';
import { Element } from 'react-scroll';
// import AboutMe from '../Aboutme/AboutMe';
// import './Skills.css';
import SkillBar from 'react-skillbars';

const skills = [
    {type: "Java", level: 85},
    {type: "Javascript", level: 75},
  ];
const Skills= () => (
    <Element name="Skills">
    <section>
<h1>SKILLS</h1>
<SkillBar skills={skills}/>

{/* <div id="background-wrap">
    <div class="bubble x1"></div>
    <div class="bubble x2"></div>
    <div class="bubble x3"></div>
    <div class="bubble x4"></div>
    <div class="bubble x5"></div>
    <div class="bubble x6"></div>
    <div class="bubble x7"></div>
    <div class="bubble x8"></div>
    <div class="bubble x9"></div>
    <div class="bubble x10"></div>
</div>

<AboutMe/> */}
    </section>
    </Element>
)

export default Skills;