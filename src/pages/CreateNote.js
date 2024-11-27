import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Utilisation de useNavigate

function CreateNote() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [color, setColor] = useState("color1");
  const navigate = useNavigate(); // Hook de navigation

  const handleSaveNote = () => {
    const newNote = {
      id: Date.now(), // unique ID based on timestamp
      title,
      content,
      date: new Date().toLocaleDateString(),
      color,
    };

    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    savedNotes.push(newNote);
    localStorage.setItem("notes", JSON.stringify(savedNotes));

    // Utilisation de navigate pour rediriger vers la page Diary
    navigate("/Diary");
  };

  return (
    <div>
      <h2>Create a Note</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <div>
        <button onClick={() => setColor("color1")}>Color 1</button>
        <button onClick={() => setColor("color2")}>Color 2</button>
        <button onClick={() => setColor("color3")}>Color 3</button>
      </div>
      <button onClick={handleSaveNote}>Save Note</button>
    </div>
  );
}

export default CreateNote;
