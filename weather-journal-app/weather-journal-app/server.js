//Globals
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const projectData = {};

//Create instance of server
const app = express();

//Configuring express to use body-parser as middle-ware.
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

// Cors for cross origin allowance
app.use(cors());

//To give server info about what to serve
app.use(express.static("website"));

//listen on port 3000
const port = 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

/**
 * @description post data to project data object
 * @param {req} request
 * @param {res} response
 */
app.post("/addPost", (req, res) => {
  //console.log(req.body);
  projectData.temp = req.body.temperature;
  projectData.feel = req.body.feeling;
  projectData.date = req.body.date;
  res.send({
    msg: "Hi Received your post"
  });
});



/**
 * @description get project data object
 * @param {req} request
 * @param {res} response
 */
app.get("/addGet", getProjectdata);



/**
 * @description callback function to send project data to client 
 * @param {req} request
 * @param {res} response
 */
function getProjectdata(req, res) {
  res.send(projectData);

};


