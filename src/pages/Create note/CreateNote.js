import React, { useState, useEffect } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import Header2 from "../../components/Header2";
import "./CreateNote.scss";
import Instagram from "../../components/Instagram";
import Footer from "../../components/Footer";
import { GetCookie } from "../../services/cookies";

function CreateNote() {
  const location = useLocation();
  const { diary = [] } = location.state || {}; // Récupère diary ou utilise un tableau vide
  const { id } = useParams(); // ID de la note (s'il s'agit d'une modification)
  const navigate = useNavigate();
  const [entry, setEntry] = useState({ title: "", date: "", note: "" });

  const currentDate = new Date().toISOString().split("T")[0];

  // Charger une note existante si l'ID est défini
  useEffect(() => {
    if (id) {
      const noteToEdit = diary.find((entry) => entry.id === parseInt(id, 10));
      if (noteToEdit) {
        setEntry({
          title: noteToEdit.noteTitle || "",
          date: noteToEdit.noteDate || "",
          note: noteToEdit.noteContent || "",
        });
      } else {
        console.error("Note not found for editing.");
      }
    }
  }, [id, diary]);

  // Fonction pour créer une note
  const createNote = async (content, title) => {
    const token = GetCookie("token");
    try {
      const response = await fetch("http://127.0.0.1:8000/api/createEntries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ content, title }),
      });
      return response;
    } catch (error) {
      console.error("The note is not created", error);
      throw error;
    }
  };

  // Fonction pour modifier une note
  const editNote = async (id, content, title) => {
    const token = GetCookie("token");
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/editEntries/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ content, title }),
      });
      return response;
    } catch (error) {
      console.error("The note is not updated", error);
      throw error;
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEntry((prevEntry) => ({ ...prevEntry, [name]: value }));
  };

  const handleDateChange = (e) => {
    const newDate = e.target.value;

    if (newDate < currentDate) {
      alert("The date can't be before today.");
      setEntry((prevEntry) => ({ ...prevEntry, date: currentDate }));
    } else {
      setEntry((prevEntry) => ({ ...prevEntry, date: newDate }));
    }
  };

  const handleSave = async () => {
    if (!entry.title.trim() || !entry.note.trim()) {
      alert("Title and note content cannot be empty.");
      return;
    }

    try {
      if (id) {
        // Modifier une note existante
        const response = await editNote(id, entry.note, entry.title);
        if (response.ok) {
          console.log("Note updated successfully!");
          navigate("/Diary");
        } else {
          const data = await response.json();
          console.error("API Error while updating:", data.error || "An error occurred.");
        }
      } else {
        // Créer une nouvelle note
        const response = await createNote(entry.note, entry.title);
        if (response.ok) {
          console.log("Note saved successfully!");
          navigate("/Diary");
        } else {
          const data = await response.json();
          console.error("API Error while creating:", data.error || "An error occurred.");
        }
      }
    } catch (error) {
      console.error("Error while saving the note:", error);
    }
  };

  const handleCancel = () => {
    navigate("/Diary");
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
              onChange={handleDateChange}
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
          <button onClick={handleSave}>{id ? "Update" : "Save"}</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      </div>
      <Instagram />
      <Footer />
    </div>
  );
}

export default CreateNote;
