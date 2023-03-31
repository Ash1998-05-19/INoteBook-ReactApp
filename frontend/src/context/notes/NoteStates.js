import React, { useState } from "react";
import NotesContext from "./NotesContext";

const NoteStates = (props) => {
  const host = "http://localhost:5000";
  let noteinitial = [];
  const [notes, setNotes] = useState(noteinitial);
  //Add a note
  const getNote = async () => {
    //Api call
    const url = `${host}/api/notes/fetchallnotes`;
    const response = await fetch(url, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNjOTIxYjliNzIzOGM2ZjFlNjY1MmM5In0sImlhdCI6MTY3NDEyODI2Mn0.RZdN3-VZIUQLnmhDbl2pV2c35LZvKIZjbmqTW2kckR0",
      },
    });
    const json = await response.json();
    //Logic to add a note

    setNotes(json);
  };
  //Add a note
  const addNote = async (title, description, tag) => {
    //Api call
    const url = `${host}/api/notes/addnote`;
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNjOTIxYjliNzIzOGM2ZjFlNjY1MmM5In0sImlhdCI6MTY3NDEyODI2Mn0.RZdN3-VZIUQLnmhDbl2pV2c35LZvKIZjbmqTW2kckR0",
      },
      body: JSON.stringify({ title, description, tag }), // body data type must match "Content-Type" header
    });
    // eslint-disable-next-line
    const note = await response.json();
    //Logic to add a note
    setNotes(notes.concat(note));
  };

  //Edit a note
  const editNote = async (id, title, description, tag) => {
    //Api call
    const url = `${host}/api/notes/updatenote/${id}`;
    const response = await fetch(url, {
      method: "PUT", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNjOTIxYjliNzIzOGM2ZjFlNjY1MmM5In0sImlhdCI6MTY3NDEyODI2Mn0.RZdN3-VZIUQLnmhDbl2pV2c35LZvKIZjbmqTW2kckR0",
      },
      body: JSON.stringify({ title, description, tag }), // body data type must match "Content-Type" header
    });
    // eslint-disable-next-line
    const json = await response.json();
    //Logic to edit in client
    let newNote = JSON.parse(JSON.stringify(notes));
    for (let index = 0; index < newNote.length; index++) {
      const element = newNote[index];
      if (element._id === id) {
        newNote[index].title = title;
        newNote[index].description = description;
        newNote[index].tag = tag;
        break;
      }
    }
    setNotes(newNote);
  };

  //Delete a note
  const deleteNote = async (id) => {
    //Api call
    const url = `${host}/api/notes/deletenote/${id}`;
    const response = await fetch(url, {
      method: "DELETE", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNjOTIxYjliNzIzOGM2ZjFlNjY1MmM5In0sImlhdCI6MTY3NDEyODI2Mn0.RZdN3-VZIUQLnmhDbl2pV2c35LZvKIZjbmqTW2kckR0",
      },
    });
    // eslint-disable-next-line
    const json = await response.json();

    //LOgic to delete a note
    // console.log(`deletenote with id: ${id}`);
    const newNote = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNote);
  };

  return (
    <NotesContext.Provider
      value={{ notes, addNote, editNote, deleteNote, getNote }}
    >
      {props.children}
    </NotesContext.Provider>
  );
};

export default NoteStates;
