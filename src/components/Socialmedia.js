import React from "react";

import '../componentsStyle/Socialmediastyle.css';

function Socialmedia(){
    return(
        <div className="social-account">
            <img src={require("../images/icons/github.png")} className="github-icon" alt="logo1"/>
            <img src={require("../images/icons/linkedin.png")} className="linkedin-logo" alt="image2"/>
            <img src={require("../images/icons/twitter.png")} className="twitter-logo" alt="image2"/>
            <div className="vl"></div>
        </div>
    );
}

export default Socialmedia;
