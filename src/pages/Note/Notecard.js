import React from "react";
import "./NoteCard.scss";
import { GetCookie } from "../../services/cookies"; // Assurez-vous que cette fonction est bien définie

function NoteCard({ note, onDelete, onEdit }) {



  function formatDate(dateString) {
    const date = new Date(dateString); // Convertir la chaîne en objet Date
    return new Intl.DateTimeFormat("en-US", { year: "numeric", month: "2-digit", day: "2-digit" }).format(date);
  }
  
  // Fonction pour supprimer la note
  const handleDelete = async (id) => {
    const token = GetCookie("token"); // Récupérer le token depuis le cookie
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/deleteEntries/${id}`, {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      });

      if (response.ok) {
        console.log("Note deleted successfully");
        onDelete(id); // Appel du callback pour retirer la note du DOM dans le composant parent
      } else {
        const data = await response.json();
        console.error("Error deleting note:", data.error || "Unknown error");
      }
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  const handleEdit = () => {
    const updatedTitle = prompt("Enter new title", note.noteTitle);
    const updatedContent = prompt("Enter new content", note.noteContent);

  
    if (updatedTitle && updatedContent) {
      onEdit(note.id, { title: updatedTitle, content: updatedContent });
    }
  };

  return (
    <div className="entry_box" style={{ backgroundColor: note.color || "#D4A373" }}>
      <div className="note_content" onClick={() => onEdit(note.id)}>
        <p className="note_title">{note.noteTitle || "Untitled"}</p>
        <p className="note_date">{formatDate(note.noteDate) || "No date"}</p>
      </div>
      <div className="note_actions">
        <button className="edit-btn" onClick={() => handleEdit}>Edit</button>
        <button className="delete-btn" onClick={() => handleDelete(note.id)}>Delete</button>
      </div>
    </div>
  );
}

export default NoteCard;
