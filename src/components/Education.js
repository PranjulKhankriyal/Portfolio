import React from "react";

import '../componentsStyle/Educationstyle.css';

function Education(){
    return(
        <div className="Education-Body">

            <img src={require("../images/icons/schooleducation.png")} className="schooleducaton1" alt="school" />
            <div className="secondaryEducation">
                Secondary School(10th) <br />
                from Centeral Board of Secondary Education(C.B.S.E) Board <br />
                (2017-18)<br/>
                I score 80%.<br />
            </div>

            <div className="v1"></div>
            <img src={require("../images/icons/schooleducation.png")} className="schooleducaton2" alt="school" />
            <div className="senior-secondaryEducation">
                Senoir Secondary School(10th) <br />
                from Centeral Board of Secondary Education(C.B.S.E) Board <br />
                (2019-20) <br />
                I score 77%.<br />
            </div>

            <div className="v2"></div>
            <img src={require("../images/icons/graduation.png")} className="graduation" alt="school" />
            <div className="graduation-education">
                B.tech In C.S.E(Computer Science & Engineering)<br />
                from Institute Of Technology Gopeshwar(I.T.G). <br />
                (currently in 3rd yr. 6th sem.)
            </div>

            <div className="v3"></div>
            <div className="v5"></div>
            <div className="v6"></div>
        </div>
    );
}

export default Education;