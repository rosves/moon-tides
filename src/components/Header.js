import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss" ;
import { ReactComponent as Logo } from '../assets/Moon Tides.svg';
import { ReactComponent as LoginLogo } from '../assets/radix-icons_avatar.svg';
import { ReactComponent as Line } from '../assets/Line.svg';

function Header() {
    return(
        // Global container
        <div className="header_container">
            {/* container */}
        <header className="header">
            {/* Logo and login */}
            <div className="top_part">
            <Link to='/' className="logo"><Logo width="260" height="66" alt="Moon Tides Logo" /></Link>
            <Link to='/' className="login_logo"><LoginLogo width="30" height="30" alt="Login" /></Link>
           </div>
           {/* End - Logo and login */}
           {/* Navigation */}
           <nav className="nav">
                <Link to ='/LunarCalendar'className="link"> Lunar Calendar</Link>
                <Line className="link_line"/>
                <Link to ='/Practice' className="link">Practice</Link>
                <Line className="link_line"/>
                <Link to ='/Diary'className="link">Journal's entries</Link>
                <Line className="link_line"/>
                <Link to ='/About'className="link">About Hitomi</Link>
                <Line className="link_line"/>
                <Link to ='/Article'className="link">Articles</Link>
            </nav>
            {/* End - Navigation */}
        </header> 
        {/* End - Container */}
        </div>
        // End - Global container
    )
}

export default Header;