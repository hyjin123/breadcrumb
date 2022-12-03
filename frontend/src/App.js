import React, { useState, useEffect } from "react";
import "./App.css";
import { FaArrowLeft } from "react-icons/fa";
import axios from "axios";
import BreadCrumb from "./BreadCrumb";
import BreadCrumbBody from "./BreadCrumbBody";

function App() {
  // store the path in a state
  const [path, setPath] = useState(["root", "home", "myname"]);
  const [folderData, setFolderData] = useState(null);

  // fetch the data from the backend (where root variable is located). Send the path information as params
  useEffect(() => {
    axios
      .get(`/path`, {
        params: {
          path,
        },
      })
      .then((res) => {
        setFolderData(res.data);
      })
      .catch((err) => console.log(err.message));
  }, [path]);

  const handleBackClick = () => {
    // create a copy of the path
    const pathCopy = path;

    // if the path is the first path (root), don't do anything
    if (path.length !== 1) {
      // remove the last element in the path
      pathCopy.pop();
      setPath([...pathCopy]);
    }
  };

  return (
    <div className="App">
      {/* Heading */}
      <div>
        <h1>Breadcrumb</h1>
      </div>

      {/* Breadcrumb navigation */}
      <div className="crumb">
        {/* Back Button */}
        <div onClick={handleBackClick} className="back-button">
          <FaArrowLeft />
          <div>Back</div>
        </div>

        {path.map((folder) => (
          <BreadCrumb
            key={folder}
            folder={folder}
            setPath={setPath}
            path={path}
          />
        ))}
      </div>

      {/* Content of the path */}
      <div className="body">
        <BreadCrumbBody folderData={folderData} setPath={setPath} path={path} />
      </div>
    </div>
  );
}

export default App;
