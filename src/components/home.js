import React, { Component } from 'react';
class Home extends Component {
    render() { 
        return (
            <div className="home section" id="home">
            <div className="max-width">
              <div className="home-content">
                <div className="text-1"> Hello, my name is </div>
                <div className="text-2"> Hamed LAOUZ </div>
                <div className="text-3"> And I'm a  <span>Web developer</span></div>
                <a href="#">Hire me</a>
              </div>
            </div>
          </div>
        );
    }
}
 
export default Home;