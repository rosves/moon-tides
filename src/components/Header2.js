import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import { ReactComponent as Logo } from '../assets/Moon Tides.svg';
import { ReactComponent as LoginLogo } from '../assets/radix-icons_avatar.svg';
import { ReactComponent as LogoutLogo } from '../assets/logout.svg';
import BurgerMenu from "./BurgerMenu";
import { GetCookie, setCookie, RemoveCookie } from "../services/cookies";  // Assurez-vous que GetCookie est bien importé

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

  // Vérifie si l'utilisateur est connecté en recherchant le token
  const token = GetCookie("token");

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

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (validateForm()) {
      try {
        const apiUrl = isSignUp 
          ? 'http://127.0.0.1:8000/api/register' 
          : 'http://127.0.0.1:8000/api/login';
  
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: formData.email,
            password: formData.password,
            ...(isSignUp && { username: formData.username } ),
          }),
        });
  
        const data = await response.json();
  
        if (response.ok) {
          setSuccess(isSignUp ? 'Signup successful!' : 'Login successful!');
          setCookie('token', data.token, 1);  // Sauvegarde le token dans les cookies
        } else {
          // Gestion des erreurs spécifiques
          if (data.error === 'Email déjà enregistré') {
            setErrors({ email: 'This email is already in use.' });
          } else {
            setErrors({ error: data.error || 'An error occurred.' });
          }
        }
      } catch (error) {
        setErrors({ error: 'Network error. Please try again later.' });
      }
    }
  };

  // Fonction pour la déconnexion
  const handleLogout = () => {
    RemoveCookie("token");  // Supprimer le token à la déconnexion
    window.location.reload();  // Recharger la page pour mettre à jour l'interface
  };

  return (
    <div className="header_container" id="header_container">
      <header className="header_nobg">
        <div className="top_part">
          <BurgerMenu />
          <Link to="/" className="logo">
            <Logo width="260" height="66" alt="Moon Tides Logo" />
          </Link>
          {/* Affichage conditionnel de LoginLogo ou LogoutLogo */}
          {token ? (
            <button className="login_logo" onClick={handleLogout}>
              <LogoutLogo width="30" height="30" alt="Logout" />
            </button>
          ) : (
            <button className="login_logo" onClick={handleOverlayOpen}>
              <LoginLogo width="30" height="30" alt="Login" />
            </button>
          )}
          <button className="burger_btn" onClick={toggleBurgerMenu}>
            ☰
          </button>
        </div>

        <nav className={`nav ${isBurgerMenuOpen ? "nav_open" : ""}`}>
          <ul className="nav_list">
            <li>
              <Link to="/Admin">About</Link>
            </li>

            {/* Les liens "Article" et "Diary" n'apparaissent que si l'utilisateur est connecté */}
            {token && (
              <>
                <li>
                  <Link to="/Article">Article</Link>
                </li>
                <li>
                  <Link to="/Diary">Diary</Link>
                </li>
              </>
            )}

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
}

export default Header;
