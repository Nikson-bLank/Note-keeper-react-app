import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [newNote, setNewNote] = useState([]);

  function addNote(notes) {

    setNewNote((prevNewNote) => {
      return [
        ...prevNewNote,
        notes
      ]
    });

  };


  function deleteNote(id) {

    setNewNote(prevNewNotes => {
      return prevNewNotes.filter((noteItems, index) => {
        return index === !id
      });
    });


  };



  return (
    <div>
      <Header />
      <CreateArea
        onAdd={addNote}
      />
      {newNote.map((noteItems, index) => {
        return (<Note
          key={index}
          id={index}
          title={noteItems.title}
          content={noteItems.content}
          onDelete={deleteNote}

        />);
      })}


      <Footer />
    </div>
  );
}

export default App;
