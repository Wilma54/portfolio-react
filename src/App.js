import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Backdrop from "./components/Backdrop/Backdrop";
import AboutMe from "./components/Aboutme/AboutMe";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import LandingPage from "./components/LandingPage/LandingPage";
import Education from './components/Education/Education';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faUser,faFemale, faChartBar, faUniversity, faFile
} from "@fortawesome/free-solid-svg-icons";



library.add(fab, faUser,faEnvelope, faFemale, faChartBar, faUniversity,
  faFile
);

class App extends Component {
  state = {
    sidebarOpen: false
  };


  sidebarToggleClickHandler = () => {
    this.setState(prevState => {
      return { sidebarOpen: !prevState.sidebarOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sidebarOpen: false });
  };

  render() {
    let backdrop;

    if (this.state.sidebarOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <div style={{ height: "100%" }}>
        <Navbar drawerClickHandler={this.sidebarToggleClickHandler} />
        <Sidebar
          show={this.state.sidebarOpen}
          hide={this.sidebarToggleClickHandler}
        />
        {backdrop}
        {/*       
        <main className="susie">
      <h1>Susanne Pettersson</h1>
      <h2>Student - Frontend Developer</h2>
      <h2>Student - Frontend Developer</h2>
      <h2>Student - Frontend Developer</h2>
      <h2>Student - Frontend Developer</h2>
      <h2>Student - Frontend Developer</h2>
      <h2>Student - Frontend Developer</h2>
      </main> */}
        <LandingPage />

        <AboutMe />
        <Skills />
        <Education/>
        <Contact />
      </div>
    );
  }
}

export default App;
