import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./Header.scss" ;
import { ReactComponent as Logo } from '../assets/Moon Tides.svg';
import { ReactComponent as LoginLogo } from '../assets/radix-icons_avatar.svg';
import { ReactComponent as Line } from '../assets/Line.svg';

function Header2() {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
      setIsDropdownOpen((prev) => !prev);
    };
    
    return(
        // Global container
        
        <div className="header_container">
            {/* container */}
        <header className="header_nobg">
            {/* Logo and login */}
            <div className="top_part">
            <Link to='/' className="logo"><Logo width="260" height="66" alt="Moon Tides Logo" /></Link>
            <Link to='/' className="login_logo"><LoginLogo width="30" height="30" alt="Login" /></Link>
           </div>
           {/* End - Logo and login */}
           {/* Navigation */}
           <nav className="nav">
           <ul className="nav_list">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/About">About</Link>
              </li>
              <li>
                <Link to="/Article">Article</Link>
              </li>
              <li>
                <Link to="/Diary">Diary</Link>
              </li>
              <li>
                <Link to="/LunarCalendar">Lunar Calendar</Link>
              </li>
              {/* Dropdown for Practices */}
              <li className="dropdown">
                <button className="dropdown_btn" onClick={toggleDropdown}>
                  Practices
                </button>
                {isDropdownOpen && (
                  <ul className="dropdown_menu">
                    <li>
                      <Link to="/Rituals">Rituals</Link>
                    </li>
                    <li>
                      <Link to="/Affirmations">Affirmations</Link>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
            </nav>
            {/* End - Navigation */}
        </header> 
        {/* End - Container */}
        </div>
        // End - Global container
    )
}

export default Header2;