import React from 'react';
class Contacts extends React.Component {
    render() { 
        return (
        <div className="contacts section" id="contacts">
            <div className="max-width">
                <h2 className="title">Contact me</h2>
                <div className="contacts-content">
                    <div className="column left">
                        <div className="text">Get in Touch</div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <div className="icons">
                            <div className="row">
                                <i className="fas fa-user"></i>
                                <div className="info">
                                    <div className="head">Name</div>
                                    <div className="sub-title">Hamed LAOUZ</div>
                                </div>
                            </div>
                            <div className="row">
                                <i className="fas fa-map-marker-alt"></i>
                                <div className="info">
                                    <div className="head">Adress</div>
                                    <div className="sub-title">Biskra, Algeria</div>
                                </div>
                            </div>
                            <div className="row">
                                <i className="fas fa-envelope"></i>
                                <div className="info">
                                    <div className="head">Email</div>
                                    <div className="sub-title">hamed.laouz@gmail.com</div>
                                </div>
                            </div>
                        </div> 
                    </div>
                    <div className="column right">
                        <div className="text">Message me</div>
                            <form action="#">
                                <div className="fields">
                                    <div className="field name">
                                        <input  type="text" placeholder="Name"   />
                                    </div>
                                    <div className="field email">
                                        <input  type="email" placeholder="Email"   />
                                    </div>
                                </div>
                                <div className="field">
                                    <input  type="text" placeholder="Subject"   />
                                </div>
                                <div className="field textarea">
                                    <textarea   placeholder="tell me anything" rows="10" cols="30"    ></textarea>
                                </div>
                                <div className="button">
                                    <button type="submit">Send message</button>
                                </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>);
    }
}
 
export default Contacts;