import React from "react";
import "./NoteCard.scss";

function NoteCard({ note, onDelete, onEdit }) {
  return (
    <div className="entry_box" style={{ backgroundColor: note.color || "#D4A373" }}>
      <div className="note_content" onClick={() => onEdit(note.id)}>
        <p>{note.title || "Untitled"}</p>
        <p>{note.date || "No date"}</p>
      </div>
      <div className="note_actions">
        <button className="edit-btn" onClick={() => onEdit(note.id)}>Edit</button>
        <button className="delete-btn" onClick={() => onDelete(note.id)}>Delete</button>
      </div>
    </div>
  );
}

export default NoteCard;
