import React, {Component} from 'react';
// import Winter from '../../Images/Winter.jpeg';
// import styles from './LandingPage.module.css';
// import Bgtrial from '../../Images/Bgtrial.jpeg';
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
    //     const Content = styled.div`
    
    //     background-image: url(${Bgtrial});

    //     width: 2000px;
    //     height: 2000px;
    // `;
        return ( 

            <wrapper>

<div>

{/* <Content/> */}
<p>{this.state.temp}</p>
</div>

</wrapper>
// {/* <div>
 
// <div style={{
// backgroundImage: `url(${Bgtrial})`,
// backgroundPosition: 'center',
// backgroundRepeat: 'no-repeat',
// backgroundSize: 'cover', }}
// >
// <h2>Driven Student Frontend Developer</h2>
//
// </div>    

// </div> */}
    

)
  
    }};
        
 
export default Landingpage;