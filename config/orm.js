const connection = require("../config/connection.js");

const orm = 
{

	selectAll: function(tableInput, callback)
	{

		connection.query('SELECT * FROM ' + tableInput + ';', function(err, result) 
		{
			if(err) 
			{
				console.log(err);
			}

			else
			{
				callback(result);
			}
		})
	},
	
		insertOne: function(burger_name, callback)
    {

        connection.query('INSERT INTO burgers SET ?', 
        [{
        	burger_name: burger_name,
        	devoured: false
        }],

        	function(err, result)
        {
            if(err)
            {
                throw err;
            }

            callback(result);
        });
    },

    	updateOne: function(burger_id, callback) 
    	{

    		connection.query('UPDATE burgers SET devoured = true WHERE ?',
    		[{
    			
    			id: burger_id
    		}],

    			function(err, result) 
    			{
    				if(err) 
    				{
    					throw err;
    				}

    				callback(result);
    			})
    	},

        deleteOne: function(burger_id, callback)
        {
            connection.query('DELETE FROM burgers WHERE ?',
                {
                    id:burger_id
                }, 

                function(err, result)
                {
                    if(err) 
                    {
                        throw err;
                    }

                    callback(result);
                })
        }

// selectAll() 

// insertOne() 

// updateOne()

};


module.exports = orm;
