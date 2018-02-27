const orm = require("../config/orm.js");

const burger = 
{
	selectAll: function(callback) 
	{
		orm.selectAll("burgers", function(res) 
		{
			callback(res);
		})
	},

 	insertOne: function(burger_name, callback)
 	{
    	orm.insertOne(burger_name, function(res)
    	{
    		console.log(res.body);
      	callback(res);
    	})
  	},

  	updateOne: function(burger_id, callback)
  	{
  		orm.updateOne(burger_id, function(res) 
  		{
  			callback(res);
  		})
  	},

     deleteOne: function(burger_id, callback) {
    orm.deleteOne(burger_id, function(res) {
      callback(res);
    });
  }



};

module.exports = burger;
