import React from "react";
import { FaArrowRight } from "react-icons/fa";
import "./BreadCrumb.css";

function BreadCrumb({ folder, path, setPath }) {
  // when a user clicks on the breadcrumb folder
  const handleBreadCrumbClick = (folder) => {
    // create a copy of the path
    const pathCopy = path;
    for (let i = 0; i < pathCopy.length; i++) {
      let position;
      // loop through the existing path state and find the position of the folder
      if (pathCopy[i] === folder) {
        position = i + 1;
        // once position is found, use splice to delete children directories
        pathCopy.splice(position);
        // set the path with the new path copy using spread operator
        setPath([...pathCopy]);
      }
    }
  };

  return (
    <div className="crumbs">
      <div className="arrow">
        <FaArrowRight size="1em" color="#736f6e" />
      </div>
      <div
        onClick={() => handleBreadCrumbClick(folder)}
        className={`${
          path[path.length - 1] === folder
            ? "current-folder-name"
            : "folder-name"
        }`}
      >
        {folder}
      </div>
    </div>
  );
}

export default BreadCrumb;
