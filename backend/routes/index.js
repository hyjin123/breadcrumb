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
  // console.log("this is query", req.query.path);
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

  console.log(preppedData);

  res.json({ preppedData });
});

module.exports = router;

// root[root][home][]
