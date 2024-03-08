import React from "react";

import '../componentsStyle/Skillsstyle.css';

function Skills(){
    return(
        <div className="skills-body">
            <div className="Language-body skills-component">
                <br /><u>LANGUAGES</u>
                <div className="list">
                    <br />java <br />
                    C <br />
                    HTML <br />
                    CSS <br />
                </div>
            </div>
            <div className="Framework-body skills-component">
                <br /><u>FRAMEWORK/LIBRARIES</u>
                <div className="list">
                    <br />Spring-boot<br />
                    Reactjs<br />
                    Pandas<br />
                    Numpy<br />
                    Firebase<br />
                </div>
            </div>
            <div className="DevlopmentTools-body skills-component">
                <br /><u>DEVLOPMENT TOOLS</u>
                <div className="list">
                    <br />Github<br />
                    Git<br />
                    Terminal<br />
                </div>
            </div>
            <div className="Databases-body skills-component">
                <br /><u>DATABASES</u>
                <div className="list">
                    <br />MongoDB<br />
                    SQL<br />
                </div>
            </div>
        </div>
    );
}

export default Skills;