import React, {Component} from 'react';
import { Element } from "react-scroll";
// import Winter from '../../Images/Winter.jpeg';
import styles from './LandingPage.module.css';
// import Bgtrial from '../../Images/Bgtrial.jpg';
// import styled from 'styled-components';



class Landingpage extends Component {
    state = {  };
    

    componentDidMount() {
        fetch('https://api.openweathermap.org/data/2.5/weather?q=stockholm,se&APPID=f8384513fad5f91ea04d07a2cbf916ec')
          .then(res => res.json())
          .then(json => {
            this.setState({
              temp: json.main.temp
            });
          });
     
      }
   
  
    render() { 
     


    return ( 
   <Element>
<section className={styles.backg}>   
<div className={styles.content}>

<p>{this.state.temp}</p>
</div>
</section>   
</Element>    
)
    }};
        
 
export default Landingpage;