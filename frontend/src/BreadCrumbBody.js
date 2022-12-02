import React from "react";
import { FaFolder, FaFile } from "react-icons/fa";
import "./BreadCrumb.css";

function BreadCrumbBody({ folderData, setPath, path }) {
  const folders = folderData?.preppedData?.children;

  // function for when a user clicks on a folder to navigate
  const handleFolderClick = (key) => {
    // add the clicked folder to the breadcrumb path
    setPath([...path, key]);
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
            {key}
          </div>
        );
      } else {
        // if the folder is a file, map the following
        return (
          <div key={key} className="folder-body">
            <FaFile size="4em" />
            {key}
          </div>
        );
      }
    });
  }

  return (
    <div className="crumbs">
      {dataArray ? dataArray : ""}
      {/* <div className="folder-name"></div> */}
    </div>
  );
}

export default BreadCrumbBody;
