import React from "react";

import '../componentsStyle/Headerstyle.css';
import { Link } from "react-router-dom/dist";

function Header(){
    return(
        <nav>
            <div className="menu-bar">
                <Link to='Portfolio/' className="menubar-link">Home</Link>
                <Link to='Portfolio/about' className="menubar-link">About</Link>
                <Link to='Portfolio/project' className="menubar-link">Project</Link>
                <Link to='Portfolio/education' className="menubar-link">Education</Link>
                <Link to='Portfolio/skills' className="menubar-link">skills</Link>
            </div>
        </nav>
    );
}

export default Header;