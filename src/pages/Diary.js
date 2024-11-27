import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header2 from "../components/Header2";
import { ReactComponent as Arrow } from "../assets/arrow.svg";
import "./Diary.scss";

// Fonction principale de Diary
function Diary() {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [noteToDelete, setNoteToDelete] = useState(null);

  // Récupération des notes depuis localStorage
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(savedNotes);
  }, []);

  // Afficher les détails d'une note
  const handleNoteClick = (note) => {
    setSelectedNote(note);
  };

  // Effacer une note
  const handleDeleteNote = (noteId) => {
    setShowDeleteConfirmation(true);
    setNoteToDelete(noteId);
  };

  // Confirmer la suppression
  const confirmDelete = () => {
    const updatedNotes = notes.filter(note => note.id !== noteToDelete);
    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
    setShowDeleteConfirmation(false);
  };

  // Annuler la suppression
  const cancelDelete = () => {
    setShowDeleteConfirmation(false);
    setNoteToDelete(null);
  };

  return (
    <div>
      <Header2 />
      <div className="diaryentries_container">
        <h1>
          <span>M</span>y Diary
        </h1>

        {/* Bouton "New entry" */}
        <div className="controls_container">
          <Link to="/CreateNote">
            <button>New entry</button>
          </Link>
        </div>

        {/* Liste des entrées du journal */}
        <section className="entriesbox_container">
          {notes.map((note) => (
            <div key={note.id} className="row_container">
              <div
                className={`entry_box ${note.color}`}
                onClick={() => handleNoteClick(note)}
              >
                <button onClick={() => handleDeleteNote(note.id)}>X</button>
                <p>{note.title}</p>
                <p>{note.date}</p>
                <div className="arrow">
                  <Arrow />
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Affichage de la note sélectionnée */}
        {selectedNote && (
          <div className="note-detail">
            <button onClick={() => setSelectedNote(null)}>X</button>
            <h2>{selectedNote.title}</h2>
            <p>{selectedNote.date}</p>
            <p>{selectedNote.content}</p>
            <Link to={`/EditNote/${selectedNote.id}`}>Edit Note</Link>
          </div>
        )}

        {/* Confirmation de suppression */}
        {showDeleteConfirmation && (
          <div className="delete-confirmation">
            <p>Are you sure you want to delete this note?</p>
            <button onClick={confirmDelete}>Yes</button>
            <button onClick={cancelDelete}>No</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Diary;
