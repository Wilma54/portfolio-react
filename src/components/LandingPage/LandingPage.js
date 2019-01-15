import React, {Component} from 'react';
// import Winter from '../../Images/Winter.jpeg';
import styles from './LandingPage.module.css';
import Bgtrial from '../../Images/Bgtrial.jpeg';

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
<div>
<img src={Bgtrial} className={styles.bgtrial} alt="bgtrial"/>
    {/* <img src={Winter} className={styles.winter} alt="winter"/> */}
    <div>
    <h2>Driven Student Frontend Developer</h2>
    <p>{this.state.temp}</p>
    
</div>
</div>
         );
        }
    }

 


export default Landingpage;