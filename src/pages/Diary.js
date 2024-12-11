import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header2 from "../components/Header2";
import NoteCard from "../pages/Notecard";
import "./Diary.scss";

function Diary() {
  const [notes, setNotes] = useState([]);
  const navigate = useNavigate();

  // Charger les notes depuis localStorage
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(savedNotes);
  }, []);

   // Supprimer une note
   const handleDeleteNote = (noteId) => {
     const updatedNotes = notes.filter((note) => note.id !== noteId);
     setNotes(updatedNotes);
     localStorage.setItem("notes", JSON.stringify(updatedNotes));
   };

 // Naviguer pour éditer une note
 const handleEditNote = (noteId) => {
   navigate(`/edit/${noteId}`);
 };

  return (
    <div>
      <Header2 />
      <div className="diaryentries_container">
        <h1>
          <span>M</span>y Diary
        </h1>

        <div className="controls_container">
          <Link to="/create">
            <button>new entry</button>
          </Link>
        </div>

        <section className="entriesbox_container">
          {notes.length > 0 ? (
            notes.map((note) => (
              <NoteCard
                key={note.id}
                note={note}
                onDelete={handleDeleteNote}
                onEdit={handleEditNote}
              />
            ))
          ) : (
            <p className="no_entries">You don’t have any entries yet. Click "new entry" to start your diary!</p>
          )}
        </section>
      </div>
    </div>
  );
}

export default Diary;
