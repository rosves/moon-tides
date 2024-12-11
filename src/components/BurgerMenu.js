import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './BurgerMenu.scss'; 

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  return (
    <div className="burger-menu">
      {/* Bouton Burger */}
      <button className={`burger-button ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Menu déroulant */}
      <div className={`menu ${isOpen ? 'show' : ''}`}>
        <ul>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Article">Article</Link></li>
          <li><Link to="/Diary">Diary</Link></li>
          
          <li><Link to="/LunarCalendar">Lunar Calendar</Link></li>
          <li className="dropdown">
              <button className="dropdown_btn" onClick={toggleDropdown}>
                Practices
              </button>
              {isDropdownOpen && (
                <ul className="dropdown_menu active">
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
      </div>
    </div>
  );
};

export default BurgerMenu;
