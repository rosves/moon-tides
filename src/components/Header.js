import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import { ReactComponent as Logo } from '../assets/Moon Tides.svg';
import { ReactComponent as LoginLogo } from '../assets/radix-icons_avatar.svg';
import BurgerMenu from "./BurgerMenu";
import { setCookie } from "../services/cookies";

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");


  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);
  const toggleBurgerMenu = () => setIsBurgerMenuOpen((prev) => !prev);
  const handleOverlayOpen = () => setIsOverlayOpen(true);
  const handleOverlayClose = () => {
    setIsOverlayOpen(false);
    setErrors({});
  };
  const toggleForm = () => {
    setIsSignUp((prev) => !prev);
    setErrors({});
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validateForm = () => {
    let tempErrors = {};
    if (isSignUp && !formData.username.trim()) {
      tempErrors.username = "Username is required.";
    }
    if (!validateEmail(formData.email)) {
      tempErrors.email = "Invalid email address.";
    }
    if (formData.password.length < 8) {
      tempErrors.password = "Password must be at least 8 characters.";
    }
    if (isSignUp && !/[!@#$%^&*]/.test(formData.password)) {
      tempErrors.password = "Password must contain at least one special character.";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

   const handleSubmit = async (e) => {  // Ajouter async ici
    e.preventDefault();
    
    if (validateForm()) {
      console.log("Form submitted:", formData);
      
      // Logic pour l'authentification
      const response = await fetch('http://127.0.0.1:8000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,  // Utilisation de formData.email
          password: formData.password  // Utilisation de formData.password
        }),
      });

      const data = await response.json();
      
      if (response.ok) {
        setSuccess('Login successful!');
        console.log(data);  // Utiliser ce User ID pour gérer l'utilisateur connecté
        setCookie('token', data.token, 1);
      } else {
        setErrors({ error: data.error || 'An error occurred.' });
      }

      handleOverlayClose();
    }
  };
 
  return (
    <div className="header_container" id="header_container">
      <header className="header">
        
        <div className="top_part">
          <BurgerMenu/>
          <Link to="/" className="logo">
            <Logo width="260" height="66" alt="Moon Tides Logo" />
          </Link>
          <button className="login_logo" onClick={handleOverlayOpen}>
            <LoginLogo width="30" height="30" alt="Login" />
          </button>
          <button className="burger_btn" onClick={toggleBurgerMenu}>
            ☰
          </button>
        </div>

        <nav className={`nav ${isBurgerMenuOpen ? "nav_open" : ""}`}>
          <ul className="nav_list">
            <li>
              <Link to="/Admin">About</Link>
            </li>
            <li>
              <Link to="/Article">Article</Link>
            </li>
            <li >
              <Link disabled to="/Diary">Diary</Link>
            </li>
            <li>
              <Link to="/LunarCalendar">Lunar Calendar</Link>
            </li>
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
        </nav>
      </header>

      {isOverlayOpen && (
        <div className="overlay">
          <div className="overlay_content">
            <button className="close_btn" onClick={handleOverlayClose}>
              &times;
            </button>
            <h2>{isSignUp ? "Sign Up" : "Login"}</h2>
            <form onSubmit={handleSubmit}>
              {isSignUp && (
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={formData.username}
                  onChange={handleInputChange}
                  required
                />
              )}
              {errors.username && <p className="error">{errors.username}</p>}
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              {errors.email && <p className="error">{errors.email}</p>}
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
              {errors.password && <p className="error">{errors.password}</p>}
              <button type="submit">{isSignUp ? "Sign Up" : "Login"}</button>
            </form>
            <p>
              {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
              <span className="toggle_form" onClick={toggleForm}>
                {isSignUp ? "Login here" : "Sign up here"}
              </span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
