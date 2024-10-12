import React, { useState } from 'react';

function Note({ note, deleteNote, editNote }) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);

  const handleSave = () => {
    editNote({ ...note, title, content });
    setIsEditing(false);
  };

  return (
    <div className="note">
      {isEditing ? (
        <div>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          <h3>{note.title}</h3>
          <p>{note.content}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => deleteNote(note.id)}>Delete</button>
        </div>
      )}
    </div>
  );
}

export default Note;
