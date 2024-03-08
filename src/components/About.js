import React from "react";
import '../componentsStyle/Aboutstyle.css';

function About(){
    return(
        <div className="about-body">
            <div className="hello-name">
                <div className="hello-box">HELLO</div>
                <div className="name-box">I AM PRANJUL</div>
            </div>
            <div className="about-detail">
                <div className="vl"></div>
                <div className="about">
                    Hello there! I am Pranjul Khankriyal.<br/>
                    I'm currently learning React and DSA in java.<br/>
                    I'm B.tech 3rd yr 7th sem student in Institute Of Technology Gopeshwar(I.T.G).
                </div>
            </div>
        </div>
    );
}

export default About;
