import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header2 from "../components/Header2";
import "./CreateNote.scss";

function CreateNote() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [entry, setEntry] = useState({ title: "", date: "", note: "" });

  const currentDate = new Date().toISOString().split("T")[0]; // Date actuelle au format YYYY-MM-DD

  // Charger une note existante si on modifie
  useEffect(() => {
    if (id) {
      const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
      const existingNote = savedNotes.find((note) => note.id === parseInt(id));
      if (existingNote) setEntry(existingNote);
    }
  }, [id]);

  // Gérer les changements des champs (pour les autres champs)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEntry((prevEntry) => ({ ...prevEntry, [name]: value }));
  };

  // Valider la date et empêcher une date antérieure
  const handleDateChange = (e) => {
    const newDate = e.target.value;

    // Vérifier si la date est antérieure à aujourd'hui
    if (newDate < currentDate) {
      setEntry((prevEntry) => ({ ...prevEntry, date: currentDate }));
      alert("The date can't be before today.");
    } else {
      setEntry((prevEntry) => ({ ...prevEntry, date: newDate }));
    }

    if (newDate > currentDate) {
      setEntry((prevEntry) => ({ ...prevEntry, date: currentDate }));
      alert("The date can't be after today.");
    } else {
      setEntry((prevEntry) => ({ ...prevEntry, date: newDate }));
    }
  };

  // Sauvegarder la note
  const handleSave = () => {
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    if (id) {
      // Modification de la note existante
      const updatedNotes = savedNotes.map((note) =>
        note.id === parseInt(id) ? { ...entry, id: parseInt(id) } : note
      );
      localStorage.setItem("notes", JSON.stringify(updatedNotes));
    } else {
      // Ajouter une nouvelle note
      entry.id = Date.now();
      savedNotes.push(entry);
      localStorage.setItem("notes", JSON.stringify(savedNotes));
    }
    navigate("/Diary"); // Redirige vers la page du journal
  };

  // Annuler la création/modification
  const handleCancel = () => {
    navigate("/Diary"); // Redirige vers la page du journal
  };

  return (
    <div>
      <Header2 />
      <div className="create_note_container">
        <h1>{id ? "Edit Note" : "New Note"}</h1>
        <div className="note_area">
          <div className="top_area">
            <input
              type="text"
              name="title"
              className="title"
              placeholder="Title / Prompt / Question"
              value={entry.title}
              onChange={handleChange}
            />
            <input
              type="date"
              name="date"
              className="date"
              value={entry.date}
              min={currentDate}
              max={currentDate} 
              onChange={handleDateChange} // Validation de la date ici
            />
          </div>
          <textarea
            name="note"
            className="text"
            placeholder="How do you feel..."
            value={entry.note}
            onChange={handleChange}
          />
        </div>
        <div className="buttons">
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default CreateNote;
