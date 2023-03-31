import React, { useContext, useEffect, useRef, useState } from "react";
import NoteContext from "../context/notes/NotesContext";
import Noteitem from "./Noteitem";
import Addnote from "./Addnote";
import "./button.css";

const Notes = () => {
  let context = useContext(NoteContext);
  const { notes, getNote, editNote } = context;
  useEffect(() => {
    getNote();
    // eslint-disable-next-line
  }, []);
  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({
      id: currentNote._id,
      etitle: currentNote.title,
      edescription: currentNote.description,
      etag: currentNote.tag,
    });
  };
  const ref = useRef(null);
  const refClose = useRef();
  const [note, setNote] = useState({
    id: "",
    etitle: "",
    edescription: "",
    etag: "default",
  });
  const handleClick = (e) => {
    e.preventDefault();
    editNote(note.id, note.etitle, note.edescription, note.etag);
    refClose.current.click();
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Addnote />
      {/* <!-- Button trigger modal --> */}
      <button
        type="button"
        className="btn btn-primary"
        ref={ref}
        hidden={true}
        data-toggle="modal"
        data-target="#exampleModal"
      >
        Launch Edit modal
      </button>

      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content" style={{ background: "#389699" }}>
            <div className="modal-header">
              <h5
                className="modal-title"
                style={{ color: "black" }}
                id="exampleModalLabel"
              >
                Modal title
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body" style={{ color: "black" }}>
              <div className="mb-3">
                <label htmlFor="etitle" className="form-label">
                  Title
                </label>
                <input
                  style={{ background: "powderblue" }}
                  type="text"
                  className="form-control"
                  id="etitle"
                  name="etitle"
                  value={note.etitle}
                  aria-describedby="emailHelp"
                  placeholder="Title must be atleast 5 characters"
                  onChange={onChange}
                  minLength={5}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="edescription" className="form-label">
                  Description
                </label>
                <input
                  style={{ background: "powderblue" }}
                  type="text"
                  className="form-control"
                  id="edescription"
                  placeholder="Description must be atleast 5 characters"
                  value={note.edescription}
                  name="edescription"
                  onChange={onChange}
                  minLength={5}
                  required
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="etag validationDefault01"
                  className="form-label"
                >
                  Tag
                </label>
                <input
                  style={{ background: "powderblue" }}
                  type="text"
                  className="form-control"
                  id="etag validationDefault01"
                  value={note.etag}
                  name="etag"
                  onChange={onChange}
                />
                <div className="invalid-feedback">Please enter a tag</div>
              </div>
            </div>
            <div className="modal-footer" style={{ zIndex: "1" }}>
              <button
                type="button"
                ref={refClose}
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                onClick={handleClick}
                className="btn btn-primary"
                hidden={note.etitle.length < 5 || note.edescription.length < 5}
              >
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-2">
        <h2>Your Notes</h2>
        <div className="row my-3">
          <div className="container mx-2">
            {notes.length === 0 && "No Notes To Display"}
          </div>
          {/* <div> */}
          {notes.map((notes) => {
            return (
              <Noteitem key={notes._id} updatenote={updateNote} notes={notes} />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Notes;
