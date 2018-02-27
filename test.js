const express = require("express");
const mysql = require("mysql2");

const app = express();
const port = process.env.PORT || 3000;


const connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "tWister@710",
  database: "burger_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});




app.get("/", function(req, res){

	connection.query('SELECT * FROM burgers;', function(err,result) 
		{
			if(err) 
			{
				console.log(err);
			}

			else
			{
			console.log(result);
			}
		}) 
	
});



app.listen(port, function() {
  console.log("App now listening at localhost:" + port);
});
