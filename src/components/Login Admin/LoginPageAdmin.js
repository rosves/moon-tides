import React, { useState } from 'react';
import './LoginPageAdmin.scss';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Identifiants de l'admin
  const adminEmail = 'admin@exemple.com';
  const adminPassword = 'admin123';

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation des champs
    if (!email || !password) {
      setErrorMessage('All fields must be filled.');
      return;
    }

    // Vérification des identifiants de l'admin
    if (email === adminEmail && password === adminPassword) {
      setErrorMessage('');
      alert('Connexion réussie !');
      // Rediriger l'utilisateur vers la page d'accueil de l'admin
      // Vous pouvez utiliser une bibliothèque comme react-router-dom pour gérer la redirection
      // Exemple : navigate('/home'); (Si vous utilisez react-router)
    } else {
      setErrorMessage('Invalid credentials, please try again.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Admin Login</h2>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Your password"
            />
          </div>
          <button type="submit" className="login-btn">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
