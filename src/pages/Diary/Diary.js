import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header2 from "../../components/Header2";
import NoteCard from "../Note/Notecard";
import "./Diary.scss";
import Instagram from "../../components/Instagram";
import Footer from "../../components/Footer";
import Practices from "../../components/Practices";
import { GetCookie } from "../../services/cookies";

function Diary() {
  const [diary, setDiary] = useState([]); // Stockage des notes
  const navigate = useNavigate();
  const [notes, setNotes] = useState([]);

  // Fonction pour récupérer toutes les notes
  async function fetchEntries() {
    try {
      const token = GetCookie("token"); // Récupération du token
      const response = await fetch("http://127.0.0.1:8000/api/getentries", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json(); // Données retournées par l'API
        setDiary(data.notedata); // Stockage dans l'état
      } else {
        console.error("Erreur dans la réponse :", response.status);
      }
    } catch (error) {
      console.error("Erreur dans la récupération des notes :", error);
    }
  }

  const handleDelete = (id) => {
    setDiary((prevDiary) => prevDiary.filter((note) => note.id !== id));
  };
  
  function handleEditNote(note) {
    console.log("Editing note:", note); // Debug
    if (!note || !note.id) {
      console.error("Note or note.id is not defined");
      return;
    }
    
    navigate(`/edit/${note.id}`, { state: { note } });
  }

  // Naviguer pour créer une nouvelle note
  function handleCreateNote() {
    navigate("/create");
  }

  // Récupération des données au chargement du composant
  useEffect(() => {
    fetchEntries();
  }, []);

  return (
    <div>
      <Header2 />
      <div className="diaryentries_container">
        <h1>
          <span>M</span>y Diary
        </h1>

        <div className="controls_container">
          <button onClick={handleCreateNote}>New Entry</button>
        </div>

        <section className="entriesbox_container">
          {diary.length > 0 ? (
            diary.map((note) => (
              <NoteCard
                key={note.id}
                note={note}
                onDelete={() => handleDelete(note.id)}
                onEdit={() => handleEditNote(note)}
              />
            ))
          ) : (
            <p className="no_entries">
              You don’t have any entries yet. Click "new entry" to start your
              diary!
            </p>
          )}
        </section>
      </div>
      <Practices />
      <Instagram />
      <Footer />
    </div>
  );
}

export default Diary;
