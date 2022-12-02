import React from "react";
import { FaFolder, FaFile } from "react-icons/fa";
import "./BreadCrumb.css";

function BreadCrumbBody({ folderData }) {
  const folders = folderData?.preppedData?.children;

  let dataArray = [];

  // map through the folder object and display it in the component
  if (folders) {
    let hello = Object.keys(folders);
    dataArray = hello.map((key) => {
      // if the folder is directory, map the following
      if (folders[key].type === "dir") {
        return (
          <div key={key} className="folder-body">
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
