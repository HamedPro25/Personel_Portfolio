import React, { Component } from 'react';
import im2 from '../ressources/dahboard.png'
import im1 from '../ressources/pict1.png'
import im3 from '../ressources/pict2.png'
import pyt from '../ressources/icons/4375050_logo_python_icon.png'
import jav from '../ressources/icons/4373217_java_logo_logos_icon.png'
import ai from '../ressources/icons/2890565_ai_artificial intelligence_automaton_brain_electronics_icon.png'
import cs from '../ressources/icons/5386908_csv_file_format_type_icon.png'
import ag from '../ressources/icons/6018004_chromosome_dna_genetic_helix_molecule_icon.png'
import rea from '../ressources/icons/7423888_react_react native_icon.png'
import js from '../ressources/icons/4518759_js_node_icon.png'
import html5 from '../ressources/icons/317755_badge_html_html5_achievement_award_icon.png'
import css3 from '../ressources/icons/317756_badge_css_css3_achievement_award_icon.png'
import port from '../ressources/port.png'
class Project extends React.Component {
    render() { 
        return (
            <div className="project section">
                <div className="max-width">
                    <h2 className="title">My Projects</h2>
                    <div className="project-content">
                        <div className="card">
                            <div className="box">
                            <h3>Driver Drowsiness and fatigue detection system</h3>
                            <img className="img" src={im1} />
                            <div className="tools">
                                <span><img src={pyt}/></span>
                                <span><img src={cs}/></span>
                                <span><img src={ai}/></span>

                            </div>   

                            </div>
                        </div>
                        <div className="card">
                            <div className="box">
                            <h3>System Management Application</h3>
                            <img className="img" src={im2} />
                            <div className="tools">
                                <span><img src={jav}/></span>
                                <span><img src={cs}/></span>
                            </div>   

                            </div>
                        </div>
                        <div className="card">
                            <div className="box">
                                <h3>Resolution of the problem of multiple alignment of DNA sequences</h3>
                                <img  className="img" src={im3} />
                                <div className="tools">
                                <span><img src={pyt}/></span>
                                <span><img src={ag}/></span>
                                <span><img src={cs}/></span>
                                </div>
                                

                            </div>
                        </div>
                        <div className="card">
                            <div className="box">
                                <h3>Personel Portfolio</h3>
                                <img  className="img" src={port} />
                                <div className="tools">
                                    <span><img src={rea}/></span>
                                    <span><img src={html5}/></span>
                                    <span><img src={css3}/></span>
                                    <span><img src={js}/></span>
                                </div>
                                

                            </div>
                        </div>
                    </div>
                    <a href="https://github.com/HamedPro25">Load more</a>

                </div>

            </div>);
    }
}
 
export default Project;