import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditNote() {
  const { noteId } = useParams();
  const navigate = useNavigate(); // Hook de navigation
  const [note, setNote] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [color, setColor] = useState("color1");

  // Charger la note à partir de localStorage
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    const noteToEdit = savedNotes.find((note) => note.id === parseInt(noteId));
    if (noteToEdit) {
      setNote(noteToEdit);
      setTitle(noteToEdit.title);
      setContent(noteToEdit.content);
      setColor(noteToEdit.color);
    }
  }, [noteId]);

  const handleSaveChanges = () => {
    const updatedNote = { ...note, title, content, color, date: new Date().toLocaleDateString() };

    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    const updatedNotes = savedNotes.map((note) =>
      note.id === parseInt(noteId) ? updatedNote : note
    );
    localStorage.setItem("notes", JSON.stringify(updatedNotes));

    // Utilisation de navigate pour rediriger vers la page Diary après sauvegarde
    navigate("/Diary");
  };

  return (
    <div>
      {note && (
        <div>
          <h2>Edit Note</h2>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <div>
            <button onClick={() => setColor("color1")}>Color 1</button>
            <button onClick={() => setColor("color2")}>Color 2</button>
            <button onClick={() => setColor("color3")}>Color 3</button>
          </div>
          <button onClick={handleSaveChanges}>Save Changes</button>
        </div>
      )}
    </div>
  );
}

export default EditNote;
