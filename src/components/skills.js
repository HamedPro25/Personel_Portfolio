import React, { Component } from 'react';
class Skills extends React.Component {
    render() { 
        return (
        <div className="skills section" id="skills">
            <div className="max-width">
                <h2 className="title">My Skills</h2>
                <div className="skills-content">
                    <div className="column left">
                        <div className="text">My creative skills</div> 
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <a href="#">Read more</a>
                    </div>
                    <div className="column right">
                        <div className="bars">
                            <div className="info">
                                <span>Python</span>
                                <span>90%</span>
                                
                            </div> 
                            <div className="line Python"></div>
                        </div>
                        <div className="bars">
                            <div className="info">
                                <span>Java</span>
                                <span>80%</span>
                                
                            </div> 
                            <div className="line Java"></div>
                            
                        </div>
                        <div className="bars">
                            <div className="info">
                                <span>MERN Stack</span>
                                <span>70%</span>
                                
                            </div> 
                            <div className="line MERN"></div>
                        </div>
                        <div className="bars">
                            <div className="info">
                                <span>Algorithms</span>
                                <span>90%</span>
                                
                            </div> 
                            <div className="line algo"></div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>);
    }
}
 
export default Skills;