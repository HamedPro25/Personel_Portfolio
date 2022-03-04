import './App.css';
import React, { Component } from 'react';
import Navbar from './components/navbar';
import Home from './components/home';
import Content from './components/about';
import Service from './components/services';
import Skills from './components/skills';
import Contacts from './components/contact';
import Footer from './components/footer';
import Project from './components/projects';
import $ from 'jquery';
class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      'active' : true, 
      'class' : "navbar",
      'class2' : "scroll-up-btn"
    }
    this.scrolup=this.scrolup.bind(this);
  }
  listenScrollEvent = e => {
    if (window.scrollY > 20) {
      console.log("Scroll Down");
      this.setState(
        {
          'class' : 'navbar sticky'
        }
      )

    } else {
      console.log("Scroll Up");
      this.setState(
        {
          'class' : 'navbar'
        }
      );
    }
    if (window.scrollY > 400) {
      this.setState(
        {
          'class2' : 'scroll-up-btn show'
        }
      );
    }
    else{
      this.setState(
        {
          'class2' : 'scroll-up-btn'
        }
      );
    }
  }
  scrolup(){
    window.scrollTo(0,0);
  }
  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent)
  }
  render() { 
    return (<div className="App" >
      <div className={this.state.class2} onClick={this.scrolup}>
        <i className="fas fa-angle-up"></i>
      </div>
    <div className={this.state.class}>
    <Navbar/>
    </div>
    
    <Home />
    <Content />
    <Service />
    <Skills />
    <Project />
    <Contacts />
    <Footer />
  </div>);
  }
}
 
export default App;

