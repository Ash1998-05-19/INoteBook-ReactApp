import React, { useContext, useState } from "react";
import NoteContext from "../context/notes/NotesContext";

const Addnote = () => {
  let context = useContext(NoteContext);
  const { addNote } = context;
  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: "",
  });
  const handleAddNote = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({
      title: "",
      description: "",
      tag: "",
    });
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <form className="container">
        <h2>Add Note</h2>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            style={{ background: "powderblue" }}
            type="text"
            className="form-control"
            id="title"
            placeholder="Title must be atleast 5 characters"
            name="title"
            aria-describedby="emailHelp"
            value={note.title}
            onChange={onChange}
            minLength={5}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            style={{ background: "powderblue" }}
            type="text"
            className="form-control"
            id="description"
            name="description"
            placeholder="Description must be atleast 5 characters"
            value={note.description}
            onChange={onChange}
            minLength={5}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">
            Tag
          </label>
          <input
            style={{ background: "powderblue" }}
            type="text"
            className="form-control"
            id="tag"
            name="tag"
            value={note.tag}
            onChange={onChange}
            required
          />
        </div>
        {/* <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div> */}
        <button
          hidden={note.title.length < 5 || note.description.length < 5}
          onClick={handleAddNote}
        >
          <span>Add</span>
        </button>
      </form>
    </div>
  );
};

export default Addnote;
