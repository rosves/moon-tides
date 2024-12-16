// import React, { useState, useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { GetCookie } from "../services/cookies";

// function EditNote() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [noteData, setNoteData] = useState({ title: "", content: "" });

//   useEffect(() => {
//     // Récupérer les détails de la note depuis l'API
//     async function fetchNote() {
//       const token = GetCookie("token");
//       try {
//         const response = await fetch(`http://127.0.0.1:8000/api/getentries/${id}`, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         if (response.ok) {
//           const data = await response.json();
//           setNoteData(data); // Remplir les champs
//         } else {
//           console.log("Erreur lors de la récupération :", response.status);
//         }
//       } catch (error) {
//         console.log("Erreur réseau :", error);
//       }
//     }
//     fetchNote();
//   }, [id]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNoteData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const token = GetCookie("token");
//     try {
//       const response = await fetch(`http://127.0.0.1:8000/api/editEntries/${id}`, {
//         method: "PATCH",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify(noteData),
//       });
//       if (response.ok) {
//         alert("Note updated successfully!");
//         navigate("/Diary");
//       } else {
//         console.log("Erreur lors de la mise à jour :", response.status);
//       }
//     } catch (error) {
//       console.log("Erreur réseau :", error);
//     }
//   };

//   return (
//     <div className="edit-note-container">
//       <h1>Edit Note</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="title"
//           placeholder="Title"
//           value={noteData.title}
//           onChange={handleInputChange}
//           required
//         />
//         <textarea
//           name="content"
//           placeholder="Content"
//           value={noteData.content}
//           onChange={handleInputChange}
//           required
//         ></textarea>
//         <button type="submit">Update Note</button>
//       </form>
//     </div>
//   );
// }

// export default EditNote;
