const express = require("express");
const bodyParser = require("body-parser");
const expressHandlebars = require("express-handlebars");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));

app.engine("handlebars", expressHandlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burger-controller.js");
app.use(routes);



app.listen(port, function() {
  console.log("App now listening at localhost:" + port); 
});
