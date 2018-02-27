const express = require("express");
const router = express.Router();
const burger = require("../models/burgers.js");

router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function(req, res) {
  console.log(req);
	burger.insertOne(req.body.burger_name, function(result){
      // res.send("New burger added");
      res.json({ id: result.id });
  });

});

// router.post("/api/burgers", function(req, res) {
//   burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function(result) {
// 
//     res.json({ id: result.insertId });
//   });
// });

router.put('/api/burgers/:id', function (req, res) {
  burger.updateOne(req.params.id, function() {
    res.send('State changed');
  });
});

router.delete('/api/burgers/:id', function (req, res) {
  burger.deleteOne(req.params.id, function() {
    res.send('Burger deleted');
  });
});


module.exports = router;