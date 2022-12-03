import React, { useState } from "react";
import { FaFolder, FaFile } from "react-icons/fa";
import "./BreadCrumb.css";
import OpenFileModal from "./OpenFileModal";

function BreadCrumbBody({ folderData, setPath, path }) {
  // state for modal
  const [open, setOpen] = useState(false);
  // state to distinguish which file is opened
  const [file, setFile] = useState("");

  const folders = folderData?.children;

  // function for when a user clicks on a folder to navigate
  const handleFolderClick = (folder) => {
    // add the clicked folder to the breadcrumb path
    setPath([...path, folder]);
  };

  // function for when a user clicks on a file to open, it opens a modal
  const handleFileClick = (folder) => {
    // open the modal
    setOpen(folder);
    // set the file name
    setFile(folder);
  };

  let dataArray = [];

  // map through the folder object and display it in the component
  if (folders) {
    dataArray = Object.keys(folders).map((folder) => {
      // if the folder is directory, map the following
      if (folders[folder].type === "dir") {
        return (
          <div
            onClick={() => handleFolderClick(folder)}
            key={folder}
            className="folder-body"
          >
            <FaFolder size="4em" />
            <div className="folder-body-name">{folder}</div>
          </div>
        );
      } else {
        // if the folder is a file, map the following
        return (
          <div
            onClick={() => handleFileClick(folder)}
            key={folder}
            className="folder-body"
          >
            <FaFile size="4em" />
            <div className="folder-body-name">{folder}</div>
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
