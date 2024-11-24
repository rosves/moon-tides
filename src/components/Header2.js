import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import { ReactComponent as Logo } from '../assets/Moon Tides.svg';
import { ReactComponent as LoginLogo } from '../assets/radix-icons_avatar.svg';

function Header2() {
  // Toggle for Practices
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);  // État du menu burger

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const toggleBurgerMenu = () => {
    setIsBurgerMenuOpen((prev) => !prev);
  };

  // Overlay for Login and Sign Up
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false); // Toggle between Login and Sign Up forms

  const handleOverlayOpen = () => setIsOverlayOpen(true);
  const handleOverlayClose = () => setIsOverlayOpen(false);

  const toggleForm = () => setIsSignUp((prev) => !prev);

  return (
    <div className="header_container">
      {/* Header */}
      <header className="header_nobg">
        <div className="top_part">
          <Link to="/" className="logo">
            <Logo width="260" height="66" alt="Moon Tides Logo" />
          </Link>
          {/* Login button triggers the overlay */}
          <button className="login_logo" onClick={handleOverlayOpen}>
            <LoginLogo width="30" height="30" alt="Login" />
          </button>
          {/* Burger Menu Button */}
          <button className="burger_btn" onClick={toggleBurgerMenu}>
            ☰
          </button>
        </div>

        {/* Navigation */}
        <nav className={`nav ${isBurgerMenuOpen ? "nav_open" : ""}`}>
          <ul className="nav_list">
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
                <ul className={`dropdown_menu ${isDropdownOpen ? "active" : ""}`}>
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
      </header>

      {/* Overlay for Login and Sign Up */}
      {isOverlayOpen && (
        <div className="overlay">
          <div className="overlay_content">
            <button className="close_btn" onClick={handleOverlayClose}>
              &times;
            </button>
            <h2>{isSignUp ? "Sign Up" : "Login"}</h2>

            {isSignUp ? (
              // Sign Up Form
              <form>
                <input type="text" placeholder="Username" required />
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Password" required />
                <button type="submit">Sign Up</button>
                <p>
                  Already have an account?{" "}
                  <span className="toggle_form" onClick={toggleForm}>
                    Login here
                  </span>
                </p>
              </form>
            ) : (
              // Login Form
              <form>
                <input type="text" placeholder="Username" required />
                <input type="password" placeholder="Password" required />
                <button type="submit">Login</button>
                <p>
                  Don't have an account?{" "}
                  <span className="toggle_form" onClick={toggleForm}>
                    Sign up here
                  </span>
                </p>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Header2;
