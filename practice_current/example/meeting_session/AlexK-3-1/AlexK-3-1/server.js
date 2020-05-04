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
app.use(express.static("public"));


const port = 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


app.post("/addPost", (req, res) => {
  console.log(req.body);
  projectData.temp = req.body.temperature;
  projectData.feel = req.body.feeling;
  projectData.date = req.body.date;
  res.send({
    msg: "Hi Received your post"
  });
});

app.get("/addGet", (req, res) => {
  res.send(projectData);
});