var express = require("express");
var router = express.Router();

// this is the data that needs to be passed down to the front end
let root = {
  type: "dir",
  children: {
    home: {
      type: "dir",
      children: {
        myname: {
          type: "dir",
          children: {
            "filea.txt": {
              type: "file",
            },
            "fileb.txt": {
              type: "file",
            },
            projects: {
              type: "dir",
              children: {
                mysupersecretproject: {
                  type: "dir",
                  children: {
                    mysupersecretfile: {
                      type: "file",
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};

/* GET path */
router.get("/path", function (req, res, next) {
  // this is the path query we receive from the front end
  const path = req.query.path;
  // start the loop at root
  let preppedData = root;
  // loop through the path as it is in array form and come up with the prepped data
  for (const folder of path) {
    if (folder !== "root") {
      preppedData = preppedData.children[folder];
    } else {
      // if the path is just root
      preppedData = root;
    }
  }

  // if folder contains another folder, delete it's children as this is not needed in the front-end (don't need the children subtree)
  // make a deep copy first so that the original root object is not affected when children objects are deleted
  const copiedData = JSON.parse(JSON.stringify(preppedData));

  for (const element in copiedData.children) {
    // if the children contains a directory, delete the children property
    if (copiedData.children[element].children) {
      delete copiedData.children[element].children;
    }
  }

  res.json({ copiedData });
});

module.exports = router;
