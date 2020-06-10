const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const app = express();
const fetch = require("node-fetch");
const ejs = require("ejs");

app.set('view engine', 'ejs');


app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/", function(req, res) {



  fetch('https://satyabratadas.pythonanywhere.com/api/allposts/')
    .then(res => res.json())
    .then((out) => {
      const cloneArray = JSON.parse(JSON.stringify(out));
      //console.log(cloneArray);
      res.render("home", {
        out: cloneArray
      });
      //console.log('Output: ', out);
    }).catch(err => console.error(err));


});





app.listen(3000, function() {
  console.log("server running on port 3000");
});
