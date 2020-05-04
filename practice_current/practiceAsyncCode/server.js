const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const animal = {animal:'Lion',
                fact :'dangerours'
}


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


const port = 8000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});



app.get('/getFake', getFakeData)



function getFakeData(req,res){

res.send("animal")


}