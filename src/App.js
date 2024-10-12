import React, { useState, useEffect } from 'react';
import Note from './components/Note';
import NoteForm from './components/NoteForm';
import './styles.css';

function App() {
  const [notes, setNotes] = useState(() => {
    // Retrieve saved notes from local storage on initial render
    const savedNotes = localStorage.getItem('notes');
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  // Save notes to local storage whenever the notes state changes
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  // Add a new note
  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  // Delete a note
  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  // Edit a note
  const editNote = (updatedNote) => {
    setNotes(notes.map((note) => (note.id === updatedNote.id ? updatedNote : note)));
  };

  return (
    <div className="app">
      <h1>Notes App</h1>
      <NoteForm addNote={addNote} />
      <div className="notes-list">
        {notes.map((note) => (
          <Note key={note.id} note={note} deleteNote={deleteNote} editNote={editNote} />
        ))}
      </div>
    </div>
  );
}

export default App;
