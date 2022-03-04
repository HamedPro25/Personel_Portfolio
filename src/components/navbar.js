import React, { Component } from 'react';

export default class Navbar  extends Component{
    constructor(props){
        super(props);
        this.state={
            'class' : 'menu',
            'active' : false
        };
        this.clickbtn=this.clickbtn.bind(this);
    }
    clickbtn(e){
        if(this.state.active){
            this.setState({
                'class' : 'menu',
                'active' : false
            })
        }
        else{
            this.setState({
                'class' : 'menu active',
                'active' : true
            })
        }
    }
    render() {
        return(
            <div className="max-width">
              <div className="logo">
                <a href="#">
                  Portfolio
                </a>
            </div>
            <ul className={this.state.class}>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Skills</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Contact me</a></li>
            </ul>
            <div className="menu-btn" onClick={this.clickbtn}>
                <i className="fas fa-bars"></i>
            </div>
            </div>
          
        );
    }
}