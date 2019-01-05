import React from "react";
import { Element } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Contact = () => (
    <Element name="Contact">
<section>
<p>Contact</p>
    <div>      
        <FontAwesomeIcon icon= "envelope"  />     
        <FontAwesomeIcon icon={['fab','linkedin']}/>
        <FontAwesomeIcon icon={['fab','github']}/>
    </div>
</section>

    </Element>
);
   
export default Contact;