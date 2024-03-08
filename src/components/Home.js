import React from "react";

import '../componentsStyle/Homestyle.css';

function Home(){
    return(
        <div className="LandingPage">
            <div className="LandingPage-left-box">
                <div className="name-head">
                    Pranjul Khankriyal
                </div>
                <div className="designation-box">
                    Software devloper
                </div>
                <div className="quote">
                just a regular person who <br/>
                loves devloping.
                </div>
            </div>
            <img src={require("../images/avatar.jpg")} className="avatar" alt="profile-image1"/>
        </div>
    );
}

export default Home;