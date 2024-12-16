import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from '../../assets/Moon Tides.svg';
import "./Admin.scss";

const AdminPage = () => {
  const [users, setUsers] = useState([
    { id: 1, email: "example@example.fr", username: "annies75003", role: "ROLE_USER" },
    { id: 2, email: "example@example.fr", username: "annies75003", role: "ROLE_USER" },
    { id: 3, email: "example@example.fr", username: "annies75003", role: "ROLE_USER" },
    { id: 4, email: "example@example.fr", username: "annies75003", role: "ROLE_USER" },
    { id: 5, email: "example@example.fr", username: "annies75003", role: "ROLE_USER" },
    { id: 6, email: "example@example.fr", username: "annies75003", role: "ROLE_USER" },
    { id: 7, email: "example@example.fr", username: "annies75003", role: "ROLE_USER" },
    { id: 8, email: "example@example.fr", username: "annies75003", role: "ROLE_USER" },
    { id: 9, email: "example@example.fr", username: "annies75003", role: "ROLE_USER" },
    { id: 10, email: "example@example.fr", username: "annies75003", role: "ROLE_USER" },
    { id: 11, email: "example@example.fr", username: "annies75003", role: "ROLE_USER" },
    { id: 12, email: "example@example.fr", username: "annies75003", role: "ROLE_USER" },
  ]);

  const [isRitualSaved, setIsRitualSaved] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);




  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      setUsers(users.filter((user) => user.id !== id));
      alert("User deleted successfully!");
    }
  };

  const handleSaveRituals = () => {
    setIsRitualSaved(true);
    setShowSuccessPopup(true);
  };

  const closeSuccessPopup = () => {
    setShowSuccessPopup(false);
  };

  return (
    <div className="admin-page">
      {/* Sidebar */}
      <aside className="sidebar">
      <Link to="/" className="logo">
            <Logo width="260" height="66" alt="Moon Tides Logo" />
          </Link>
        <nav>
          <ul>
           <a href="/Admin" className="active"><li>Dashboard</li></a>
            <a href="/HandleArticle"><li>Articles</li></a>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* Users Section */}
        <section className="users-section">
          <h2>Users</h2>
          <table>
            <thead>
              <tr>
                <th>Email</th>
                <th>Username</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.email}</td>
                  <td>{user.username}</td>
                  <td>{user.role}</td>
                  <td>
                    <button onClick={() => handleDelete(user.id)}>Supprimer</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Rituals Section */}
        <section className="rituals-section">
          <h2>Rituals</h2>
          <div className="rituals-container">
            <div className="ritual-column">
              <h3>Meditation</h3>
              <label>Hitomi's videos</label>
              <input type="text" placeholder="Enter link details" />
              <label>Hitomi's favorites</label>
              <input type="text" placeholder="Enter link details" />
            </div>
            <div className="ritual-column">
              <h3>Yoga</h3>
              <label>Hitomi's videos</label>
              <input type="text" placeholder="Enter link details" />
              <label>Hitomi's favorites</label>
              <input type="text" placeholder="Enter link details" />
            </div>
          </div>
          <div className="buttons">
            <button onClick={handleSaveRituals}>Save</button>
            <button>Cancel</button>
          </div>
        </section>
      </main>

      {/* Popup Success Message */}
      {showSuccessPopup && (
        <div className="popup">
          <div className="popup-content">
            <p>Rituals have been saved successfully!</p>
            <button onClick={closeSuccessPopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPage;
