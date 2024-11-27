import React from "react";
import "./NoteCard.scss";

function NoteCard({ note }) {
  return (
    <div
      className="entry_box"
      style={{ backgroundColor: note.color }} // Utilise la couleur choisie
    >
      <p>{note.title}</p>
      <p>{note.date}</p>
    </div>
  );
}

export default NoteCard;
