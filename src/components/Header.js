import React from "react";

import '../componentsStyle/Headerstyle.css';
import { Link } from "react-router-dom/dist";

function Header(){
    return(
        <nav>
            <div className="menu-bar">
                <Link to='/' className="menubar-link">Home</Link>
                <Link to='/about' className="menubar-link">About</Link>
                <Link to='/project' className="menubar-link">Project</Link>
                <Link to='/education' className="menubar-link">Education</Link>
                <Link to='/skills' className="menubar-link">skills</Link>
            </div>
        </nav>
    );
}

export default Header;