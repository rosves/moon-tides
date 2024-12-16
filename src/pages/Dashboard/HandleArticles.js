import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/Moon Tides.svg";
import "./Admin.scss";

const HandleArticle = () => {
  const [article, setArticle] = useState([
    { id: 1, title: "title", content: "content content content content content content content" },
    { id: 2, title: "title", content: "content content content content content content content" },
    // autres articles...
  ]);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this article?")) {
      setArticle(article.filter((article) => article.id !== id));
      alert("Article deleted successfully!");
    }
  };

  // État pour gérer le contenu de la section editable
  const [editableContent, setEditableContent] = useState(`
    Text...<br />
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in arcu et libero fermentum dictum. 
    Vivamus et justo eros. Suspendisse potenti. Proin sodales nisi a mauris volutpat, sed vulputate lorem pulvinar.
    Mauris in nisl a libero pulvinar dignissim non nec nisi. Nulla facilisi. Proin in massa eget orci hendrerit tincidunt. 
    Quisque viverra velit vel dolor volutpat, in dignissim enim fermentum.
    <br /><br />
    Plus de contenu pour tester le défilement... Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Necessitatibus, impedit! At tempora earum corporis id!
  `);

  return (
    <div className="handle_container">
      {/* Sidebar */}
      <aside className="sidebar">
        <Link to="/" className="logo">
          <Logo width="260" height="66" alt="Moon Tides Logo" />
        </Link>
        <nav>
          <ul>
            <li><a href="/Admin">Dashboard</a></li>
            <li><a href="/HandleArticle" className="active">Articles</a></li>
          </ul>
        </nav>
      </aside>

      {/* Zone principale */}
      <main className="main-content">
        <h2>Articles</h2>
        <section className="article-section">
          <table className="array">
            <thead>
              <tr>
                <th>Title</th>
                <th>Content</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {article.map((article) => (
                <tr key={article.id}>
                  <td>{article.title}</td>
                  <td>{article.content}</td>
                  <td>
                    <button onClick={() => handleDelete(article.id)}>Supprimer</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Contenu éditable */}
        <h2>Add articles</h2>
        <div
          className="article-container"
          contentEditable
          suppressContentEditableWarning={true} // Evite les warnings React
          onInput={(e) => setEditableContent(e.currentTarget.innerHTML)}
          dangerouslySetInnerHTML={{ __html: editableContent }}
        ></div>
        <div className="buttons">
          <button className="save-btn">Save</button>
          <button className="cancel-btn" onClick={() => setEditableContent("")}>Cancel</button>
        </div>
      </main>
    </div>
  );
};

export default HandleArticle;