import React, { useContext } from "react";
import NoteContext from "../context/notes/NotesContext";
import "./Noteitem.css";

const Noteitem = (props) => {
  let context = useContext(NoteContext);
  const { deleteNote } = context;
  const { notes, updatenote } = props;
  const handelDeletenote = () => {
    deleteNote(notes._id);
  };
  return (
    <div className="col-md-3">
      <div className="note-card my-3">
        <div
          className="card-body"
          style={{ background: "powderblue", color: "black" }}
        >
          <div className="d-flex justify-content-between">
            <h5 className="card-title">{notes.title}</h5>
            <div>
              {/* Edit icon */}
              <i className="mx-1">
                <lord-icon
                  onClick={() => {
                    updatenote(notes);
                  }}
                  src="https://cdn.lordicon.com/qtqvorle.json"
                  trigger="hover"
                  style={{ width: "30px", height: "30px" }}
                ></lord-icon>
              </i>
              {/* Delete icon */}
              <i className="mx-1" onClick={handelDeletenote}>
                <lord-icon
                  src="https://cdn.lordicon.com/jmkrnisz.json"
                  trigger="morph"
                  colors="primary:#121331"
                  state="morph-fill"
                  style={{ width: "30px", height: "30px" }}
                ></lord-icon>
              </i>
              {/* <i className="material-symbols-outlined mx-1">edit_note</i> */}
              {/* <i className="material-symbols-outlined mx-1">delete_forever</i> */}
            </div>
          </div>
          <p className="card-text">{notes.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
