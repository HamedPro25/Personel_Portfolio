import React, { Component } from 'react';
import profile from '../ressources/profile.jpg'
import $ from 'jquery';
class Content extends React.Component {
    render() { 
        return (
                <div className="about section" id="about">
                    <div className="max-width">
                        <h2 className="title">About me</h2>
                        <div className="about-content">
                            <div className="column left">
                                <img src={profile} alt="myPicture" />   
                            </div>
                            <div className="column right">
                               <div className="text">I'm Hamed LAOUZ and I'm a <span>Web developer</span></div> 
                                <p>I am Hamed Laouz. Software Engineer for different types (mobile/desktop) using several programming languages such as: C, JAVA, C# .... <br/>Strong background in problem solving and understanding algorithms.<br /> My interests are also in web development.
I always want to learn new techniques to improve the quality of my work and try to open my mind to other people's ideas.</p>
                                <a href="../ressources/CV_Hamed.pdf"  download="../ressources/CV_Hamed.pdf">Download CV</a>
                            </div>
                        </div>
                    </div>
                </div>
           
            );
    }
}
 
export default Content;