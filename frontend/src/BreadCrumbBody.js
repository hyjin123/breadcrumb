import React, { useState } from "react";
import { FaFolder, FaFile } from "react-icons/fa";
import "./BreadCrumb.css";
import OpenFileModal from "./OpenFileModal";

function BreadCrumbBody({ folderData, setPath, path }) {
  // state for modal
  const [open, setOpen] = useState(true);
  // state to distinguish which file is opened
  const [file, setFile] = useState("");

  const folders = folderData?.preppedData?.children;

  // function for when a user clicks on a folder to navigate
  const handleFolderClick = (key) => {
    // add the clicked folder to the breadcrumb path
    setPath([...path, key]);
  };

  // function for when a user clicks on a file to open, it opens a modal
  const handleFileClick = (key) => {
    // open the modal
    setOpen(true);
    // set the file name
    setFile(key);
  };

  let dataArray = [];

  // map through the folder object and display it in the component
  if (folders) {
    dataArray = Object.keys(folders).map((key) => {
      // if the folder is directory, map the following
      if (folders[key].type === "dir") {
        return (
          <div
            onClick={() => handleFolderClick(key)}
            key={key}
            className="folder-body"
          >
            <FaFolder size="4em" />
            <div className="folder-body-name">{key}</div>
          </div>
        );
      } else {
        // if the folder is a file, map the following
        return (
          <div
            onClick={() => handleFileClick(key)}
            key={key}
            className="folder-body"
          >
            <FaFile size="4em" />
            <div className="folder-body-name">{key}</div>
          </div>
        );
      }
    });
  }

  return (
    <div className="crumbs">
      {/* modal will open once user clicks on the file */}
      {open && <OpenFileModal setOpen={setOpen} file={file} />}

      {/* display all the files and folders */}
      {dataArray ? dataArray : ""}
    </div>
  );
}

export default BreadCrumbBody;
