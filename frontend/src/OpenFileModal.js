import React from "react";
import "./Modal.css";

function OpenFileModal({ setOpen, file }) {
  return (
    <div className="modal">
      <div className="modal-body">
        <div className="modal-caption">You've opened the file: </div>
        <div className="modal-filename">{file}</div>
        <button onClick={() => setOpen(false)}>Close</button>
      </div>
    </div>
  );
}

export default OpenFileModal;
