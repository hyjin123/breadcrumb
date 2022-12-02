import React, { useState, useEffect } from "react";
import "./App.css";
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

  console.log("this is the new path", path);
  return (
    <div className="App">
      {/* Heading */}
      <div>
        <h1>Breadcrumb</h1>
      </div>

      {/* Breadcrumb navigation */}
      <div className="crumbs">
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
